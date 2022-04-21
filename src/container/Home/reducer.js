import produce from "immer";
import {
  GET_POPULAR_MOVIES_REQUEST,
  GET_POPULAR_MOVIES_SUCCESS,
  GET_TOP_RATED_MOVIES_REQUEST,
  GET_TOP_RATED_MOVIES_SUCCESS,
  GET_POPULAR_SHOWS_REQUEST,
  GET_POPULAR_SHOWS_SECCESS,
  GET_TOP_RATED_SHOWS_REQUEST,
  GET_TOP_RATED_SHOWS_SUCCESS,
} from "./constants";

const initialState = {
  popularMovies: [],
  topRatedMovies: [],
  popularShows: [],
  topRatedShows: [],
  isLoading: false,
};

const HomeReducer = (state = initialState, action) => 
  produce(state, draft => {
  switch (action.type) {
    case GET_POPULAR_MOVIES_REQUEST:
      draft.isLoading = true;
      break;
      
    case GET_POPULAR_MOVIES_SUCCESS:
        draft.popularMovies = action.data;
        draft.isLoading = false;
    break;

    case GET_TOP_RATED_MOVIES_REQUEST:
        draft.isLoading = true;
        break;
    case GET_TOP_RATED_MOVIES_SUCCESS:
        draft.topRatedMovies = action.data;
        draft.isLoading = false;
        break;

    case GET_POPULAR_SHOWS_REQUEST:
        draft.isLoading = true;
        break;
    case GET_POPULAR_SHOWS_SECCESS:

        draft.popularShows = action.data
        draft.isLoading = false;
      break;

    case GET_TOP_RATED_SHOWS_REQUEST:
        draft.isLoading = true;
        break;

    case GET_TOP_RATED_SHOWS_SUCCESS:
        draft.topRatedShows = action.data;
        draft.isLoading = false;
      break;

    default:
      return state;
  }
});

export default HomeReducer;