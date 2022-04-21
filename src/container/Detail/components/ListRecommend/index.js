import React from "react";
import { RecommendWrapper } from "./style";
import Image from "../../../../component/Image";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation } from "swiper";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
SwiperCore.use(Navigation);

const ListRecommend = ({ list, type }) => {
    const { t } = useTranslation();
    const history = useHistory();

    const handleRedirect = (id) => {
      if (type === "movie") {
        history.push(`/movie/${id}`);
      }
      else {
        history.push(`/tv/${id}`);
      }
    };

  
  return (
    <RecommendWrapper>
        <h3 className="list-title">{t("Recommendations")}</h3>
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        navigation={true}
      >
        {list.map((item) => (
          <SwiperSlide>
              <Image src={`https://www.themoviedb.org/t/p/w250_and_h141_face/${item.backdrop_path || item.poster_path}`} className="image" onClick={() => handleRedirect(item.id)}/>
              <div>
                  <span className="title" onClick={() => handleRedirect(item.id)}>{item.title || item.name}</span>
                  <span className="score">{item.vote_average * 10}</span>
                  <span className="score">%</span>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </RecommendWrapper>
  );
};

export default ListRecommend;
