import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { WatchListMenuWrapper } from "./style";
import { getWatchListMovie, getWatchListTv, deleteMovie, deleteTv } from "./../actions";
import _reverse from "lodash/reverse";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Button from "../../../component/Button";
import {selectWatchListMovie, selectWatchListTv} from "../selectors";
import { useTranslation } from "react-i18next";
import Image from "../../../component/Image";

const WatchListMenu = ({
  type, // lấy từ redirectWatchListMenu trong component Header
}) => {
  const { t } = useTranslation();
  const watchListMovie = useSelector(selectWatchListMovie);
  const watchListTv = useSelector(selectWatchListTv);
  const dispatch = useDispatch();
  const [scrollToTop, setScrollToTop] = useState(false);
  const history = useHistory();
  const handleRedirectToMovie = (id) => {
    history.push(`/movie/${id}`);
  };

  const handleRedirectToTv = (id) => {
    history.push(`/tv/${id}`);
  };

  const onDeleteMovie = (item) => {
    dispatch(deleteMovie(item));
  };

  const onDeleteTv = (item) => {
    dispatch(deleteTv(item));
  };
  
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
    handleScrollToTop();
    if (type === "list-movie") {
      dispatch(getWatchListMovie());
    } else {
      dispatch(getWatchListTv());
    }
  }, [type]);

  const getListByType = () => {
    if (type === "list-movie") {
      return watchListMovie;
    } else {
      return watchListTv;
    }
  };

  useEffect(() => {
    if (type === "list-movie") {
      dispatch(getWatchListMovie());
    } else {
      dispatch(getWatchListTv());
    }
  }, [getListByType]);

  if (!watchListMovie) {
    return <h3>Loading...</h3>;
  }

  const handleScrollToTop = () => window.scrollTo({
    top: 0,
    behavior: "smooth"
  })

  return (
    <WatchListMenuWrapper>
      <div className="window-wrapper">
        {(type === "list-movie") ? (
          <h2 className="tab-name">{t("Watch_List_Movie")}</h2>
        ) :  (
          <h2 className="tab-name">{t("Watch_List_Tv_Show")}</h2>
        )}

        <div className="media">
          {_reverse(
            getListByType().map((item) => (
              <div className="item">
                <Image
                alt="movie"
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                  className="image"
                  onClick={(type === "list-movie") ? (() => handleRedirectToMovie(item.movie_id)) : (() => handleRedirectToTv(item.tv_id))}
                />
                <Button
                  className="delete-btn"
                  icon="fas fa-window-close"
                  onClick={(type === "list-movie") ? (() => onDeleteMovie(item.id)) : (() => onDeleteTv(item.id))}
                />
                <div className="percent-box">
                  <CircularProgress
                    className="circle"
                    variant="determinate"
                    value={item.vote_average * 10}
                  />
                  <span
                    className="percent"
                    style={
                      item.vote_average === 10
                        ? { left: "7px" }
                        : { left: "9px" }
                    }
                  >
                    {Math.floor(item.vote_average * 10)}
                    <sup className="percent-text">%</sup>
                  </span>
                </div>
                <div className="content">
                  <h2 className="title" onClick={(type === "list-movie") ? (() => handleRedirectToMovie(item.movie_id)) : (() => handleRedirectToTv(item.tv_id))}>{item.original_title || item.name}</h2>
                  <span>{item.release_date || item.first_air_date}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {scrollToTop && <Button
        icon="fas fa-arrow-up"
        onClick={handleScrollToTop}
        className="scroll-up-btn"
      />}
    </WatchListMenuWrapper>
  );
};

export default WatchListMenu;
