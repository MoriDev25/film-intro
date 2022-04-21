import styled from "styled-components";

export const FooterWraper = styled.div`
  background-color: #032541;
  padding-top: 30px;

  .brands {
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
    @media (max-width: 1300px) {
      width: 1260px;
    }
    @media (max-width: 1260px) {
      width: 1100px;
    }
    @media (max-width: 1160px) {
      width: 1000px;
    }
    @media (max-width: 1060px) {
      width: 900px;
    }
    @media (max-width: 960px) {
      width: 760px;
    }
    @media (max-width: 840px) {
      width: 730px;
    }
    @media (max-width: 800px) {
      width: 650px;
    }
    @media (max-width: 720px) {
      width: 550px;
    }
    @media (max-width: 620px) {
      width: 500px;
    }
    @media (max-width: 560px) {
      width: 300px;
    }
  }

  .brand-title {
    color: #04aadc;
    margin-bottom: 15px;
    margin-left: 20px;
    font-size: 1.5rem;
    font-weight: 500;
  }

  .slick {
    cursor: pointer;
    color: white;
    position: absolute;
    top: 50%;
  }

  .slick-next {
    width: 40px;
    height: 60px;
    border: 0px solid;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.3);
    &:before {
      font-family: "Fontawesome";
      content: "\f105";
    }
  }
  .slick-prev {
    width: 40px;
    height: 60px;
    border: 0px solid;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.3);
    &:before {
      font-family: "Fontawesome";
      content: "\f104";
    }
  }

  .website-info {
    width: 1230px;
    margin: 20px auto 80px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1300px) {
      width: 1150px;
    }
    @media (max-width: 1200px) {
      width: 1020px;
    }
    @media (max-width: 1080px) {
      width: 910px;
    }
    @media (max-width: 960px) {
      width: 600px;
      margin-bottom: 0px;
    }
    @media (max-width: 680px) {
      flex-direction: column;
      margin-bottom: 80px;
      width: fit-content;
      .box {
        margin: 0 auto;
        margin-bottom: 1rem;
      }
    }
  }

  .introduce {
    @media (max-width: 680px) {
      width: 360px;
      padding: 0 20px;
    }
  }

  .info {
    color: #fff;
    line-height: 2;
    margin-top: .8rem;
  }

  .widget-title {
    color: #04aadc;
    font-weight: 400;
    margin-bottom: .5rem;
    line-height: 1.5;
  }

  .logo {
    width: 185px;
    height: 25px;
    margin-top: .5rem;
  }

  .content {
    list-style: none;
    margin-left: 20px;
    @media (max-width: 1200px) {
      width: 250px;
    }
    @media (max-width: 680px) {
      margin-left: 0;
      width: fit-content;
      padding: 0 30px;
    }
  }

  .contact-info {
    color: #fff;
    list-style: none;
    line-height: 2.1;
  }

  .contact {
    display: flex;
    list-style: none;
    margin-left: 1.2rem;
  }

  .info-icon {
    color: #04aadc;
    width: 1rem;
    margin-right: 1rem;
  }

  .user-icon {
    color: #04aadc;
    margin: auto 0;
  }

  .social-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 50px;
    min-height: 50px;
    color: #fff;
    margin: 0px 5px;
    font-size: 1.5rem;

    &:hover {
      background-color: #434e5e;
      border-radius: 50%;
      cursor: pointer;
    }
  }

  .mapbox {
    width: 350px;
    height: 200px;
    @media (max-width: 960px) {
      display: none;
    }
    @media (max-width: 680px) {
      display: block;
    }
    @media (max-width: 400px) {
      width: 320px;
      height: 180px;
    }
  }

  .mapbox2 {
    width: 525px;
    height: 250px;
    display: none;
    @media (max-width: 960px) {
      display: block;
      margin: 0 auto;
      margin-bottom: 80px;
    }
    @media (max-width: 680px) {
      display: none;
    }
  }

  .copy-right {
    height: 2.5rem;
    background-color: #000;
    color: #7e8788;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .author {
    @media (max-width: 680px) {
      display: none;
    }
  }
`;
export const BrandItem = styled.div`
  position: relative;
  max-width: 221px;
  height: 127px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  margin: 10px 20px;
  padding: 0;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    z-index: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    video {
      opacity: 1;
    }
  }
`;
