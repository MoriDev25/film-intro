import styled from "styled-components";

export const MovieWrapper = styled.div`
  .banner-background {
    width: 100%;
    height: 100%;
    background-color: #000;
    display: flex;
    display: flex;
    justify-content: center;
  }

  .banner-movie {
    width: 1400px;
    padding: 30px 40px;
    display: flex;
    @media (max-width: 800px) {
      display: block;
    }
  }

  .banner-image {
    width: 18.75rem;
    height: 28.125rem;
    display: flex;
    align-items: center;
    display: block;
    border-radius: 0.625rem;
    @media (max-width: 800px) {
      margin: 0 auto;
    }
  }

  .banner-content {
    padding-left: 40px;
    @media (max-width: 800px) {
      padding-left: 0px;
    }
  }

  .banner-titile {
    color: #fff;
    font-size: 2.2rem;
    font-weight: 700;
    @media (max-width: 800px) {
      margin-top: 1rem;
    }
  }

  .banner-original-titile {
    font-size: 1.1rem;
    color: #bdbcbd;
    margin-top: 0.1rem;
  }

  .text {
    color: #fff;
    margin: 0.3rem 0;
  }

  .row {
    display: flex;
    list-style: none;
    margin-top: 0.8rem;
    @media (max-width: 460px) {
      display: block;
    }
  }

  .top-row {
    display: flex;
    list-style: none;
    margin-top: 0.8rem;
    @media (max-width: 650px) {
      display: block;
    }
  }

  .row-score {
    display: flex;
  }

  .user-score {
    position: relative;
    padding: 20px 0 50px;
    width: 70px;
    height: 60px;
  }

  .MuiCircularProgress-svg {
    width: 60px;
    height: 60px;
    color: #21d07a;
    scrollbar-color: #fff;
    position: absolute;
  }

  .percent {
    color: #fff;
    position: absolute;
    top: 16.5px;
    left: 13px;
    font-weight: bold;
    font-size: 1.1rem;
  }

  .text-score {
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    width: 50px;
    height: 60px;
    display: flex;
    align-items: center;
  }

  .overview {
    font-size: 1.3rem;
    color: #fff;
  }

  .description {
    font-size: 1rem;
    color: #fff;
  }

  .category {
    color: #fff;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    @media (max-width: 840px) {
      display: block;
    }
    @media (max-width: 460px) {
      margin: 1rem 0;
    }
  }

  .category-item {
    font-size: 1rem;
    padding: 5px;
    background-color: #000;
    display: inline-block;
    margin: 0 2px;
    border-radius: 6px;
    color: #fff;
    @media (max-width: 650px) {
      padding-left: 0px;
    }
    &:hover {
      color: #bdbcbd;
    }
    &:first-child {
      margin-left: 0.3rem;
      &:before {
        content: "•";
        margin-right: 0.6rem;
        @media (max-width: 650px) {
          content: "Genres: ";
        }
      }
      @media (max-width: 650px) {
        margin-left: 0px;
      }
    }
  }

  .btn-item {
    font-size: 1rem;
    padding: 8px;
    background-color: #032541;
    display: inline-block;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    margin-left: 0.8rem;
    &:hover {
      color: #bdbcbd;
    }
    @media (max-width: 840px) {
      &:first-child {
        margin-bottom: 0.5rem;
      }
    }
  }

  .btn-text {
    margin-left: 8px;
    font-weight: 600;
  }

  .top-cast {
    margin-top: 1.5rem;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: block;
    z-index: 2;
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
    from {
      margin-bottom: 70px;
    }
    to {
      margin-bottom: 95px;
    }
  }
`;
