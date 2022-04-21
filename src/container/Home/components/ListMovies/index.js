import React , {memo} from "react";
import { ListMovieWrapper } from "./style";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react"
import CircularProgress from "@material-ui/core/CircularProgress";
import Image from "../../../../component/Image";
import "swiper/swiper-bundle.min.css"
import SwiperCore, {Navigation} from 'swiper';
SwiperCore.use(Navigation);

const ListMovie = ({list, url, title, onClick}) => {

    return (
        <ListMovieWrapper>
          <h3 className="list-title">{title}</h3>
            <Swiper
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={"auto"}
            navigation={true}
            >
      {list.map((item) => (
            <SwiperSlide key={item.id}>
              <Image src={`${url}/${item.poster_path}`} className="object-image" onClick={() => onClick(item.id)}/>
              <div className="content">
              <CircularProgress
                  className="circle"
                  variant="determinate"
                  value={item.vote_average * 10}
                />
                <span className="percent" style={(item.vote_average === 10) ? {left: "13px"} : {left: "18px"}}>
                  {item.vote_average * 10}<sup className="percent-text">%</sup>
                </span>
              <h2 className="title" onClick={() => onClick(item.id)}>{item.original_title || item.name}</h2>
              <span>{item.release_date || item.first_air_date}</span>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>   
        </ListMovieWrapper>
    )
}

export default memo(ListMovie)