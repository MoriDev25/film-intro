import { createSelector } from "reselect";
import { initialState } from "./reducer";
// Buoc 1: select theo cap do reducer
const selectDetailReducer = (state) => state.DetailReducer || initialState;

// buoc 2: select theo tung truong cua reducer.
export const selectMovieAbout = createSelector(
    selectDetailReducer,
  (state) => state.movieAbout
);

export const selectTvAbout = createSelector(
    selectDetailReducer,
    (state) => state.tvAbout
);

export const selectPersonAbout = createSelector(
    selectDetailReducer,
    (state) => state.personAbout
);

export const selectWatchListMovie = createSelector(
    selectDetailReducer,
    (state) => state.watchListMovie
);

export const selectWatchListTv = createSelector(
    selectDetailReducer,
    (state) => state.watchListTv
);


// const initialState = {
//     movieAbout: [],
//     tvAbout: [],
//     personAbout: [],
//     watchListMovie: [],
//     watchListTv: []
//   };

// listUser: selectListUser(state),
// isLoading: selectIsLoading(state),
// username: selectUsername(state)