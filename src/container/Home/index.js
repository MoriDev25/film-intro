import React, {useState, useEffect } from "react";
import { HomeWrapper } from "./style";
import {
  getPopularMovies,
  getPopularShows,
  getTopRatedMovies,
  getTopRatedShows,
} from "./actions";
import { connect } from "react-redux";
import Banner from "./components/Banner";
import { useHistory } from "react-router";
import ListMovie from "./../Home/components/ListMovies";
import Button from "../../component/Button";
import Loading from "../components/Loading";
import { useTranslation, Trans } from "react-i18next";

const Home = ({
  handleGetPopularMovies,
  handleGetPopularShows,
  handleGetTopRatedMovies,
  handleGetTopRatedShows,
  HomeReducer,
}) => {
  const BASE_IMAGE_URL = "https://www.themoviedb.org/t/p/w150_and_h225_face";
  const { popularMovies, popularShows, topRatedMovies, topRatedShows, isLoading } = HomeReducer;
  const [inputSearch, setInputSearch] = useState("")
  const [scrollToTop, setScrollToTop] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    handleGetPopularMovies();
    handleGetTopRatedMovies();
    handleGetPopularShows();
    handleGetTopRatedShows();
    handleScrollToTop();
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

  const handleRedirectToTv = (id) => {
    history.push(`/tv/${id}`);
  };

  const handleInputSearch = (event) => {
    const {value} = event.target;
    setInputSearch(value)
  }

  const handleRedirectToSearch = (inputSearch) => {
    history.push(`/search/${inputSearch}`)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <HomeWrapper>
      <Banner 
      inputSearch={inputSearch}
      handleInputSearch={handleInputSearch}
      handleRedirectToSearch={handleRedirectToSearch}
      />
      <div className="movie-wrapper">
        <ListMovie
          title={t("Popular_Movies")}
          list={popularMovies}
          url={BASE_IMAGE_URL}
          onClick={handleRedirectToMovie}
        />
        <ListMovie
          title={t("Popular_Shows")}
          list={popularShows}
          url={BASE_IMAGE_URL}
          onClick={handleRedirectToTv}
        />
        <ListMovie
          title={t("Top_Rated_Movies")}
          list={topRatedMovies}
          url={BASE_IMAGE_URL}
          onClick={handleRedirectToMovie}
        />
        <ListMovie
          title={t("Top_Rated_Shows")}
          list={topRatedShows}
          url={BASE_IMAGE_URL}
          onClick={handleRedirectToTv}
        />
      </div>
      {scrollToTop && <Button
        icon="fas fa-arrow-up"
        onClick={handleScrollToTop}
        className="scroll-up-btn"
      />}
    </HomeWrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    HomeReducer: state.HomeReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetPopularMovies: () => dispatch(getPopularMovies()),
    handleGetTopRatedMovies: () => dispatch(getTopRatedMovies()),
    handleGetPopularShows: () => dispatch(getPopularShows()),
    handleGetTopRatedShows: () => dispatch(getTopRatedShows()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
