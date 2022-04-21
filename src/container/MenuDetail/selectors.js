import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectMenuDetailReducer = (state) =>
  state.MenuDetailReducer || initialState;

export const selectSearchMovies = createSelector(
  selectMenuDetailReducer,
  (state) => state.searchMovies
);

export const selectSearchTvShows = createSelector(
  selectMenuDetailReducer,
  (state) => state.searchTvShows
);

export const selectSearchPeople = createSelector(
  selectMenuDetailReducer,
  (state) => state.searchPeople
);

export const selectPopularMovies = createSelector(
    selectMenuDetailReducer,
    (state) => state.popularMovies
);

export const selectNowPlayingMovies = createSelector(
    selectMenuDetailReducer,
    (state) => state.nowPlayingMovies
);

export const selectUpcoming = createSelector(
    selectMenuDetailReducer,
    (state) => state.Upcoming
);

export const selectTopRatedMovies = createSelector(
    selectMenuDetailReducer,
    (state) => state.topRatedMovies
);

export const selectPopularShows = createSelector(
    selectMenuDetailReducer,
    (state) => state.popularShows
);

export const selectAiringToday = createSelector(
    selectMenuDetailReducer,
    (state) => state.airingToday
);

export const selectOnTv = createSelector(
    selectMenuDetailReducer,
    (state) => state.onTv
);

export const selectTopRatedShows = createSelector(
    selectMenuDetailReducer,
    (state) => state.topRatedShows
);

export const selectPopularPeople = createSelector(
    selectMenuDetailReducer,
    (state) => state.popularPeople
);

export const selectWatchListMovie = createSelector(
    selectMenuDetailReducer,
    (state) => state.watchListMovie
);

export const selectWatchListTv = createSelector(
    selectMenuDetailReducer,
    (state) => state.watchListTv
);
