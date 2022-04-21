import {
  GET_MOVIE_ABOUT_REQUEST,
  GET_MOVIE_ABOUT_SUCCESS,
  GET_TV_ABOUT_REQUEST,
  GET_TV_ABOUT_SUCCESS,
  GET_PERSON_ABOUT_REQUEST,
  GET_PERSON_ABOUT_SUCCESS,
  POST_MOVIE_REQUEST,
  POST_MOVIE_SUCCESS,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  GET_WATCHLIST_MOVIE_REQUEST,
  GET_WATCHLIST_MOVIE_SUCCESS,
  POST_TV_REQUEST,
  POST_TV_SUCCESS,
  DELETE_TV_REQUEST,
  DELETE_TV_SUCCESS,
  GET_WATCHLIST_TV_REQUEST,
  GET_WATCHLIST_TV_SUCCESS,
} from "./constants";

import produce from "immer";

export const initialState = {
  movieAbout: [],
  tvAbout: [],
  personAbout: [],
  watchListMovie: [],
  watchListTv: [],
};

const DetailReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_MOVIE_ABOUT_REQUEST:
        return state;
      case GET_MOVIE_ABOUT_SUCCESS:
        draft.movieAbout = action.data;
        break;
      case GET_TV_ABOUT_REQUEST:
        return state;
      case GET_TV_ABOUT_SUCCESS:
        draft.tvAbout = action.data;
        break;
      case GET_PERSON_ABOUT_REQUEST:
        return state;
      case GET_PERSON_ABOUT_SUCCESS:
        draft.personAbout = action.data;
        break;
      case POST_MOVIE_REQUEST:
        return state;
      case POST_MOVIE_SUCCESS:
        return state;

      case DELETE_MOVIE_REQUEST:
        return state;
      case DELETE_MOVIE_SUCCESS:
        return state;

      case GET_WATCHLIST_MOVIE_REQUEST:
        return state;
      case GET_WATCHLIST_MOVIE_SUCCESS:
        draft.watchListMovie = action.data;
        break;
      case POST_TV_REQUEST:
        return state;
      case POST_TV_SUCCESS:
        return state;

      case DELETE_TV_REQUEST:
        return state;
      case DELETE_TV_SUCCESS:
        return state;

      case GET_WATCHLIST_TV_REQUEST:
        return state;
      case GET_WATCHLIST_TV_SUCCESS:
        draft.watchListTv = action.data;
        break;

      default:
        return state;
    }
  });

export default DetailReducer;
