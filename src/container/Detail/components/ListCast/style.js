import styled from "styled-components";

export const ListCastWrapper = styled.div`
  cursor: pointer;
  position: relative;
  max-width: 1260px;
  margin: 0 auto;
  width: 95%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 5px;

.swiper-slide {
    width: 12.5%;
  @media (max-width: 1260px) {
      width: 13%;
  }
  @media (max-width: 1220px) {
      width: 13.5%;
  }
  @media (max-width: 1180px) {
      width: 14%;
  }
  @media (max-width: 1140px) {
      width: 14.5%;
  }
  @media (max-width: 1100px) {
      width: 15%;
  }
  @media (max-width: 1060px) {
      width: 15.6%;
  }
  @media (max-width: 1020px) {
      width: 16.2%;
  }
  @media (max-width: 980px) {
      width: 16.8%;
  }
  @media (max-width: 940px) {
      width: 17.5%;
  }
  @media (max-width: 900px) {
      width: 18.3%;
  }
  @media (max-width: 860px) {
      width: 19.2%;
  }
  @media (max-width: 820px) {
      width: 20.2%;
  }
  @media (max-width: 780px) {
      width: 21.3%;
  }
  @media (max-width: 740px) {
      width: 22.4%;
  }
  @media (max-width: 700px) {
      width: 23.7%;
  }
  @media (max-width: 660px) {
      width: 25.5%;
  }
  @media (max-width: 620px) {
      width: 27.5%;
  }
  @media (max-width: 580px) {
      width: 29.3%;
  }
  @media (max-width: 540px) {
      width: 33.1%;
  }
}
  .object-image {
    display: inline-block;
    width: 150px;
    height: 225px;
    border-radius: 8px;
    cursor: pointer;
  }
  .content {
    width: 100%;
    padding: 12px 10px;
    position: relative;
    white-space: normal;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    cursor: grab;
  }

  .list-title {
    font-size: 1.5em;
    font-weight: 600;
    padding-bottom: 1.5rem;
    cursor: auto;
  }

  .title {
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
  }

  .swiper-button-next {
    width: 40px;
    height: 60px;
    background: rgba(0, 0, 0, 0.3);
    border: 0px solid;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    position: absolute;
    top: 30%;
  }
  .swiper-button-prev {
    width: 40px;
    height: 60px;
    background: rgba(0, 0, 0, 0.3);
    border: 0px solid;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    position: absolute;
    top: 30%;
  }
`;
