import React, { useState, useEffect } from "react";
import { HeaderWrapper, MenuMobileWrapper } from "./style";
import { Link, NavLink } from "react-router-dom";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { useHistory } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";
import i18n from "../../i18n";

export const Header = () => {
  const { t } = useTranslation();
  const [on, toggle] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [menuMobile, setMenuMobile] = useState(false)
  const history = useHistory();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const MenuItem = [
    {
      id: 0,
      title: t("Movies"),
      root: "movie",
      subMenu: [
        {
          id: 0,
          name: t("Popular"),
          path: "popular",
        },
        {
          id: 1,
          name: t("Now_Playing"),
          path: "now-playing",
        },
        {
          id: 2,
          name: t("Upcoming"),
          path: "upcoming",
        },
        {
          id: 3,
          name: t("Top_Rated"),
          path: "top-rated",
        },
      ],
    },
    {
      id: 1,
      title: t("TV_Shows"),
      root: "tv",
      subMenu: [
        {
          id: 0,
          name: t("Popular"),
          path: "popular",
        },
        {
          id: 1,
          name: t("Airing_Today"),
          path: "airing-today",
        },
        {
          id: 2,
          name: t("On_TV"),
          path: "on-tv",
        },
        {
          id: 3,
          name: t("Top_Rated"),
          path: "top-rated",
        },
      ],
    },
    {
      id: 3,
      title: t("People"),
      root: "people",
      subMenu: [
        {
          id: 0,
          name: t("Popular_People"),
          path: "list",
        },
      ],
    },
    {
      id: 4,
      title: t("Watch_List"),
      root: "watch-list",
      subMenu: [
        {
          id: 0,
          name: t("List_Movie"),
          path: "list-movie",
        },
        {
          id: 1,
          name: t("List_TV_Show"),
          path: "list-tv-show",
        },
      ],
    },
  ];

  const handleGetClick = () => {
    setMenuMobile(false);
  }

  const handleInputSearch = (event) => {
    const { value } = event.target;
    setInputSearch(value);
  };

  const handleRedirectToSearch = (event) => {
    event.persist();
    if (event.key === "Enter") {
      history.push(`/search/${inputSearch}`);
    }
  };

  const handleChangeStatus = () => {
    setMenuMobile((state) => !state);
  };

  return (
    <HeaderWrapper>
      <div className="header-format">
        <div className="menu-mobile-btn">
        {menuMobile === false ? (
          <Button className="menu-btn" icon="fas fa-bars" onClick={handleChangeStatus}/>
        ) : (
          <Button className="menu-btn" icon="fas fa-times" onClick={handleChangeStatus}/>
        )}
        </div>
        <div className="nav-wrapper">
          <Link to="" className="logo-mobile">
            <img src="/images/logo.svg" alt="logo" className="logo" />
          </Link>
          <ul className="menu">
            {MenuItem.map((menuItem) => (
              <li key={menuItem.id} className="has-submenu">
                {menuItem.title}
                {menuItem.subMenu ? (
                  <ul className="submenu">
                    {menuItem.subMenu.map((subMenuItem) => (
                      <li key={subMenuItem.id} className="submenu-item">
                        <Link
                          to={`/${menuItem.root}/${subMenuItem.path}`}
                          className="menu-text"
                        >
                          {subMenuItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
        <div className="right-box">
          <div className="language-box">
          <Button name="Vi" type="language" className="language-btn" onClick={() => changeLanguage("vi")}/>
          <Button name="En" type="language" className="language-btn" onClick={() => changeLanguage("en")}/>
          </div>
          <Button
            name=""
            on={on}
            onClick={() => toggle(!on)}
            type="search-header"
            icon="fas fa-search"
            className="search-btn"
          />
        </div>
      </div>
      <Input
        className={`${on === true ? "active" : "disable"}`}
        value={inputSearch}
        onChange={handleInputSearch}
        onKeyPress={handleRedirectToSearch}
      />
      <MenuMobileWrapper status={menuMobile}>
      <ul className="menu-mobile">
            {MenuItem.map((menuItem) => (
              <li key={menuItem.id} className="has-submenu-mobile">
                <p className="has-submenu-mobile-text">{menuItem.title}</p>
                {menuItem.subMenu ? (
                  <ul className="submenu-mobile">
                    {menuItem.subMenu.map((subMenuItem) => (
                      <li key={subMenuItem.id} className="submenu-item-mobile" onClick={handleGetClick}>
                        <Link
                          to={`/${menuItem.root}/${subMenuItem.path}`}
                          className="menu-text-mobile"
                        >
                          {subMenuItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
      </MenuMobileWrapper>
    </HeaderWrapper>
  );
};

export default Header;
