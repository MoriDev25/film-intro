import styled from "styled-components";

export const SearchMenuWrapper = styled.div`
width: 100%;
  .content-wrapper {
    width: 1380px;
    height: auto;
    display: flex;
    padding: 30px 20px 30px 30px;
    margin: 0 auto;
    justify-content: center;
    @media (max-width: 1380px) {
      width: 1170px;
    }
    @media (max-width: 1170px) {
      width: 970px;
    }
    @media (max-width: 970px) {
      width: 760px;
    }
    @media (max-width: 760px) {
      display: block;
      padding: 30px 10px;
      width: 660px;
    }
    @media (max-width: 660px) {
      width: 560px;
    }
    @media (max-width: 560px) {
      width: 370px;
    }
  }

  .search-group {
    width: 260px;
    min-width: 260px;
    margin-right: 20px;
    @media (max-width: 760px) {
      margin: 0 auto 2rem;
      width: 330px
    }
  }

  .search-box {
    list-style: none;
    border: 1px solid;
    box-shadow: rgb(0 0 0 / 15%) 0px 3px 30px 0px;
    margin-bottom: 10px;
    border: 1px solid #cacaca;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .result-item {
    padding: 10px 30px;
    &:hover {
      background: rgba(0,0,0,0.08);
    }
  }

  .result-text {
    cursor: pointer;
  }

  .search-for-box {
    margin-bottom: 1.5rem;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: rgb(0 0 0 / 15%) 0px 3px 30px 0px;
  }

  .search-for {
    margin-left: .2rem;
  }

  .active {
    background: rgba(0,0,0,0.08);
    font-weight: bold;
  }

  .search-text {
    font-size: 1.2rem;
    font-weight: 600;
    padding: 20px;
    color: #fff;
    background-color: rgba(1, 180, 228, 1);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  .media {
    display: flex;
    flex-wrap: wrap;
    width: 1050px;
    @media (max-width: 1370px) {
      width: 840px;
    }
    @media (max-width: 1170px) {
      width: 630px;
    }
    @media (max-width: 970px) {
      width: 420px;
    }
    @media (max-width: 760px) {
      width: 630px;
    }
    @media (max-width: 660px) {
      width: 540px;
    }
    @media (max-width: 560px) {
      width: 360px;
    }
  }

  .item {
    width: 180px;
    max-height: 370px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 15%) 0px 15px 30px -10px;
    margin: 0 15px 30px;
    border: 1px solid #eaeaea;
    position: relative;
    @media (max-width: 660px) {
    width: 150px;
    }
  }

  .image {
    width: 100%;
    height: 273px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    cursor: pointer;
    @media (max-width: 660px) {
    height: 220px;
    }
  }

  .image-people {
    width: 100%;
    height: 180px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    cursor: pointer;
  }

  .percent-box {
    position: absolute;
    top: 250px;
    left: 10px;
    @media (max-width: 660px) {
      top: 200px;
    }
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
    font-size: 0.8rem;
    position: absolute;
    display: inline-block;
  }

  .percent-text {
    font-size: 0.5rem;
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

  .content-people {
    width: 100%;
    padding: 4px 12px 12px;
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

  @keyframes btnPosition {
  from   {margin-bottom: 70px}
  to  {margin-bottom: 95px}
}
`;
