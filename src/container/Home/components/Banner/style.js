import styled from "styled-components";

export const BannerWrapper = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  height: 300px;
  background-image: url(/images/home-banner.jpg);
  background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

  .content-wrapper {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    padding: 30px 40px;
  }

  .title {
    width: 100%;
    margin-bottom: 40px;
    & > h2 {
      font-size: 3em;
      font-weight: 700;
      line-height: 1;
      color: #fff;
    }
    > h3 {
      font-size: 2em;
      font-weight: 600;
      color: #fff;
      display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 3;
    }
  }
  .input-search {
    width: 100%;
    height: 46px;
    line-height: 46px;
    font-size: 1.1em;
    color: rgba(0,0,0,0.5);
    border: none;
    border-radius: 30px;
    padding: 10px 20px;
    flex-grow: 0;
    outline: none;
}

.search-form {
    width: 100%;
    position: relative;
}

.search-btn {
    display: inline-flex;
    position: absolute;
    right: 0;
    height: 100%;
    font-weight: 700;
    justify-content: center;
    align-content: center;
    align-items: center;
    font-size: .9rem;
    border-radius: 30px;
    cursor: pointer;
}
`;
