import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TvWrapper } from "./style";
import { getTvAbout, postTv, deleteTv, getWatchListTv } from "./../actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import ListCast from "../components/ListCast";
import ListMedia from "../components/ListMedia";
import ListRecommend from "../components/ListRecommend";
import PopupVideo from "../components/PopupVideo";
import Button from "../../../component/Button";
import Loading from "../../components/Loading";
import {selectTvAbout, selectWatchListTv} from "../selectors";
import { useTranslation } from "react-i18next";

const Tv = ({
  tvId,
}) => {
  const { t } = useTranslation();
  const id = tvId;
  const tvAbout = useSelector(selectTvAbout);
  const watchListTv = useSelector(selectWatchListTv);
  const dispatch = useDispatch();
  const [isAddButton, setIsAddButton] = useState();
  const [state, setState] = useState({
    statusPopup: false,
    video: "",
    id: "",
  });
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleScrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  useEffect(() => {
    dispatch(getWatchListTv())
    dispatch(getTvAbout(id));
    handleCheckButton();
    handleScrollToTop();
  }, [id]);

  useEffect(() => {
    let toTop = () => {
      setScrollToTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", toTop);
    return () => {
      window.removeEventListener("scroll", toTop);
    };
  }, []);

  useEffect(() => {
    handleCheckButton();
  }, [watchListTv])

  const handleCheckButton = () => {
    if (!watchListTv.length) {
      setIsAddButton(true);
      return null;
    }
    const listTvId = watchListTv.map((item) => {
      return item.tv_id;
    });
    const isExists = +listTvId.includes(+id);
    if (isExists) {
      setIsAddButton(false);
    } else {
      setIsAddButton(true);
    }
  };

  const onAddTv = () => {
    dispatch(postTv({
      id: tvAbout.id,
      tv_id: tvAbout.id,
      name: tvAbout.name,
      original_name: tvAbout.original_name,
      backdrop_path: tvAbout.backdrop_path,
      poster_path: tvAbout.poster_path,
      vote_average: tvAbout.vote_average,
      first_air_date: tvAbout.first_air_date,
    }));
    setIsAddButton(false);
    setTimeout(() => {
      dispatch(getWatchListTv())
    }, 500);
  };

  const onDeleteTv = () => {
    let getWatchListTvId = watchListTv.find(
      (item) => item.tv_id === tvAbout.id
    );
    dispatch(deleteTv(getWatchListTvId.id))
    setIsAddButton(true);
    setTimeout(() => {
      dispatch(getWatchListTv())
    }, 300);
  };

  if (!tvAbout.genres || !tvAbout.credits.cast || !tvAbout.poster_path) {
    return <Loading />;
  }

  const trailerVideo = tvAbout.videos.results.find(
    (item) => item.type === "Trailer"
  );
  const isExistVideo = () => {
    if (trailerVideo) {
      return trailerVideo.key;
    }
    return "";
  };

  const onPlayTrailer = () => {
    setState({
      ...state,
      statusPopup: true,
      video: `https://www.youtube.com/embed/${isExistVideo()}`,
      id: id,
    });
  };

  const handleCloseWindow = () => {
    setState({
      ...state,
      statusPopup: false,
      video: "",
    });
  };

  return (
    <TvWrapper>
      <div className="banner-background">
        <div className="banner-tv">
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${tvAbout.poster_path}`}
            className="banner-image"
          />
          <div className="banner-content">
            <h1 className="banner-title">{tvAbout.name}</h1>
            <h2 className="banner-original-titile">
              {t("Original_Title")} {tvAbout.original_name}
            </h2>
            <ul className="top-row">
              <li>
                <p className="text">{t("First_Air_Date")} {tvAbout.first_air_date}</p>
              </li>
              <ul>
                {tvAbout.genres.map((item) => (
                  <li className="category-item">{item.name}</li>
                ))}
              </ul>
            </ul>
            <p className="text">{t("Vote_Count")} {tvAbout.vote_count}</p>
            <ul className="row">
              <ul className="row-score">
                <li className="user-score">
                  <CircularProgress
                    className="circle"
                    variant="determinate"
                    value={tvAbout.vote_average * 10}
                  />
                  <span className="percent">{Math.floor(tvAbout.vote_average * 10)}%</span>
                </li>
                <li className="text-score">
                  <span>User Score</span>
                </li>
              </ul>
              <ul className="category">
                {isAddButton ? (
                  <li className="btn-item" onClick={onAddTv}>
                    <i class="fas fa-bookmark"></i>
                    <span className="btn-text">Add To List</span>
                  </li>
                ) : (
                  <li className="btn-item" onClick={onDeleteTv}>
                    <i class="fas fa-bookmark"></i>
                    <span className="btn-text">Delete From List</span>
                  </li>
                )}

                <li className="btn-item" onClick={onPlayTrailer}>
                  <i class="fas fa-play"></i>
                  <span className="btn-text">Play Trailer</span>
                </li>
              </ul>
            </ul>
            <label className={state.statusPopup ? "overlay" : ""}></label>
            <h3 className="overview">{t("Overview")}</h3>
            <p className="description">{tvAbout.overview}</p>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="top-cast">
          <ListCast
            title={t("Series_Cast")}
            list={tvAbout.credits.cast}
          />
        </div>
        <div className="media">
          <ListMedia
            listVideo={tvAbout.videos.results}
            listBackdrop={tvAbout.images.backdrops}
            listPoster={tvAbout.images.posters}
          />
        </div>
        <div className="recommend">
          <ListRecommend list={tvAbout.recommendations.results} type="tv" />
        </div>
      </div>
      {state.statusPopup && <PopupVideo
        handleCloseWindow={handleCloseWindow}
        video={state.video}
        statusPopup={state.statusPopup}
      />}
      {scrollToTop && (
        <Button
          icon="fas fa-arrow-up"
          onClick={handleScrollToTop}
          className="scroll-up-btn"
        />
      )}
    </TvWrapper>
  );
};

export default Tv;
