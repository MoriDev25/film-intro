import {
  call,
  put,
  takeLatest,
  all,
} from "redux-saga/effects";
import {
  GET_POPULAR_MOVIES_REQUEST,
  GET_TOP_RATED_MOVIES_REQUEST,
  GET_POPULAR_SHOWS_REQUEST,
  GET_TOP_RATED_SHOWS_REQUEST,
} from "./constants";
import {
  getPopularMoviesSuccess,
  getTopRatedMoviesSuccess,
  getPopularShowsSuccess,
  getTopRatedShowsSuccess,
} from "./actions";
import {
  getPopularMoviesAPI,
  getTopRatedMoviesAPI,
  getPopularShowsAPI,
  getTopRatedShowsAPI,
} from "./services";

function* getPopularMoviesProcess() {
  try {
    const response = yield call(getPopularMoviesAPI);
    console.log("popmov", response);
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


function* getTopRatedMoviesProcess() {
  try {
    const response = yield call(getTopRatedMoviesAPI);
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

function* getPopularShowsProcess() {
  try {
    const response = yield call(getPopularShowsAPI);
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


function* getTopRatedShowsProcess() {
  try {
    const response = yield call(getTopRatedShowsAPI);
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

function* watchAll() {
  yield all([
    watchGetPopularMovies(),
    watchGetTopRatedMovies(),
    watchGetPopularShows(),
    watchGetTopRatedShows(),
  ]);
}

export default watchAll;
