import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const WATCH_LIST_URL = "https://619650f7af46280017e7df9a.mockapi.io";
const API_KEY= "50c035b74aa12c703ff519e664be0c2d"

export const getSearchMoviesAPI = (searchResult) => {
    return axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchResult}&page=1&include_adult=false`)
}

export const getSearchTvShowsAPI = (searchResult) => {
    return axios.get(`${BASE_URL}/search/tv?api_key=${API_KEY}&language=en-US&page=1&query=${searchResult}&include_adult=false`)
}

export const getSearchPeopleAPI = (searchResult) => {
    return axios.get(`${BASE_URL}/search/person?api_key=${API_KEY}&language=en-US&query=${searchResult}&page=1&include_adult=false`)
}

export const getPopularMoviesAPI = (pageNumber) => {
    return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
}

export const getNowPlayingMoviesAPI = (pageNumber) => {
    return axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
}

export const getUpcomingMoviesAPI = (pageNumber) => {
    return axios.get(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
}

export const getTopRatedMoviesAPI = (pageNumber) => {
    return axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
}

export const getPopularShowsAPI = (pageNumber) => {
    return axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
}

export const getAiringTodayAPI = (pageNumber) => {
    return axios.get(`${BASE_URL}/tv/airing_today?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
}

export const getOnTvAPI = (pageNumber) =>  {
    return axios.get(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
}

export const getTopRatedShowsAPI = (pageNumber) => {
    return axios.get(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
}

export const getPopularPeopleAPI = (pageNumber) => {
    return axios.get(`${BASE_URL}/person/popular?api_key=${API_KEY}&language=en-US&page=${pageNumber}`)
}

export const getWatchListMovieAPI = () => {
    return axios.get(`${WATCH_LIST_URL}/movies`);
}

export const deleteMovieAPI = (movieId) => {
    return axios.delete(`${WATCH_LIST_URL}/movies/${movieId}`);
  };




  export const getWatchListTvAPI = () => {
    return axios.get(`${WATCH_LIST_URL}/shows`);
}

export const deleteTvAPI = (tvId) => {
    return axios.delete(`${WATCH_LIST_URL}/shows/${tvId}`);
  };
