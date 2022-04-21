import React from "react";
import { BannerWrapper } from "./style";
import Button from "./../../../../component/Button";
import Input from "./../../../../component/Input";
import { useTranslation } from "react-i18next";

const Banner = ({inputSearch, handleInputSearch, handleRedirectToSearch}) => {
  const { t } = useTranslation();

  return (
    <BannerWrapper>
        <div className="content-wrapper">
          <div className="title">
            <h2>{t("Welcome")}</h2>
            <h3>
              {t("banner_title")}
            </h3>
          </div>
          <form className="search-form">
          <Input className="input-search" value={inputSearch} onChange={handleInputSearch}/>
          <Button name="Search" className="search-btn" type="search" onClick={() => handleRedirectToSearch(inputSearch)}/>
          </form>
        </div>
    </BannerWrapper>
  );
};

export default Banner;
