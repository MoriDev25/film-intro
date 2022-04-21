import React from "react";
import { FooterWraper } from "./style";
import { BrandItem } from "./style";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkedAlt,
  faEnvelope,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const listBrand = [
    {
      id: 1,
      image: "/images/disnep.png",
      video: "/videos/disney.mp4",
      type: "video/mp4",
    },
    {
      id: 2,
      image: "/images/pixar.png",
      video: "/videos/pixar.mp4",
      type: "video/mp4",
    },
    {
      id: 3,
      image: "/images/marvel.png",
      video: "/videos/marvel.mp4",
      type: "video/mp4",
    },
    {
      id: 4,
      image: "/images/starwars.png",
      video: "/videos/star-wars.mp4",
      type: "video/mp4",
    },
    {
      id: 5,
      image: "/images/national-geographic.png",
      video: "/videos/national-geographic.mp4",
      type: "video/mp4",
    },
  ];

  const socialAccount = [
    {
      id: 1,
      icon: faFacebook,
      path: "https://www.facebook.com/le.quanganh.796",
      color: "blue",
    },
    {
      id: 2,
      icon: faYoutube,
      path: "https://www.youtube.com/channel/UCdDyRcCoDHkTADy-sgnyCfw/featured",
      color: "red",
    },
    {
      id: 3,
      icon: faTwitter,
      path: "https://twitter.com/Mori_Dev25",
      color: "blue",
    },
    {
      id: 4,
      icon: faGithub,
      path: "https://github.com/MoriDev25",
      color: "white",
    },
  ];

  const contactInfo = [
    {
      id: 1,
      title: "Số 290 P. Tây Sơn, Trung Liệt, Đống Đa, Hà Nội",
      icon: faMapMarkedAlt,
    },
    {
      id: 2,
      title: "Mori.dev01@gmail.com",
      icon: faEnvelope,
    },
    {
      id: 3,
      title: "094-909-1269",
      icon: faPhoneSquareAlt,
    },
  ];

  return (
    <FooterWraper>
      <div className="brands">
        <h3 className="brand-title">{t("Partner_Brands")}</h3>
        <Slider {...settings}>
          {listBrand.map((item) => (
            <BrandItem key={item.id}>
              <img src={item.image} alt="brand"/>
              <video autoPlay muted loop playsInline>
                <source src={item.video} type={item.type} />
              </video>
            </BrandItem>
          ))}
        </Slider>
      </div>
      <div className="website-info">
        <div className="introduce box">
          <h2 className="widget-title">The Movie DB</h2>
          <Link to="">
            <img src="/images/logo.svg" alt="logo" className="logo" />
          </Link>
          <p className="info">
            This website's interface similar to TMDB. <br />
            My Website reviews Movies, TV Shows. <br />
            Web Design by Lê Quang Anh
          </p>
        </div>
        <div className="content box">
          <h2 className="widget-title">{t("Contact_Info")}</h2>
          <ul className="contact-info">
            {contactInfo.map((item) => (
              <li key={item.id}>
                <FontAwesomeIcon icon={item.icon} className="info-icon" />
                <span>{item.title}</span>
              </li>
            ))}
            <ul className="contact">
              {socialAccount.map((item) => (
                <li key={item.id} className="social-icon">
                  <a href={item.path}>
                    <FontAwesomeIcon
                      icon={item.icon}
                      style={{ color: "white" }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </ul>
        </div>
        <div className="mapbox box">
          <h2 className="widget-title">{t("Our_Location")}</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.8827168570565!2d105.82364722099643!3d21.007905854786106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adff5b664301%3A0xb95a224ee216725d!2zVmnDqsyjbiDEkGHMgG8gVGHMo28gQ05UVCBRdcO0zIFjIFTDqsyBIEktVEVDSA!5e0!3m2!1svi!2sus!4v1642175272745!5m2!1svi!2sus" title="map" width={"100%"} height={"100%"} style={{border: 0}} allowFullScreen loading="lazy" />
        </div>
      </div>
      <div className="mapbox2">
        <h2 className="widget-title">Our Location</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2323.8827168570565!2d105.82364722099643!3d21.007905854786106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adff5b664301%3A0xb95a224ee216725d!2zVmnDqsyjbiDEkGHMgG8gVGHMo28gQ05UVCBRdcO0zIFjIFTDqsyBIEktVEVDSA!5e0!3m2!1svi!2sus!4v1642175272745!5m2!1svi!2sus" title="map" width={"100%"} height={"100%"} style={{border: 0}} allowFullScreen loading="lazy" />
      </div>
      <div className="copy-right">
        <p>Copyright © 2021 by The Movie DB. All rights reserved</p>
        <p className="author">Web Design by Lê Quang Anh</p>
      </div>
    </FooterWraper>
  );
};

export default Footer;
