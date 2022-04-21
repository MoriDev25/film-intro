import React, { useState, useEffect } from "react";
import { ListMediaWrapper } from "./style";
import Image from "../../../../component/Image";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { useTranslation } from "react-i18next";
SwiperCore.use([Navigation, Pagination]);

const ListMedia = ({ listVideo, listBackdrop, listPoster, id }) => {
  //id truyền vào từ Movie Detail
  const [currentId, setCurrentId] = useState(1);
  const { t } = useTranslation();
  const showBackdrop = listBackdrop.slice(0,5)
  const showPoster = listPoster.slice(0,8)
  const showVideo = listVideo.slice(0,8)

  useEffect(() => {
    setCurrentId(2);
    setCurrentId(3);
    setCurrentId(1);
  }, [id]);

  const handleChooseList = (id) => {
    setCurrentId(id);
  };

  const getListById = () => {
    switch (currentId) {
      case 1:
        return showVideo;
      case 2:
        return showPoster;
      case 3:
        return showBackdrop;
    }
  };

  const selectMedia = [
    {
      id: 1,
      title: "Videos",
      list: listVideo,
    },
    {
      id: 2,
      title: "Posters",
      list: listPoster,
    },
    {
      id: 3,
      title: "Backdrops",
      list: listBackdrop,
    },
  ];
  return (
    <ListMediaWrapper>
      <ul className="text-select">
        <li>
          <h3 className="select-title">{t("Media")}</h3>
        </li>
        {selectMedia.map((item) => (
          <li>
            <p
              className={`select-option ${
                item.id === currentId ? "active" : ""
              }`}
              onClick={() => handleChooseList(item.id)}
            >{`${item.title} ${item.list.length}`}</p>
          </li>
        ))}
      </ul>

      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={"auto"}
        navigation
        pagination={{ dynamicBullets: true }}
      >
        {getListById().map((item) => (
          <SwiperSlide key={item.id}>
            {currentId === 1 ? (
              <iframe
                src={`https://www.youtube.com/embed/${item.key}`}
                className="object-video"
              />
            ) : currentId === 2 ? (
              <Image
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.file_path}`}
                className="object-image"
              />
            ) : (
              <Image
                src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${item.file_path}`}
                className="object-backdrop"
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </ListMediaWrapper>
  );
};

export default ListMedia;
