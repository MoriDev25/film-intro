import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SearchMenuWrapper } from "./style";
import {
  getSearchMovies,
  getSearchTvShows,
  getSearchPeople,
} from "./../actions";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Button from "../../../component/Button";
import {selectSearchMovies, selectSearchTvShows, selectSearchPeople} from "../selectors";
import { useTranslation } from "react-i18next";
import Image from "../../../component/Image";

export const SearchMenu = ({
  match,
}) => {
  const { t } = useTranslation();
  const searchMovies = useSelector(selectSearchMovies);
  const searchTvShows = useSelector(selectSearchTvShows);
  const searchPeople = useSelector(selectSearchPeople);
  const dispatch = useDispatch();
  const {
    params: { searchResult },
  } = match;

  const [currentId, setCurrentId] = useState(1);
  useEffect(() => {
    dispatch(getSearchMovies(searchResult));
    dispatch(getSearchTvShows(searchResult));
    dispatch(getSearchPeople(searchResult))
    setCurrentId(1);
  }, [searchResult]);
  const [scrollToTop, setScrollToTop] = useState(false);

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

  let searchText = history.location.pathname;
  let res = searchText.slice(8)

  const handleRedirect = (id) => {
    switch (currentId) {
      case 1:
        return history.push(`/movie/${id}`);
      case 2:
        return history.push(`/tv/${id}`);
      case 3:
        console.log("aaaaaaa")
        return history.push(`/people/${id}`);
    }
  }

  const handleChooseList = (id) => {
    setCurrentId(id);
  };

  const handleScrollToTop = () => window.scrollTo({
    top: 0,
    behavior: "smooth"
  })

  const getListById = () => {
    switch (currentId) {
      case 1:
        return searchMovies;
      case 2:
        return searchTvShows;
      case 3:
        return searchPeople;
    }
  };

  const selectMedia = [
    {
      id: 1,
      title: t("Movies"),
    },
    {
      id: 2,
      title: t("TV_Shows"),
    },
    {
      id: 3,
      title: t("People"),
    },
  ];

  return (
    <SearchMenuWrapper>
      <div className="content-wrapper">
        <div className="search-group">
        <h3 className="search-text search-for-box">{t("Search_For")} <span className="search-for">{res}</span></h3>
          <h3 className="search-text">{t("Search_Results")}</h3>
          <ul className="search-box">
            {selectMedia.map((item) => (
              <li
                className={`result-item ${
                  item.id === currentId ? "active" : ""
                }`}
              >
                <p
                  className="result-text"
                  onClick={() => handleChooseList(item.id)}
                >
                  {item.title}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className="media">
          {getListById().map((item) => (
            (currentId === 3) ? (
              <div className="item">
              <Image
                src={`https://www.themoviedb.org/t/p/w180_and_h180_face/${item.profile_path}`}
                className="image-people"
                onClick={() => handleRedirect(item.id)}
              />
              <div className="content-people">
                <h2 className="title" onClick={() => handleRedirect(item.id)}>{item.name}</h2>
                <span>{item.known_for_department}</span>
              </div>
            </div>
            ) : (
              <div className="item">
              <Image
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`}
                className="image"
                onClick={() => handleRedirect(item.id)}
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
                    item.vote_average === 10 ? { left: "7px" } : { left: "9px" }
                  }
                >
                  {item.vote_average * 10}
                  <sup className="percent-text">%</sup>
                </span>
              </div>
              <div className="content">
                <h2 className="title" onClick={() => handleRedirect(item.id)}>{item.original_title || item.name}</h2>
                <span>{item.release_date || item.first_air_date}</span>
              </div>
            </div>
            )
          ))}
        </div>
      </div>
      {scrollToTop && <Button
        icon="fas fa-arrow-up"
        onClick={handleScrollToTop}
        className="scroll-up-btn"
      />}
    </SearchMenuWrapper>
  );
};

export default SearchMenu;
