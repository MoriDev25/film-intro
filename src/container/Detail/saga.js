import {
  call,
  put,
  takeLatest,
  all,
} from "redux-saga/effects";

import {
  GET_MOVIE_ABOUT_REQUEST,
  GET_TV_ABOUT_REQUEST,
  GET_PERSON_ABOUT_REQUEST,
  POST_MOVIE_REQUEST,
  DELETE_MOVIE_REQUEST,
  GET_WATCHLIST_MOVIE_REQUEST,
  POST_TV_REQUEST,
  DELETE_TV_REQUEST,
  GET_WATCHLIST_TV_REQUEST,
} from "./constants";

import {
  getMovieAboutSuccess,
  getTvAboutSuccess,
  getPersonAboutSuccess,
  postMovieSuccess,
  deleteMovieSuccess,
  getWatchListMovieSuccess,
  postTvSuccess,
  deleteTvSuccess,
  getWatchListTvSuccess
} from "./actions";

import {
  getMovieAboutAPI,
  getTvAboutAPI,
  getPersonAboutAPI,
  postMovieAPI,
  deleteMovieAPI,
  getWatchListMovieAPI,
  postTvAPI,
  deleteTvAPI,
  getWatchListTvAPI,
} from "./services";

function* getMovieAboutProcess(params) {
  try {
    const id = params.data;
    const response = yield call(getMovieAboutAPI, id);
    if (response.status === 200) {
      yield put(getMovieAboutSuccess(response.data));
    }
  } catch (err) {
    console.log(err);
  }
}

function* watchGetMovieAbout() {
  yield takeLatest(GET_MOVIE_ABOUT_REQUEST, getMovieAboutProcess);
}

function* getTvAboutProcess(params) {
  try {
    const id = params.data;
    const response = yield call(getTvAboutAPI, id);
    if (response.status === 200) {
      yield put(getTvAboutSuccess(response.data));
    }
  } catch (err) {
    console.log(err);
  }
}

function* watchGetTvAbout() {
  yield takeLatest(GET_TV_ABOUT_REQUEST, getTvAboutProcess);
}

function* getPersonAboutProcess(params) {
  try {
    const id = params.data;
    const response = yield call(getPersonAboutAPI, id);
    if (response.status === 200) {
      yield put(getPersonAboutSuccess(response.data));
    }
  } catch (err) {
    console.log("getPersonAboutAPI err",err)
  }
}

function* watchGetPersonAbout() {
  yield takeLatest(GET_PERSON_ABOUT_REQUEST, getPersonAboutProcess)
}

function* postMovieProcess(params) {
  try {
    const movie = params.data;
    const response = yield call(postMovieAPI, movie);
    if (response.status === 200 || response.status === 201) {
      yield put(postMovieSuccess(response.data));
    }
  } catch (err) {
    console.log("postMovie err", err)
  }
}

function* watchPostMovie() {
  yield takeLatest(POST_MOVIE_REQUEST, postMovieProcess)
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





function* postTvProcess(params) {
  try {
    const tv = params.data;
    const response = yield call(postTvAPI, tv);
    if (response.status === 200 || response.status === 201) {
      yield put(postTvSuccess(response.data));
    }
  } catch (err) {
    console.log("postTv err", err)
  }
}

function* watchPostTv() {
  yield takeLatest(POST_TV_REQUEST, postTvProcess)
}

function* deleteTvProcess(params) {
  try {
    const TvId = params.data;
    const response = yield call(deleteTvAPI, TvId);
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

function* getWatchListTvProcess() {
  try {
    const response = yield call(getWatchListTvAPI)
    if (response.status === 200 || response.status === 201) {
      yield put(getWatchListTvSuccess(response.data))
    }
  } catch (err) {
    console.log("getWatchListTv err", err)
  }
}

function* watchGetListTv() {
  yield takeLatest(GET_WATCHLIST_TV_REQUEST, getWatchListTvProcess);
}




function* watchAll() {
  yield all([
    watchGetMovieAbout(),
    watchGetTvAbout(),
    watchGetPersonAbout(),
    watchPostMovie(),
    watchDeleteMovie(),
    watchGetListMovie(),
    watchPostTv(),
    watchDeleteTv(),
    watchGetListTv
  ]);
}

export default watchAll;
