import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MovieMenuWrapper } from "./style";
import {
  getPopularShows,
  getAiringToday,
  getOnTv,
  getTopRatedShows,
} from "../actions";
import Genres from "../components/Genres";
import _intersection from "lodash/intersection";
import { CircularProgress } from "@material-ui/core";
import SortList from "../components/SortList";
import _reverse from "lodash/reverse";
import { useHistory } from "react-router-dom";
import Button from "../../../component/Button";
import {selectPopularShows, selectAiringToday, selectOnTv, selectTopRatedShows} from "../selectors";
import { useTranslation } from "react-i18next";
import Image from "../../../component/Image";

const TvMenu = ({
  type,
}) => {
  const { t } = useTranslation();
  const popularShows = useSelector(selectPopularShows);
  const airingToday = useSelector(selectAiringToday);
  const onTv = useSelector(selectOnTv);
  const topRatedShows = useSelector(selectTopRatedShows);
  const dispatch = useDispatch();
  const BASE_IMAGE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  const [selectGenre, setSelectGenre] = useState([]);
  const [selectSort, setSelectSort] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [listPopularShows, setListPopularShows] = useState([...popularShows]);
  const [listAiringToday, setListAiringToday] = useState([...airingToday]);
  const [listOnTv, setListOnTv] = useState([...onTv]);
  const [listTopRatedShows, setListTopRatedShows] = useState([
    ...topRatedShows,
  ]);
  const [tabname, setTabname] = useState("");
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    if (type === "popular") {
      dispatch(getPopularShows(pageNumber));
    } else if (type === "airing-today") {
      dispatch(getAiringToday(pageNumber));
    } else if (type === "on-tv") {
      dispatch(getOnTv(pageNumber));
    } else {
      dispatch(getTopRatedShows(pageNumber));
    }
  }, [pageNumber]);

  useEffect(() => {
    setPageNumber(1);
    setSelectSort(0);
    setSelectGenre([]);
    handleScrollToTop()
    if (type === "popular") {
      dispatch(getPopularShows(pageNumber));
      setListPopularShows([]);
      setTabname(t("Popular_TV_Shows"))
    } else if (type === "airing-today") {
      dispatch(getAiringToday(pageNumber));
      setListAiringToday([]);
      setTabname(t("Airing_Today_TV_Shows"))
    } else if (type === "on-tv") {
      dispatch(getOnTv(pageNumber));
      setListOnTv([]);
      setTabname(t("On_TV_Shows"))
    } else {
      dispatch(getTopRatedShows(pageNumber));
      setListTopRatedShows([]);
      setTabname(t("Top_Rated_TV_Shows"))
    }
  }, [type]);

  useEffect(() => {
    let toTop = () => {
      setScrollToTop(window.scrollY > 100)
    }
    window.addEventListener("scroll", toTop);
    return () => {
      window.removeEventListener("scroll", toTop)
    }
  }, [])

  const history = useHistory();
  const handleRedirectToMovie = (id) => {
    history.push(`/tv/${id}`);
  };

  const handleSelectGenre = (genreItem) => {
    setSelectSort(0);
    const isExists = selectGenre.includes(genreItem);
    let result = [];
    if (isExists) {
      result = selectGenre.filter((item) => item !== genreItem);
    } else {
      result = [...selectGenre, genreItem];
    }
    setSelectGenre(result);
  };

  const handleScrollToTop = () => window.scrollTo({
    top: 0,
    behavior: "smooth"
  })

  const filterPopularMovieByGenre = (list) => {
    const newList = list.filter((item) => {
      const { genre_ids } = item;
      const filterData = _intersection(selectGenre, genre_ids);
      if (filterData.length) return true;
      return false;
    });
    return newList;
  };

  const compareScore = (o1, o2) => {
    if (o1.vote_average > o2.vote_average) {
      return 1;
    } else if (o1.vote_average < o2.vote_average) {
      return -1;
    }
    return 0;
  };

  const compareName = (o1, o2) => {
    if (o1.original_name > o2.original_name) {
      return 1;
    } else if (o1.original_name < o2.original_name) {
      return -1;
    }
    return 0;
  };

  const handleSelectSort = (event) => {
    setSelectGenre([]);
    const { value } = event.target;
    setSelectSort(+value);
  };

  const handleSortFeature = (list) => {
    let newList = [];
    if (selectSort === 1) {
      newList = [...list].sort(compareScore);
    } else if (selectSort === 2) {
      newList = _reverse([...list.sort(compareScore)]);
    } else if (selectSort === 3) {
      newList = [...list].sort(compareName);
    } else if (selectSort === 4) {
      newList = _reverse([...list].sort(compareName));
    } else {
      newList = list;
    }
    return newList;
  };

  const getTvByType = () => {
    switch (type) {
      case "popular":
        if (selectSort !== 0) {
          return handleSortFeature([...listPopularShows, ...popularShows]);
        }
        if (selectGenre.length) {
          return filterPopularMovieByGenre([
            ...listPopularShows,
            ...popularShows,
          ]);
        }
        return [...listPopularShows, ...popularShows];

      case "airing-today":
        if (selectSort !== 0) {
          return handleSortFeature([...listAiringToday, ...airingToday]);
        }
        if (selectGenre.length) {
          return filterPopularMovieByGenre([
            ...listAiringToday,
            ...airingToday,
          ]);
        }
        return [...listAiringToday, ...airingToday];

      case "on-tv":
        if (selectSort !== 0) {
          return handleSortFeature([...listOnTv, ...onTv]);
        }
        if (selectGenre.length) {
          return filterPopularMovieByGenre([...listOnTv, ...onTv]);
        }
        return [...listOnTv, ...onTv];

      case "top-rated":
        if (selectSort !== 0) {
          return handleSortFeature([...listTopRatedShows, ...topRatedShows]);
        }
        if (selectGenre.length) {
          return filterPopularMovieByGenre([
            ...listTopRatedShows,
            ...topRatedShows,
          ]);
        }
        return [...listTopRatedShows, ...topRatedShows];
    }
  };

  const handleLoadMore = () => {
    switch (type) {
      case "popular":
        setPageNumber(pageNumber + 1);
        setListPopularShows([...listPopularShows, ...popularShows]);

      case "airing-today":
        setPageNumber(pageNumber + 1);
        setListAiringToday([...listAiringToday, ...airingToday]);

      case "on-tv":
        setPageNumber(pageNumber + 1);
        setListOnTv([...listOnTv, ...onTv]);

      case "top-rated":
        setPageNumber(pageNumber + 1);
        setListTopRatedShows([...listTopRatedShows, ...topRatedShows]);
    }
  };

  return (
    <MovieMenuWrapper>
      <div className="window-wrapper">
        <h2 className="name-content">{tabname}</h2>
        <div className="content-wrapper">
          <div className="feature">
            <div className="sort-feature">
              <h2 className="sort-text">{t("Sort")}</h2>
              <h3 className="sort-text2">{t("Sort_Results_By")}</h3>
              <SortList
                selectSort={selectSort}
                handleSelectSort={handleSelectSort}
              />
            </div>
            <div className="sort-feature">
              <h2 className="sort-text">{t("Filters")}</h2>
              <h3 className="sort-text2">{t("Filters_Results_By_Genres")}</h3>
              <Genres selectGenre={selectGenre} onClick={handleSelectGenre} />
            </div>
          </div>
          <div className="media">
            {getTvByType().length ? getTvByType().map((item) => (
              <div className="item">
                <Image
                  src={`${BASE_IMAGE_URL}/${item.poster_path}`}
                  className="image"
                  onClick={() => handleRedirectToMovie(item.id)}
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
                    {item.vote_average * 10}
                    <sup className="percent-text">%</sup>
                  </span>
                </div>
                <div className="content">
                  <h2 className="title" onClick={() => handleRedirectToMovie(item.id)}>{item.original_title || item.name}</h2>
                  <span>{item.release_date || item.first_air_date}</span>
                </div>
              </div>
            )) : <h1 className="not-found">{t("Not_Found_Movie")}</h1>}
            <Button name="Load More" onClick={handleLoadMore} className="load-more-btn"/>
          </div>
        </div>
      </div>
      {scrollToTop && <Button
        icon="fas fa-arrow-up"
        onClick={handleScrollToTop}
        className="scroll-up-btn"
      />}
    </MovieMenuWrapper>
  );
};

export default TvMenu;
