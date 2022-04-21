import styled from "styled-components";

export const MovieMenuWrapper = styled.div`
width: 100%;
  .window-wrapper {
    width: 1420px;
    height: auto;
    padding: 30px 40px;
    margin: 0 auto;
    justify-content: center;
    @media (max-width: 1420px) {
      width: auto;
      padding: 30px 0px 30px 15px;
    } 
  }

  .content-wrapper {
    display: flex;
    margin: 0 auto;
    width: fit-content;
    @media (max-width: 726px) {
      display: block;
    } 
  }

  .name-content {
    font-size: 1.6em;
    font-weight: 500;
    padding-bottom: 30px;
    margin: 0 auto;
    @media (max-width: 1355px) {
      width: 1130px;
    }
    @media (max-width: 1150px) {
      width: 925px;
    }
    @media (max-width: 935px) {
      width: 710px;
    }
    @media (max-width: 725px) {
      width: auto;
    }
  }

  .feature {
    width: 260px;
    min-width: 260px;
    margin-right: 30px;
    @media (max-width: 726px) {
      width: auto;
    }
  }

  .sort-feature {
    border: 1px solid;
    padding: 14px 16px;
    box-shadow: rgb(0 0 0 / 15%) 0px 3px 30px 0px;
    margin-bottom: 10px;
    border: 1px solid #eaeaea;
    border-radius: 8px;
  }

  .sort-text {
      font-weight: 600;
      font-size: 1.1rem;
      padding-bottom: 10px;
      border-bottom: 1px solid;
  }

  .sort-text2 {
      font-weight: 300;
      font-size: 1.1rem;
      margin: 14px 0;
  }

  .select-sort {
      height: 34px;
      width: 100%;
  }

  .media {
    display: flex;
    flex-wrap: wrap;
    width: auto;
    position: relative;
    margin-bottom: 3rem;
    width: 1050px;
    @media (max-width: 1355px) {
      width: 840px;
    }
    @media (max-width: 1150px) {
      width: 640px;
    }
    @media (max-width: 935px) {
      width: 420px;
    }
    @media (max-width: 725px) {
      width: 635px;
      margin: 0 auto;
    }
    @media (max-width: 645px) {
      width: 420px;
      margin: 0 auto;
    }
    @media (max-width: 435px) {
      width: 350px;
    }
  }

  .item {
    width: 180px;
    max-height: 370px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 15%) 0px 15px 30px -10px;
    margin-bottom: 30px;
    margin-right: 30px;
    border: 1px solid #eaeaea;
    position: relative;
    @media (max-width: 435px) {
      margin-right: 15px;
      width: 160px;
    } 
  }

  .image {
    width: 100%;
    height: 273px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    cursor: pointer;
  }

  .percent-box {
    position: absolute;
    top: 250px;
    left: 10px;
  }

  .MuiCircularProgress-svg {
    width: 38px;
    height: 38px;
    color: #21d07a;
    scrollbar-color: #fff;
    background-color: #000;
    border-radius: 50%;
  }

  .circle {
    position: absolute;
  }

  .percent {
      color: #fff;
      top: 12px;
      left: 0px;
      font-weight: bold;
      font-size: .8rem;
      position: absolute;
      display: inline-block;
  }

  .percent-text {
      font-size: .5rem;
  }

  .content {
    width: 100%;
    padding: 12px 10px;
    white-space: normal;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
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
    cursor: pointer;
  }

  .load-more-btn {
    width: 95%;
    background-color: #08b4e4;
    height: 3rem;
    color: #fff;
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 8px; 
  }

  .scroll-up-btn {
      position: fixed;
      bottom: 0;
      right: 0;
      background-color: #04aadc;
      margin-bottom: 80px;
      margin-right: 35px;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      font-size: 1.2rem;
      cursor: pointer;
      animation: btnPosition 1.2s linear 0s infinite alternate-reverse;
      &:hover {
          font-size: 1.4rem;
      }
  }

  .not-found {
    font-weight: 600;
    padding: 1rem 0;
  }

  @keyframes btnPosition {
  from   {margin-bottom: 70px}
  to  {margin-bottom: 95px}
}
`;
