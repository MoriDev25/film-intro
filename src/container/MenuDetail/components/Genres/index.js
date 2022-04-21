import React from "react";
import { GenresWrapper } from "./style";
import Button from "./../../../../component/Button";
import { useTranslation } from "react-i18next";

const Genres = ({onClick, selectGenre}) => {
    const { t } = useTranslation();
    const listGenre = [
        {
            id: 28,
            name: t("Action")
        },
        {
            id: 12,
            name: t("Adventure")
        },
        {
            id: 16,
            name: t("Animation")
        },
        {
            id: 35,
            name: t("Comedy")
        },
        {
            id: 80,
            name: t("Crime")
        },
        {
            id: 99,
            name: t("Documentary")
        },
        {
            id: 18,
            name: t("Drama")
        },
        {
            id: 10751,
            name: t("Family")
        },
        {
            id: 14,
            name: t("Fantasy")
        },
        {
            id: 36,
            name: t("History")
        },
        {
            id: 27,
            name: t("Horror")
        },
        {
            id: 10402,
            name: t("Music")
        },
        {
            id: 9648,
            name: t("Mystery")
        },
        {
            id: 10749,
            name: t("Romance")
        },
        {
            id: 878,
            name: t("Science_Fiction")
        },
        {
            id: 10770,
            name: t("TV_Movie")
        },
        {
            id: 53,
            name: t("Thriller")
        },
        {
            id: 10752,
            name: t("War")
        },
        {
            id: 37,
            name: t("Western")
        }
    ]
    return (
        <GenresWrapper>
            {listGenre.map((item) => (
                <Button
                type="genre"
                className="filter-btn" 
                name={item.name}
                onClick={() => onClick(item.id)}
                active={selectGenre.includes(item.id)}
                >{item.name}</Button>
            ))}
        </GenresWrapper>
    )
}

export default Genres