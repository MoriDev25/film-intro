import axios from "axios";
export const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY= "50c035b74aa12c703ff519e664be0c2d"

export const getPopularMoviesAPI = () => {
    return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
}

export const getTopRatedMoviesAPI = () => {
    return axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
}

export const getPopularShowsAPI = () => {
    return axios.get(`${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`)
}

export const getTopRatedShowsAPI = () => {
    return axios.get(`${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
}