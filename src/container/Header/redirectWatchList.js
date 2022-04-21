import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import WatchListMenu from "../MenuDetail/WatchListMenu";


const RedirectWatchListMenu = () => {
    const [currentRoute, setCurrentRoute] = useState("");
    const params = useParams();

    useEffect(() => {
        setCurrentRoute(params.id)
    }, [params])

    if (!currentRoute) {
        return <h6>Loading</h6>
    }

    if (currentRoute === "list-movie" || currentRoute === "list-tv-show") {
        return <WatchListMenu type={currentRoute} />
    }
}

export default RedirectWatchListMenu