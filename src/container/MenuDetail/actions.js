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
  DELETE_TV_SUCCESS
} from "./constants";

export const getSearchMovies = (data) => {
  return {
    type: GET_SEARCH_MOVIES_REQUEST,
    data,
  };
};

export const getSearchMoviesSuccess = (data) => {
  return {
    type: GET_SEARCH_MOVIES_SUCCESS,
    data,
  };
};

export const getSearchTvShows = (data) => {
  return {
    type: GET_SEARCH_TVSHOWS_REQUEST,
    data,
  };
};

export const getSearchTvShowsSuccess = (data) => {
  return {
    type: GET_SEARCH_TVSHOWS_SUCCESS,
    data,
  };
};

export const getSearchPeople = (data) => {
  return {
    type: GET_SEARCH_PEOPLE_REQUEST,
    data,
  };
};

export const getSearchPeopleSuccess = (data) => {
  return {
    type: GET_SEARCH_PEOPLE_SUCCESS,
    data,
  };
};

export const getPopularMovies = (data) => {
  return {
    type: GET_POPULAR_MOVIES_REQUEST,
    data,
  };
};

export const getPopularMoviesSuccess = (data) => {
  return {
    type: GET_POPULAR_MOVIES_SUCCESS,
    data,
  };
};

export const getNowPlayingMovies = (data) => {
  return {
    type: GET_NOW_PLAYING_MOVIES_REQUEST,
    data,
  };
};

export const getNowPlayingMoviesSuccess = (data) => {
  return {
    type: GET_NOW_PLAYING_MOVIES_SUCCESS,
    data,
  };
};

export const getUpcomingMovies = (data) => {
  return {
    type: GET_UPCOMING_MOVIES_REQUEST,
    data,
  };
};

export const getUpcomingMoviesSuccess = (data) => {
  return {
    type: GET_UPCOMING_MOVIES_SUCCESS,
    data,
  };
};

export const getTopRatedMovies = (data) => {
  return {
    type: GET_TOP_RATED_MOVIES_REQUEST,
    data,
  };
};

export const getTopRatedMoviesSuccess = (data) => {
  return {
    type: GET_TOP_RATED_MOVIES_SUCCESS,
    data,
  };
};

export const getPopularShows = (data) => {
  return {
    type: GET_POPULAR_SHOWS_REQUEST,
    data,
  };
};

export const getPopularShowsSuccess = (data) => {
  return {
    type: GET_POPULAR_SHOWS_SECCESS,
    data,
  };
};

export const getAiringToday = (data) => {
  return {
    type: GET_AIRING_TODAY_REQUEST,
    data,
  };
};

export const getAiringTodaySuccess = (data) => {
  return {
    type: GET_AIRING_TODAY_SUCCESS,
    data,
  };
};

export const getOnTv = (data) => {
  return {
    type: GET_ON_TV_REQUEST,
    data,
  };
};

export const getOnTvSuccess = (data) => {
  return {
    type: GET_ON_TV_SUCCESS,
    data,
  };
};

export const getTopRatedShows = (data) => {
  return {
    type: GET_TOP_RATED_SHOWS_REQUEST,
    data,
  };
};

export const getTopRatedShowsSuccess = (data) => {
  return {
    type: GET_TOP_RATED_SHOWS_SUCCESS,
    data,
  };
};

export const getPopularPeople = (data) => {
  return {
    type: GET_POPULAR_PEOPLE_REQUEST,
    data,
  };
};

export const getPopularPeopleSuccess = (data) => {
  return {
    type: GET_POPULAR_PEOPLE_SUCCESS,
    data,
  };
};

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
