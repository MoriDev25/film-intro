import styled from "styled-components";

export const WatchListMenuWrapper = styled.div`
  width: 100%;
  .window-wrapper {
    width: 1300px;
    height: auto;
    margin: 0 auto;
    @media (max-width: 1300px) {
        width: 1070px;
    }
    @media (max-width: 1070px) {
        width: 858px;
    }
    @media (max-width: 858px) {
        width: 660px;
    }
    @media (max-width: 660px) {
        width: 560px;
    }
    @media (max-width: 560px) {
        width: 370px;
    }
  }

  .tab-name {
    margin: 1.5rem 2rem;
    @media (max-width: 660px) {
      margin-left: 1.3rem;
    }
  }

  .media {
    display: flex;
    flex-wrap: wrap;
    margin-left: 1rem;
    @media (max-width: 660px) {
      margin-left: 0.5rem;
    }
  }

  .item {
    width: 180px;
    max-height: 370px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 15%) 0px 15px 30px -10px;
    margin: 0px 15px 30px 15px;
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
    position: relative;
    @media (max-width: 660px) {
    height: 220px;
    }
  }

  .delete-btn {
    position: absolute;
    top: 1%;
    right: 2%;
    background: none;
    font-size: 1.1rem;
    &:hover {
      color: #fff;
    }
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
`