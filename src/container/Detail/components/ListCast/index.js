import React from "react";
import { ListCastWrapper } from "./style";
import { useHistory } from "react-router";
import Image from "../../../../component/Image";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react"
import "swiper/swiper-bundle.min.css"
import SwiperCore, { Navigation, Pagination } from "swiper";
SwiperCore.use([Navigation, Pagination]);


const ListCast = ({list, title }) => {

  const history = useHistory();
  const handleRedirectToDetail = (id) => {
    history.push(`/people/${id}`);
  };

    return (
        <ListCastWrapper>
          <h3 className="list-title">{title}</h3>
            <Swiper
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={"auto"}
            navigation={true}
            pagination={{ dynamicBullets: true }}
            >
      {list.map((item) => (
            <SwiperSlide key={item.id}>
              <Image src={`https://www.themoviedb.org/t/p/w150_and_h225_face/${item.profile_path}`} className="object-image" onClick={() => handleRedirectToDetail(item.id)}/>
              <div className="content">
              <h2 className="title" onClick={() => handleRedirectToDetail(item.id)}>{item.name}</h2>
              <span>{item.character}</span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>   
        </ListCastWrapper>
    )
}

export default ListCast