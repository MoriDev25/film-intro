import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import MovieMenu from "../MenuDetail/MovieMenu";
import Movie from "../Detail/Movie";


const RedirectMovie = () => {
    const [currentRoute, setCurrentRoute] = useState("");
    const params = useParams();

    useEffect(() => {
        setCurrentRoute(params.id)
    }, [params])

    if (currentRoute === "popular" || currentRoute === "now-playing" || currentRoute === "upcoming" || currentRoute === "top-rated") {
        return <MovieMenu type={currentRoute} />
    }
    return <Movie movieId={params.id}/>
}

export default RedirectMovie