import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MovieMenuWrapper } from "./style";
import {
  getPopularMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
} from "../actions";
import Genres from "../components/Genres";
import _intersection from "lodash/intersection";
import { CircularProgress } from "@material-ui/core";
import SortList from "../components/SortList";
import _reverse from "lodash/reverse";
import { useHistory } from "react-router-dom";
import Button from "../../../component/Button";
import {selectPopularMovies, selectNowPlayingMovies, selectUpcoming, selectTopRatedMovies} from "../selectors";
import { useTranslation } from "react-i18next";
import Image from "../../../component/Image";

const MovieMenu = ({
  type, // lấy từ redirectTv trong component Header
}) => {
  const { t } = useTranslation();
  const popularMovies = useSelector(selectPopularMovies);
  const nowPlayingMovies = useSelector(selectNowPlayingMovies);
  const Upcoming = useSelector(selectUpcoming);
  const topRatedMovies = useSelector(selectTopRatedMovies);
  const dispatch = useDispatch();
  const BASE_IMAGE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face/";
  const [selectGenre, setSelectGenre] = useState([]);
  const [selectSort, setSelectSort] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [listPopularMovies, setListPopularMovies] = useState([
    ...popularMovies,
  ]);
  const [listNowPlayingMovies, setListNowPlayingMovies] = useState([
    ...nowPlayingMovies,
  ]);
  const [listUpcomingMovies, setListUpcomingMovies] = useState([...Upcoming]);
  const [listTopRatedMovies, setListTopRatedMovies] = useState([
    ...topRatedMovies,
  ]);
  const [tabname, setTabname] = useState("");
  const [scrollToTop, setScrollToTop] = useState(false);


  useEffect(() => {
    if (type === "popular") {
      dispatch(getPopularMovies(pageNumber));
    } else if (type === "now-playing") {
      dispatch(getNowPlayingMovies(pageNumber));
    } else if (type === "upcoming") {
      dispatch(getUpcomingMovies(pageNumber));
    } else {
      dispatch(getTopRatedMovies(pageNumber));
    }
  }, [pageNumber]);

  useEffect(() => {
    setPageNumber(1);
    setSelectSort(0);
    setSelectGenre([]);
    handleScrollToTop()
    if (type === "popular") {
      dispatch(getPopularMovies(pageNumber));
      setListPopularMovies([]);
      setTabname(t("Popular_Movies"))
    } else if (type === "now-playing") {
      dispatch(getNowPlayingMovies(pageNumber));
      setListNowPlayingMovies([]);
      setTabname(t("Now_Playing_Movies"))
    } else if (type === "upcoming") {
      dispatch(getUpcomingMovies(pageNumber));
      setListUpcomingMovies([]);
      setTabname(t("Upcoming_Movies"))
    } else {
      dispatch(getTopRatedMovies(pageNumber));
      setListTopRatedMovies([]);
      setTabname(t("Top_Rated_Movies"))
    }
  }, [type]);

  useEffect(() => {
    let toTop = () => {
      setScrollToTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", toTop);
    return () => {
      window.removeEventListener("scroll", toTop);
    };
  }, []);

  const handleScrollToTop = () => window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  const history = useHistory();
  const handleRedirectToMovie = (id) => {
    history.push(`/movie/${id}`);
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
    if (o1.original_title > o2.original_title) {
      return 1;
    } else if (o1.original_title < o2.original_title) {
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

  const getMovieByType = () => {
    switch (type) {
      case "popular":
        if (selectSort !== 0) {
          return handleSortFeature([...listPopularMovies, ...popularMovies]);
        }
        if (selectGenre.length) {
          return filterPopularMovieByGenre([
            ...listPopularMovies,
            ...popularMovies,
          ]);
        }
        return [...listPopularMovies, ...popularMovies];

      case "now-playing":
        if (selectSort !== 0) {
          return handleSortFeature([
            ...listNowPlayingMovies,
            ...nowPlayingMovies,
          ]);
        }
        if (selectGenre.length) {
          return filterPopularMovieByGenre([
            ...listNowPlayingMovies,
            ...nowPlayingMovies,
          ]);
        }
        return [...listNowPlayingMovies, ...nowPlayingMovies];

      case "upcoming":
        if (selectSort !== 0) {
          return handleSortFeature([...listUpcomingMovies, ...Upcoming]);
        }
        if (selectGenre.length) {
          return filterPopularMovieByGenre([
            ...listUpcomingMovies,
            ...Upcoming,
          ]);
        }
        return [...listUpcomingMovies, ...Upcoming];

      case "top-rated":
        if (selectSort !== 0) {
          return handleSortFeature([...listTopRatedMovies, ...topRatedMovies]);
        }
        if (selectGenre.length) {
          return filterPopularMovieByGenre([
            ...listTopRatedMovies,
            ...topRatedMovies,
          ]);
        }
        return [...listTopRatedMovies, ...topRatedMovies];
    }
  };

  const handleLoadMore = () => {
    switch (type) {
      case "popular":
        setPageNumber(pageNumber + 1);
        setListPopularMovies([...listPopularMovies, ...popularMovies]);

      case "now-playing":
        setPageNumber(pageNumber + 1);
        setListNowPlayingMovies([...listNowPlayingMovies, ...nowPlayingMovies]);

      case "upcoming":
        setPageNumber(pageNumber + 1);
        setListUpcomingMovies([...listUpcomingMovies, ...Upcoming]);

      case "top-rated":
        setPageNumber(pageNumber + 1);
        setListTopRatedMovies([...listTopRatedMovies, ...topRatedMovies]);
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
            {getMovieByType().length ? getMovieByType().map((item) => (
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

export default MovieMenu;
