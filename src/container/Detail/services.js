import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const WATCH_LIST_URL = "https://619650f7af46280017e7df9a.mockapi.io";
const API_KEY = "50c035b74aa12c703ff519e664be0c2d";


export const getMovieAboutAPI = (movieId) => {
  return axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=videos,images,credits,recommendations`
  );
};

export const getTvAboutAPI = (TvId) => {
  return axios.get(
    `${BASE_URL}/tv/${TvId}?api_key=${API_KEY}&append_to_response=videos,images,credits,recommendations`
  );
};

export const getPersonAboutAPI = (peopleId) => {
  return axios.get(
    `${BASE_URL}/person/${peopleId}?api_key=${API_KEY}&append_to_response=movie_credits,tv_credits,combined_credits`
  );
};

export const postMovieAPI = (movie) => {
  return axios.post(`${WATCH_LIST_URL}/movies`, movie);
};

export const deleteMovieAPI = (movieId) => {
  return axios.delete(`${WATCH_LIST_URL}/movies/${movieId}`);
};

export const getWatchListMovieAPI = () => {
  return axios.get(`${WATCH_LIST_URL}/movies`);
}

export const postTvAPI = (tv) => {
  return axios.post(`${WATCH_LIST_URL}/shows`, tv);
};

export const deleteTvAPI = (tvId) => {
  return axios.delete(`${WATCH_LIST_URL}/shows/${tvId}`);
};

export const getWatchListTvAPI = () => {
  return axios.get(`${WATCH_LIST_URL}/shows`);
}
