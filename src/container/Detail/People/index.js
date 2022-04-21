import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PeopleWrapper } from "./style";
import { getPersonAbout } from "./../actions";
import { useHistory } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation } from "swiper";
import Loading from "../../components/Loading";
import {selectPersonAbout} from "../selectors";
import Button from "../../../component/Button";
SwiperCore.use(Navigation);

const People = ({peopleId }) => {
  const personAbout = useSelector(selectPersonAbout);
  const dispatch = useDispatch();
  const history = useHistory();
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    dispatch(getPersonAbout(peopleId))
    handleScrollToTop();
  }, [peopleId]);

  useEffect(() => {
    let toTop = () => {
      setScrollToTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", toTop);
    return () => {
      window.removeEventListener("scroll", toTop);
    };
  }, []);

  const handleScrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  if (!personAbout.birthday) {
    return <Loading />;
  }

  const handleRedirectToMovie = (id) => {
    history.push(`/movie/${id}`);
  };

  const handleRedirectToTv = (id) => {
    history.push(`/tv/${id}`);
  };

  const year = personAbout.birthday.slice(0, 4);

  return (
    <PeopleWrapper>
      <div className="content-wrapper">
        <div className="person-about-wrapper">
          <img
            className="person-image"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${personAbout.profile_path}`}
          />
          <div className="person-about">
            <h2 className="person-name-mobile">{personAbout.name}</h2>
            <h3 className="text-person-info">Personal Info</h3>
            <h4 className="small-text-person-info">Known For</h4>
            <p>{personAbout.known_for_department}</p>
            <h4 className="small-text-person-info">Known Credits</h4>
            <p>
              {personAbout.combined_credits.cast.length +
                personAbout.combined_credits.crew.length}
            </p>
            <h4 className="small-text-person-info">Gender</h4>
            <p>{personAbout.gender === 1 ? "Female" : "Male"}</p>
            <h4 className="small-text-person-info">Birthday</h4>
            <p>
              {personAbout.birthday} ({2022 - +year} years old)
            </p>
            <h4 className="small-text-person-info">Place of Birth</h4>
            <p>{personAbout.place_of_birth}</p>
            <h4 className="small-text-person-info">Also Known As</h4>
            <div className="sub-name-wrapper">
              {personAbout.also_known_as.map((item) => (
                <p className="sub-name">{item}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="person-career">
          <h2 className="person-name">{personAbout.name}</h2>
          <h3 className="text-bio">Biography</h3>
          <p>{personAbout.biography}</p>
          <h3 className="text-known-for">Known For</h3>
          <Swiper
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={"auto"}
            navigation={true}
          >
            {personAbout.combined_credits.cast.map((item) => (
              <SwiperSlide key={item.id}>
                {item.media_type === "movie" ? (
                  <img
                    src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${item.poster_path}`}
                    className="object-image"
                    onClick={() => handleRedirectToMovie(item.id)}
                  />
                ) : (
                  <img
                    src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${item.poster_path}`}
                    className="object-image"
                    onClick={() => handleRedirectToTv(item.id)}
                  />
                )}
                <div className="content">
                  {item.media_type === "movie" ? (
                    <h2 className="title" onClick={() => handleRedirectToMovie(item.id)}>{item.original_title || item.name}</h2>
                  ) : (
                    <h2 className="title" onClick={() => handleRedirectToTv(item.id)}>{item.original_title || item.name}</h2>
                  )}
                  <span className="release-date">
                    {item.release_date || item.first_air_date}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <h3 className="text-acting">Acting</h3>
          <table>
            {personAbout.combined_credits.cast.map((item) => (
              <tr>
                <td className="time">
                  {item.release_date || item.first_air_date
                    ? item.release_date || item.first_air_date
                    : "—"}
                </td>
                <td>
                  <img
                    src="/images/seperator.svg"
                    alt="seperator"
                    className="seperator"
                  />
                </td>
                <td>
                  {item.media_type === "movie" ? (
                    <span
                      className="acting-name"
                      onClick={() => handleRedirectToMovie(item.id)}
                    >
                      {item.original_title}
                    </span>
                  ) : (
                    <span
                      className="acting-name"
                      onClick={() => handleRedirectToTv(item.id)}
                    >
                      {item.name}
                    </span>
                  )}

                  <span> as {item.character}</span>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
      {scrollToTop && (
        <Button
          icon="fas fa-arrow-up"
          onClick={handleScrollToTop}
          className="scroll-up-btn"
        />
      )}
    </PeopleWrapper>
  );
};

export default People;
