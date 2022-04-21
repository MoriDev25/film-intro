import {
GET_POPULAR_MOVIES_REQUEST,
GET_POPULAR_MOVIES_SUCCESS, 
GET_TOP_RATED_MOVIES_REQUEST,
GET_TOP_RATED_MOVIES_SUCCESS,
GET_POPULAR_SHOWS_REQUEST,
GET_POPULAR_SHOWS_SECCESS,
GET_TOP_RATED_SHOWS_REQUEST,
GET_TOP_RATED_SHOWS_SUCCESS
} from "./constants"

export const getPopularMovies = () => {
    return {
        type: GET_POPULAR_MOVIES_REQUEST
    }
}

export const getPopularMoviesSuccess = (data) => {
    return {
        type: GET_POPULAR_MOVIES_SUCCESS,
        data
    }
}


export const getTopRatedMovies = () => {
    return {
        type: GET_TOP_RATED_MOVIES_REQUEST
    }
}

export const getTopRatedMoviesSuccess = (data) => {
    return {
        type: GET_TOP_RATED_MOVIES_SUCCESS,
        data
    }
}

export const getPopularShows = () => {
    return {
        type: GET_POPULAR_SHOWS_REQUEST
    }
}

export const getPopularShowsSuccess = (data) => {
    return {
        type: GET_POPULAR_SHOWS_SECCESS,
        data
    }
}

export const getTopRatedShows = () => {
    return {
        type: GET_TOP_RATED_SHOWS_REQUEST
    }
}

export const getTopRatedShowsSuccess = (data) => {
    return {
        type: GET_TOP_RATED_SHOWS_SUCCESS,
        data
    }
}


