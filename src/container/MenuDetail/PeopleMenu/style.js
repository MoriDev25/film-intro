import styled from "styled-components";

export const PeopleMenuWrapper = styled.div`
  width: 100%;
  .window-wrapper {
    width: 1400px;
    padding: 30px 40px;
    height: auto;
    margin: 0 auto;
    @media (max-width: 1400px) {
        width: 1130px;
    }
    @media (max-width: 1130px) {
        width: 860px;
    }
    @media (max-width: 860px) {
        width: 590px;
    }
    @media (max-width: 590px) {
        width: 375px;
        padding: 30px 20px;
    }
  }

  .name-content {
    font-size: 1.6em;
    width: 100%;
    font-weight: 500;
    padding-bottom: 30px;
  }

  .content-wrapper {
    display: flex;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
  }

  .people-profile {
    width: 235px;
    height: 310px;
    box-shadow: rgb(0 0 0 / 15%) 0px 15px 30px -10px;
    margin-bottom: 30px;
    border: 1px solid #eaeaea;
    border-radius: 4px;
    @media (max-width: 590px) {
      width: 150px;
      height: 250px;
    }
  }

  .people-image {
    width: 235px;
    height: 235px;
    object-fit: fill;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
    cursor: pointer;
    @media (max-width: 590px) {
      width: 150px;
      height: 165px;
    }
  }

  .meta {
      padding: 8px 10px;
  }

  .name {
    font-weight: 600;
    font-size: 1.1em;
    cursor: pointer;
  }

  .sub {
    display: inline-block;
    text-overflow: ellipsis;
    width: 215px;
    overflow: hidden;
    white-space: nowrap;
    margin-right: 20px;
    font-size: 0.9em;
    font-weight: 400;
    color: rgba(0,0,0,0.6);
    @media (max-width: 590px) {
      width: 130px;
    }
  }

  .paginationBtn {
  height: 40px;
  list-style: none;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.paginationBtn a {
  padding: 6px 10px;
  margin: 0px;
  border: 1px solid #01b4e4;
  color: #2b2eff;
  cursor: pointer;
}

.paginationBtn a:hover {
  color: white;
  background-color: #01b4e4;
}

.paginationActive a {
  color: white;
  background-color: #01b4e4;
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
