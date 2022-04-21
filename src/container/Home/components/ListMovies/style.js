import styled from "styled-components";

export const ListMovieWrapper = styled.div`
  cursor: pointer;
  position: relative;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 30px;
  

.swiper-slide {
    width: auto;
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

  .MuiCircularProgress-svg {
    width: 38px;
    height: 38px;
    color: #21d07a;
    position: absolute;
    scrollbar-color: #fff;
    background-color: #000;
    border-radius: 50%;
  }

  .circle {
    position: absolute;
    top: -30px;
  }

  .percent {
      color: #fff;
      position: absolute;
      top: -17px;
      left: 18px;
      font-weight: bold;
      font-size: .8rem;
  }

  .percent-text {
      font-size: .5rem;
  }

  .list-title {
    font-size: 1.5em;
    font-weight: 600;
    padding-bottom: 1.5rem;
    cursor: auto;
  }

    .title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 2;
    font-size: 16px;
    font-weight: 700;
    margin-top: 5px;
    width: 145px;
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
