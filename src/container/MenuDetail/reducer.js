import produce from "immer";

import {
  GET_SEARCH_MOVIES_REQUEST,
  GET_SEARCH_MOVIES_SUCCESS,
  GET_SEARCH_TVSHOWS_REQUEST,
  GET_SEARCH_TVSHOWS_SUCCESS,
  GET_SEARCH_PEOPLE_REQUEST,
  GET_SEARCH_PEOPLE_SUCCESS,
  GET_POPULAR_MOVIES_REQUEST,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_NOW_PLAYING_MOVIES_REQUEST,
  GET_NOW_PLAYING_MOVIES_SUCCESS,
  GET_UPCOMING_MOVIES_REQUEST,
  GET_UPCOMING_MOVIES_SUCCESS,
  GET_TOP_RATED_MOVIES_REQUEST,
  GET_TOP_RATED_MOVIES_SUCCESS,
  GET_POPULAR_SHOWS_REQUEST,
  GET_POPULAR_SHOWS_SECCESS,
  GET_AIRING_TODAY_REQUEST,
  GET_AIRING_TODAY_SUCCESS,
  GET_ON_TV_REQUEST,
  GET_ON_TV_SUCCESS,
  GET_TOP_RATED_SHOWS_REQUEST,
  GET_TOP_RATED_SHOWS_SUCCESS,
  GET_POPULAR_PEOPLE_REQUEST,
  GET_POPULAR_PEOPLE_SUCCESS,
  GET_WATCHLIST_MOVIE_REQUEST,
  GET_WATCHLIST_MOVIE_SUCCESS,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  GET_WATCHLIST_TV_REQUEST,
  GET_WATCHLIST_TV_SUCCESS,
  DELETE_TV_REQUEST,
  DELETE_TV_SUCCESS,
} from "./constants";

export const initialState = {
  searchMovies: [],
  searchTvShows: [],
  searchPeople: [],
  popularMovies: [],
  nowPlayingMovies: [],
  Upcoming: [],
  topRatedMovies: [],
  popularShows: [],
  airingToday: [],
  onTv: [],
  topRatedShows: [],
  popularPeople: [],
  watchListMovie: [],
  watchListTv: [],
};

const MenuDetailReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_SEARCH_MOVIES_REQUEST:
        return state;
      case GET_SEARCH_MOVIES_SUCCESS:
        draft.searchMovies = action.data;
        break;

      case GET_SEARCH_TVSHOWS_REQUEST:
        return state;
      case GET_SEARCH_TVSHOWS_SUCCESS:
        draft.searchTvShows = action.data;
        break;

      case GET_SEARCH_PEOPLE_REQUEST:
        return state;
      case GET_SEARCH_PEOPLE_SUCCESS:
        draft.searchPeople = action.data;
        break;

      case GET_POPULAR_MOVIES_REQUEST:
        return state;
      case GET_POPULAR_MOVIES_SUCCESS:
        draft.popularMovies = action.data;
        break;

      case GET_NOW_PLAYING_MOVIES_REQUEST:
        return state;
      case GET_NOW_PLAYING_MOVIES_SUCCESS:
        draft.nowPlayingMovies = action.data;
        break;

      case GET_UPCOMING_MOVIES_REQUEST:
        return state;
      case GET_UPCOMING_MOVIES_SUCCESS:
        draft.Upcoming = action.data;
        break;

      case GET_TOP_RATED_MOVIES_REQUEST:
        return state;
      case GET_TOP_RATED_MOVIES_SUCCESS:
        draft.topRatedMovies = action.data;
        break;

      case GET_POPULAR_SHOWS_REQUEST:
        return state;
      case GET_POPULAR_SHOWS_SECCESS:
        draft.popularShows = action.data;
        break;

      case GET_AIRING_TODAY_REQUEST:
        return state;
      case GET_AIRING_TODAY_SUCCESS:
        draft.airingToday = action.data;
        break;

      case GET_ON_TV_REQUEST:
        return state;
      case GET_ON_TV_SUCCESS:
        draft.onTv = action.data;
        break;

      case GET_TOP_RATED_SHOWS_REQUEST:
        return state;
      case GET_TOP_RATED_SHOWS_SUCCESS:
        draft.topRatedShows = action.data;
        break;

      case GET_POPULAR_PEOPLE_REQUEST:
        return state;
      case GET_POPULAR_PEOPLE_SUCCESS:
        draft.popularPeople = action.data;
        break;

      case GET_WATCHLIST_MOVIE_REQUEST:
        return state;
      case GET_WATCHLIST_MOVIE_SUCCESS:
        draft.watchListMovie = action.data;
        break;

      case DELETE_MOVIE_REQUEST:
        draft.watchListMovie.filter(
          (item) => item.id !== action.data);
        break;
      case DELETE_MOVIE_SUCCESS:
        return state;

      case GET_WATCHLIST_TV_REQUEST:
        return state;
      case GET_WATCHLIST_TV_SUCCESS:
        draft.watchListTv = action.data;
        break;

      case DELETE_TV_REQUEST:
        draft.watchListTv.filter(
          (item) => item.id !== action.data);
        break;
      case DELETE_TV_SUCCESS:
        return state;

      default:
        return state;
    }
  });

export default MenuDetailReducer;
