import styled, { keyframes } from "styled-components";
const animationZoomIn = keyframes`
  from {
    transform: scale(.5) translate(-50%, -50%);
  }
  to {
    transform: scale(1) translate(-50%, -50%);
  }
`;
const animationZoomOut = keyframes`
  from {
    transform: scale(1) translate(-50%, -50%);
  }
  to {
    transform: scale(0) translate(-50%, -50%);
  }
`;
export const PopupVideoWrapper = styled.div`
  width: fit-content;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 9999;
  background: #000;
  transition: all 0.3s linear;
  transform-origin: 25% 25%;
  animation: ${(props) =>
    props.statusPopup ? animationZoomIn : animationZoomOut}
    0.3s ease-in-out forwards;
  .title-popup {
    padding: 1rem 0;
    font-size: 1.2rem;
    color: #fff;
    text-transform: capitalize;
    font-weight: 400;
  }
  .body-popup {
    position: relative;
  }
    .btn-popup {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 1rem;
  }

  .video {
    width: 1100px;
    height: 90vh;
    @media (max-width: 1150px) {
    width: 980px;
  }
  @media (max-width: 992px) {
    width: 750px;
    height: 80vh;
  }
  @media (max-width: 768px) {
    width: 620px;
    height: 60vh;
  }
  @media (max-width: 640px) {
    width: 460px;
    height: 50vh;
  }
  @media (max-width: 480px) {
    width: 360px;
    height: 40vh;
  }
  }

  .btn-close-window {
    font-size: 1.2rem;
    color: #fff;
    background-color: #000;
    cursor: pointer;
  }
`;
