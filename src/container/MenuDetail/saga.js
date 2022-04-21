import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  GET_SEARCH_MOVIES_REQUEST,
  GET_SEARCH_TVSHOWS_REQUEST,
  GET_SEARCH_PEOPLE_REQUEST,
  GET_POPULAR_MOVIES_REQUEST,
  GET_NOW_PLAYING_MOVIES_REQUEST,
  GET_UPCOMING_MOVIES_REQUEST,
  GET_TOP_RATED_MOVIES_REQUEST,
  GET_POPULAR_SHOWS_REQUEST,
  GET_AIRING_TODAY_REQUEST,
  GET_ON_TV_REQUEST,
  GET_TOP_RATED_SHOWS_REQUEST,
  GET_POPULAR_PEOPLE_REQUEST,
  GET_WATCHLIST_MOVIE_REQUEST,
  DELETE_MOVIE_REQUEST,
  GET_WATCHLIST_TV_REQUEST,
  DELETE_TV_REQUEST
} from "./constants";
import {
  getSearchMoviesSuccess,
  getSearchTvShowsSuccess,
  getSearchPeopleSuccess,
  getPopularMoviesSuccess,
  getNowPlayingMoviesSuccess,
  getUpcomingMoviesSuccess,
  getTopRatedMoviesSuccess,
  getPopularShowsSuccess,
  getAiringTodaySuccess,
  getOnTvSuccess,
  getTopRatedShowsSuccess,
  getPopularPeopleSuccess,
  getWatchListMovieSuccess,
  deleteMovieSuccess,
  getWatchListTvSuccess,
  deleteTvSuccess
} from "./actions";

import {
  getSearchMoviesAPI,
  getSearchTvShowsAPI,
  getSearchPeopleAPI,
  getPopularMoviesAPI,
  getNowPlayingMoviesAPI,
  getUpcomingMoviesAPI,
  getTopRatedMoviesAPI,
  getPopularShowsAPI,
  getAiringTodayAPI,
  getOnTvAPI,
  getTopRatedShowsAPI,
  getPopularPeopleAPI,
  getWatchListMovieAPI,
  deleteMovieAPI,
  getWatchListTvAPI,
  deleteTvAPI
} from "./services";

function* getSearchMoviesProcess(params) {
  try {
    const searchResult = params.data;
    const response = yield call(getSearchMoviesAPI, searchResult);
    if (response.status === 200) {
      yield put(getSearchMoviesSuccess(response.data.results));
    }
  } catch (err) {
    console.log("getSearchMovies err", err);
  }
}

function* watchGetSearchMovies() {
  yield takeLatest(GET_SEARCH_MOVIES_REQUEST, getSearchMoviesProcess);
}

function* getSearchTvShowsProcess(params) {
  try {
    const searchResult = params.data;
    const response = yield call(getSearchTvShowsAPI, searchResult);
    if (response.status === 200) {
      yield put(getSearchTvShowsSuccess(response.data.results));
    }
  } catch (err) {
    console.log("getSearchTvShows err", err);
  }
}

function* watchGetSearchTvShows() {
  yield takeLatest(GET_SEARCH_TVSHOWS_REQUEST, getSearchTvShowsProcess);
}

function* getSearchPeopleProcess(params) {
  try {
    const searchResult = params.data;
    const response = yield call(getSearchPeopleAPI, searchResult);
    if (response.status === 200) {
      yield put(getSearchPeopleSuccess(response.data.results));
    }
  } catch (err) {
    console.log("getSearchPeopleProcess err", err);
  }
}

function* watchGetSearchPeople() {
  yield takeLatest(GET_SEARCH_PEOPLE_REQUEST, getSearchPeopleProcess);
}

function* getPopularMoviesProcess(params) {
  try {
    const pageNumber = params.data;
    const response = yield call(getPopularMoviesAPI, pageNumber);
    if (response.status === 200) {
      yield put(getPopularMoviesSuccess(response.data.results));
    }
  } catch (err) {
    console.log("error", err);
  }
}

function* watchGetPopularMovies() {
  yield takeLatest(GET_POPULAR_MOVIES_REQUEST, getPopularMoviesProcess);
}

function* getNowPlayingMoviesProcess(params) {
  try {
    const pageNumber = params.data;
    const response = yield call(getNowPlayingMoviesAPI, pageNumber);
    if (response.status === 200) {
      yield put(getNowPlayingMoviesSuccess(response.data.results));
    }
  } catch (err) {
    console.log("getNowPlayingMoviesProcess err", err);
  }
}

function* watchGetNowPlayingMovies() {
  yield takeLatest(GET_NOW_PLAYING_MOVIES_REQUEST, getNowPlayingMoviesProcess);
}

function* getUpcomingMoviesProcess(params) {
  try {
    const pageNumber = params.data;
    const response = yield call(getUpcomingMoviesAPI, pageNumber);
    if (response.status === 200) {
      yield put(getUpcomingMoviesSuccess(response.data.results));
    }
  } catch (err) {
    console.log("getUpcomingMoviesProcess err", err);
  }
}

function* watchGetUpcomingMovies() {
  yield takeLatest(GET_UPCOMING_MOVIES_REQUEST, getUpcomingMoviesProcess);
}

