import styled from "styled-components";

export const ListMediaWrapper = styled.div`
  position: relative;
  max-width: 1260px;
  margin: 30px auto 0;
  width: 95%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding-bottom: 40px;
  @media (max-width: 768px) {
    width: 90%;
  }

  .swiper-slide {
    width: auto;
  }
  .object-video {
    display: inline-block;
    width: 500px;
    height: 300px;
    border-radius: 8px;
    @media (max-width: 640px) {
      width: 400px;
    }
  }

  .object-image {
    display: inline-block;
    width: auto;
    height: 300px;
    border-radius: 8px;
  }

  .object-backdrop {
    display: inline-block;
    width: 100%;
    height: 300px;
    border-radius: 8px;
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

  .text-select {
    list-style: none;
    display: flex;
    margin-bottom: 1rem;
    @media (max-width: 500px) {
      display: block;
    } 
  }

  .select-title {
    font-weight: bold;
    font-size: 1.3rem;
    margin-top: -3px;
    margin-right: 1.5rem;
    margin-bottom: .5rem;
  }

  .select-option {
    color: #000;
    font-weight: 600;
    font-size: 1.1rem;
    margin: 0 1rem;
    padding-bottom: 5px;
    cursor: pointer;
  }

  .active {
    border-bottom: 4px solid rgba(0, 0, 0, 0.7);
    width: fit-content;
    @media (max-width: 500px) {
      border-bottom: 2px solid rgba(0, 0, 0, 0.7);
    }
  }

  .title {
    font-weight: 700;
    font-size: 16px;
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
    top: 50%;
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
    top: 50%;
  }
`;
