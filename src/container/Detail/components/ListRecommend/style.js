import styled from "styled-components";

export const RecommendWrapper = styled.div`
  position: relative;
  max-width: 1260px;
  margin: 20px auto 0;
  width: 95%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 30px;
  @media (max-width: 768px) {
    width: 90%;
  }

  .swiper-slide {
    width: auto;
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
    top: 38%;
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
    top: 38%;
  }

  .image {
    width: 250px;
    height: 141px;
    cursor: pointer;
  }

  .title {
    display: inline-block;
    text-overflow: ellipsis;
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 20px;
    cursor: pointer;
  }

  .score {
    display: inline-block;
    max-width: 17px;
    overflow: hidden;
    white-space: nowrap;
  }

  .percent {
    max-width: 17px;
    overflow: hidden;
    white-space: nowrap;
  }

  .list-title {
    font-weight: 600;
    font-size: 1.4em;
    margin-bottom: 20px;
  }
`;
