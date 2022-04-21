import styled from "styled-components";

export const PeopleWrapper = styled.div`
  width: 100%;
  .content-wrapper {
    max-width: 1400px;
    padding: 30px 40px;
    height: auto;
    margin: 0 auto;
    display: flex;
    @media (max-width: 1024px) {
      display: block;
    }
  }

  .person-about {
    margin-right: 50px;
    width: fit-content;
    @media (max-width: 1024px) {
      margin-right: 0px;
    }
  }

  .person-about-wrapper {
    @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    }
    @media (max-width: 640px) {
    display: block;
    width: fit-content;
    margin: 0 auto;
    }
  }

  .person-career {
    width: calc(100% - 340px);
    @media (max-width: 1024px) {
      width: 95%;
    }
  }

  .person-name {
    font-weight: 700;
    font-size: 2.2rem;
    margin-bottom: 30px;
    @media (max-width: 1024px) {
      display: none;
    }
  }

  .person-name-mobile {
    display: none;
    font-weight: 700;
    font-size: 1.5rem;
    @media (max-width: 1024px) {
      display: block;
    }
    @media (max-width: 640px) {
      margin-top: 1rem;
    }
  }

  .text-bio {
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom: 8px;
    @media (max-width: 1024px) {
      margin-top: 1rem;
    }
  }

  .text-known-for {
    margin-top: 30px;
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom: 8px;
  }

  .person-image {
    width: 300px;
    height: 450px;
    border-radius: 8px;
    margin-right: 2rem;
    @media (max-width: 1024px) {
      margin-right: 2rem;
    }
    @media (max-width: 640px) {
      margin-right: 0;
      height: 400px;
    }
    @media (max-width: 640px) {
      margin-right: 0;
      width: 250px;
      height: 300px;
    }
  }

  .text-person-info {
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 8px;
    margin-top: 30px;
    @media (max-width: 1024px) {
      margin-top: 0.5rem;
    }
  }

  .small-text-person-info {
    font-weight: 600;
    font-size: 1rem;
    margin-top: 20px;
    @media (max-width: 1024px) {
      margin-top: 0.5rem;
    }
  }

  .sub-name {
    margin-top: 8px;
  }

  .sub-name-wrapper {
    @media (max-width: 1024px) {
    height: 7rem;
    -webkit-box-orient: vertical;
    overflow: hidden;
    }
    @media (max-width: 640px) {
    height: auto;
    }
  }

  .object-image {
    display: inline-block;
    width: 130px;
    height: 195px;
    border-radius: 8px;
    cursor: pointer;
  }
  .content {
    width: 130px;
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
    text-align: center;
    font-size: 0.9em;
    flex-wrap: wrap;
    cursor: pointer;
  }

  .release-date {
    text-align: center;
    font-size: 0.9em;
  }

  .text-acting {
    font-weight: 600;
    font-size: 1.3em;
    margin-bottom: 8px;
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

  .seperator {
    height: 15px;
    margin-right: 20px;
  }

  .time {
    padding: 8px 16px;
    text-align: center;
    flex-wrap: nowrap;
    width: 120px;
  }

  .acting-name {
    font-weight: bold;
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
`;
