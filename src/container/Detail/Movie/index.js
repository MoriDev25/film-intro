import React, { useEffect, useState } from "react";
import { MovieWrapper } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovieAbout,
  postMovie,
  deleteMovie,
  getWatchListMovie,
} from "./../actions";
import Image from "../../../component/Image";
import CircularProgress from "@material-ui/core/CircularProgress";
import ListCast from "../components/ListCast";
import ListMedia from "../components/ListMedia";
import ListRecommend from "../components/ListRecommend";
import PopupVideo from "../components/PopupVideo";
import Button from "../../../component/Button";
import Loading from "../../components/Loading";
import {selectMovieAbout, selectWatchListMovie} from "../selectors";
import { useTranslation } from "react-i18next";

const Movie = ({
  movieId, //lấy movieId từ redirection trong Header
}) => {
  const movieAbout = useSelector(selectMovieAbout);
  const watchListMovie = useSelector(selectWatchListMovie);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const id = movieId;
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
    dispatch(getWatchListMovie())
    dispatch(getMovieAbout(id))
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
  }, [watchListMovie])

  const handleCheckButton = () => {
    if (!watchListMovie.length) {
      setIsAddButton(true);
      return null;
    }
    const listMovieId = watchListMovie.map((item) => {
      return item.movie_id;
    });
    const isExists = +listMovieId.includes(+id);
    if (isExists) {
      setIsAddButton(false);
    } else {
      setIsAddButton(true);
    }
  };

  const onAddMovie = () => {
    dispatch(postMovie({
      id: movieAbout.id,
      movie_id: movieAbout.id,
      title: movieAbout.title,
      original_title: movieAbout.original_title,
      backdrop_path: movieAbout.backdrop_path,
      poster_path: movieAbout.poster_path,
      vote_average: movieAbout.vote_average,
      release_date: movieAbout.release_date,
    }));
    setIsAddButton(false);
    setTimeout(() => {
      dispatch(getWatchListMovie())
    }, 300);
  };

  const onDeleteMovie = () => {
    let getWatchListMovieId = watchListMovie.find(
      (item) => item.movie_id === movieAbout.id
    );
    dispatch(deleteMovie(getWatchListMovieId.id));
    setIsAddButton(true);
    setTimeout(() => {
      dispatch(getWatchListMovie())
    }, 300);
  };

  if (!movieAbout.genres || !movieAbout.credits.cast || !movieAbout.poster_path) {
    return <Loading />;
  }

  const trailerVideo = movieAbout.videos.results.find(
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
    <MovieWrapper>
      <div className="banner-background">
        <div className="banner-movie">
          <img
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${movieAbout.poster_path}`}
            className="banner-image"
          />
          <div className="banner-content">
            <h1 className="banner-titile">{movieAbout.title}</h1>
            <h2 className="banner-original-titile">
              {t("Original_Title")} {movieAbout.original_title}
            </h2>
            <ul className="top-row">
              <li>
                <p className="text">{t("Release_Date")} {movieAbout.release_date}</p>
              </li>
              <ul>
                {movieAbout.genres.map((item) => (
                  <li className="category-item">{item.name}</li>
                ))}
              </ul>
            </ul>
            <p className="text">{t("Vote_Count")} {movieAbout.vote_count}</p>
            <ul className="row">
              <ul className="row-score">
                <li className="user-score">
                  <CircularProgress
                    className="circle"
                    variant="determinate"
                    value={movieAbout.vote_average * 10}
                  />
                  <span className="percent">
                    {Math.floor(movieAbout.vote_average * 10)}%
                  </span>
                </li>
                <li className="text-score">
                  <span>User Score</span>
                </li>
              </ul>
              <ul className="category">
                {isAddButton ? (
                  <li className="btn-item" onClick={onAddMovie}>
                    <i class="fas fa-bookmark"></i>
                    <span className="btn-text">Add To List</span>
                  </li>
                ) : (
                  <li className="btn-item" onClick={onDeleteMovie}>
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
            <p className="description">{movieAbout.overview}</p>
          </div>
        </div>
      </div>
      <div className="content-wrapper">
        <div className="top-cast">
          <ListCast
            title={t("Top_Billed_Cast")}
            list={movieAbout.credits.cast}
          />
        </div>
        <div className="media">
          <ListMedia
            listVideo={movieAbout.videos.results}
            listBackdrop={movieAbout.images.backdrops}
            listPoster={movieAbout.images.posters}
            id={id} //id dùng cho useEffect
          />
        </div>
        <div className="recommend">
          <ListRecommend
            list={movieAbout.recommendations.results}
            type="movie"
          />
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
    </MovieWrapper>
  );
};

export default Movie;
