import styled from "styled-components";

export const HomeWrapper = styled.div`
width: 100%;

.movie-wrapper {
    margin-top: 1.5rem;
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
      z-index: 3;
      animation: btnPosition 1.2s linear 0s infinite alternate-reverse;
      z-index: 3;
      &:hover {
          font-size: 1.4rem;
      }
  }

  @keyframes btnPosition {
  from   {margin-bottom: 70px}
  to  {margin-bottom: 95px}
}
`