function* getTopRatedMoviesProcess(params) {
  try {
    const pageNumber = params.data;
    const response = yield call(getTopRatedMoviesAPI, pageNumber);
    console.log("heyyyyyy", response);
    if (response.status === 200) {
      yield put(getTopRatedMoviesSuccess(response.data.results));
    }
  } catch (err) {
    console.log(err);
  }
}

function* watchGetTopRatedMovies() {
  yield takeLatest(GET_TOP_RATED_MOVIES_REQUEST, getTopRatedMoviesProcess);
}

function* getPopularShowsProcess(params) {
  try {
    const pageNumber = params.data;
    const response = yield call(getPopularShowsAPI, pageNumber);
    if (response.status === 200) {
      yield put(getPopularShowsSuccess(response.data.results));
    }
  } catch (err) {
    console.log("error", err);
  }
}

function* watchGetPopularShows() {
  yield takeLatest(GET_POPULAR_SHOWS_REQUEST, getPopularShowsProcess);
}

function* getAiringTodayProcess(params) {
  try {
    const pageNumber = params.data;
    const response = yield call(getAiringTodayAPI, pageNumber);
    if (response.status === 200) {
      yield put(getAiringTodaySuccess(response.data.results));
    }
  } catch (err) {
    console.log("getAiringTodayProcess err", err);
  }
}

function* watchGetAiringToday() {
  yield takeLatest(GET_AIRING_TODAY_REQUEST, getAiringTodayProcess);
}

function* getOnTvProcess(params) {
  try {
    const pageNumber = params.data;
    const response = yield call(getOnTvAPI, pageNumber);
    if (response.status === 200) {
      yield put(getOnTvSuccess(response.data.results));
    }
  } catch (err) {
    console.log("getOnTvProcess err", err);
  }
}

function* watchGetOnTv() {
  yield takeLatest(GET_ON_TV_REQUEST, getOnTvProcess);
}

function* getTopRatedShowsProcess(params) {
  try {
    const pageNumber = params.data;
    const response = yield call(getTopRatedShowsAPI, pageNumber);
    if (response.status === 200) {
      yield put(getTopRatedShowsSuccess(response.data.results));
    }
  } catch (err) {
    console.log(err);
  }
}

function* watchGetTopRatedShows() {
  yield takeLatest(GET_TOP_RATED_SHOWS_REQUEST, getTopRatedShowsProcess);
}

function* getPopularPeopleProcess(params) {
  try {
    const pageNumber = params.data;
    const response = yield call(getPopularPeopleAPI, pageNumber);
    if (response.status === 200) {
      yield put(getPopularPeopleSuccess(response.data.results));
    }
  } catch (err) {
    console.log("getPopularPeopleProcess err", err);
  }
}

function* watchGetPopularPeople() {
  yield takeLatest(GET_POPULAR_PEOPLE_REQUEST, getPopularPeopleProcess);
}

function* getWatchListMovieProcess() {
  try {
    const response = yield call(getWatchListMovieAPI)
    if (response.status === 200 || response.status === 201) {
      yield put(getWatchListMovieSuccess(response.data))
    }
  } catch (err) {
    console.log("getWatchListMovie err", err)
  }
}

function* watchGetListMovie() {
  yield takeLatest(GET_WATCHLIST_MOVIE_REQUEST, getWatchListMovieProcess);
}

function* deleteMovieProcess(params) {
  try {
    const movieId = params.data;
    const response = yield call(deleteMovieAPI, movieId);
    if (response.status === 200 || response.status === 201) {
      yield put(deleteMovieSuccess(response.data));
    }
  } catch (err) {
    console.log("DeleteMovie err", err)
  }
}

function* watchDeleteMovie() {
  yield takeLatest(DELETE_MOVIE_REQUEST, deleteMovieProcess)
}



function* getWatchListTvProcess() {
  try {
    const response = yield call(getWatchListTvAPI)
    if (response.status === 200 || response.status === 201) {
      yield put(getWatchListTvSuccess(response.data))
    }
  } catch (err) {
    console.log("getWatchListMovie err", err)
  }
}

function* watchGetListTv() {
  yield takeLatest(GET_WATCHLIST_TV_REQUEST, getWatchListTvProcess);
}

function* deleteTvProcess(params) {
  try {
    const tvId = params.data;
    const response = yield call(deleteTvAPI, tvId);
    if (response.status === 200 || response.status === 201) {
      yield put(deleteTvSuccess(response.data));
    }
  } catch (err) {
    console.log("DeleteTv err", err)
  }
}

function* watchDeleteTv() {
  yield takeLatest(DELETE_TV_REQUEST, deleteTvProcess)
}




function* watchAll() {
  yield all([
    watchGetSearchMovies(),
    watchGetSearchTvShows(),
    watchGetSearchPeople(),
    watchGetPopularMovies(),
    watchGetNowPlayingMovies(),
    watchGetUpcomingMovies(),
    watchGetTopRatedMovies(),
    watchGetPopularShows(),
    watchGetAiringToday(),
    watchGetOnTv(),
    watchGetTopRatedShows(),
    watchGetPopularPeople(),
    watchGetListMovie(),
    watchDeleteMovie(),
    watchGetListTv(),
    watchDeleteTv(),
  ]);
}

export default watchAll;
