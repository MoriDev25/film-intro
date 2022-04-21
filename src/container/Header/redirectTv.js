import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import TvShowMenu from "../MenuDetail/TvShowMenu"
import Tv from "../Detail/Tv";


const RedirectTv = () => {
    const [currentRoute, setCurrentRoute] = useState("");
    const params = useParams();

    useEffect(() => {
        setCurrentRoute(params.id)
    }, [params])

    if (currentRoute === "popular" || currentRoute === "airing-today" || currentRoute === "on-tv" || currentRoute === "top-rated") {
        return <TvShowMenu type={currentRoute} />
    }
    return <Tv tvId={params.id}/>
}

export default RedirectTv