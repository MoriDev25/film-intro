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


export const getMovieAbout = (data) => {
    return {
        type: GET_MOVIE_ABOUT_REQUEST,
        data
    }
}

export const getMovieAboutSuccess = (data) => {
    return {
        type: GET_MOVIE_ABOUT_SUCCESS,
        data
    }
}

export const getTvAbout = (data) => {
    return {
        type: GET_TV_ABOUT_REQUEST,
        data
    }
}

export const getTvAboutSuccess = (data) => {
    return {
        type: GET_TV_ABOUT_SUCCESS,
        data
    }
}

export const getPersonAbout = (data) => {
    return {
        type: GET_PERSON_ABOUT_REQUEST,
        data
    }
}

export const getPersonAboutSuccess = (data) => {
    return {
        type: GET_PERSON_ABOUT_SUCCESS,
        data
    }
}

export const postMovie = (data) => {
    return {
        type: POST_MOVIE_REQUEST,
        data
    }
}

export const postMovieSuccess = (data) => {
    return {
        type: POST_MOVIE_SUCCESS,
        data
    }
}

export const deleteMovie = (data) => {
    return {
        type: DELETE_MOVIE_REQUEST,
        data
    }
}

export const deleteMovieSuccess = (data) => {
    return {
        type: DELETE_MOVIE_SUCCESS,
        data
    }
}

export const getWatchListMovie = () => {
    return {
      type: GET_WATCHLIST_MOVIE_REQUEST
    }
  }
  
  export const getWatchListMovieSuccess = (data) => {
    return {
      type: GET_WATCHLIST_MOVIE_SUCCESS,
      data
    }
  }

  export const postTv = (data) => {
    return {
        type: POST_TV_REQUEST,
        data
    }
}

export const postTvSuccess = (data) => {
    return {
        type: POST_TV_SUCCESS,
        data
    }
}

export const deleteTv = (data) => {
    return {
        type: DELETE_TV_REQUEST,
        data
    }
}

export const deleteTvSuccess = (data) => {
    return {
        type: DELETE_TV_SUCCESS,
        data
    }
}

export const getWatchListTv = () => {
    return {
      type: GET_WATCHLIST_TV_REQUEST
    }
  }
  
  export const getWatchListTvSuccess = (data) => {
    return {
      type: GET_WATCHLIST_TV_SUCCESS,
      data
    }
  }
