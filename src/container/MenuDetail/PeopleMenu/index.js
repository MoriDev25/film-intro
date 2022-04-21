import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PeopleMenuWrapper } from "./style";
import { getPopularPeople } from "../actions";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router";
import Button from "../../../component/Button";
import {selectPopularPeople} from "../selectors";
import { useTranslation } from "react-i18next";
import Image from "../../../component/Image";

const PeopleMenu = () => {
  const { t } = useTranslation();
  const popularPeople = useSelector(selectPopularPeople);
  const dispatch = useDispatch();
  const BASE_IMAGE_URL = "https://www.themoviedb.org/t/p/w235_and_h235_face";
  const [pageNumber, setPageNumber] = useState(1);
  const [scrollToTop, setScrollToTop] = useState(false);
  const pagination = useRef();

  useEffect(() => {
    dispatch(getPopularPeople(pageNumber));
    handleScrollToTop()
  }, [pageNumber]);

  useEffect(() => {
    let toTop = () => {
      setScrollToTop(window.scrollY > 100)
    }
    window.addEventListener("scroll", toTop);
    return () => {
      window.removeEventListener("scroll", toTop)
    }
  }, [])

  const handleScrollToTop = () => window.scrollTo({
    top: 0,
    behavior: "smooth"
  })

  const setPage = ({ selected }) => {
    setPageNumber(selected + 1);
  };

  const history = useHistory();
  const handleRedirectToDetail = (id) => {
    history.push(`/people/${id}`);
  };
  return (
    <PeopleMenuWrapper>
      <div className="window-wrapper">
        <h2 className="name-content">{t("Popular_People")}</h2>
        <div className="content-wrapper">
          {popularPeople.map((item) => (
            <div className="people-profile">
              <Image
                className="people-image"
                src={`${BASE_IMAGE_URL}/${item.profile_path}`}
                onClick={() => handleRedirectToDetail(item.id)}
              />
              <div className="meta">
                <p className="name" onClick={() => handleRedirectToDetail(item.id)}>{item.name}</p>
                <p className="sub">
                  {item.known_for.map((item) => (
                    <span>
                      {item.title || item.original_title || item.name},{" "}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
        <ReactPaginate
          ref={pagination}
          pageCount={Math.ceil(500 / 1)}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          onPageChange={setPage}
          previousLabel={"Previous"}
          nextLabel={"Next"}
          containerClassName={"paginationBtn"}
          previousLinkClassName={"prevBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
      {scrollToTop && <Button
        icon="fas fa-arrow-up"
        onClick={handleScrollToTop}
        className="scroll-up-btn"
      />}
    </PeopleMenuWrapper>
  );
};

export default PeopleMenu;
