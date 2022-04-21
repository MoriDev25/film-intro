import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 64px;
  background-color: #032541;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0px;
  z-index: 99;
  padding: 0 2.5rem;
  width: 100%;

  .header-format {
      max-width: 1230px;
      display: flex;
      align-items: center;
      margin: 0 auto;
      justify-content: space-between;
      width: 100%;
  }

  .menu-mobile-btn{
    display: none;
    @media (max-width: 735px) {
      display: block;
    }
  }

  .menu-btn {
    background: none;
    color: #fff;
    font-size: 1.3rem;
  }

  .active {
    width: 85.7%;
    height: 44px;
    position: absolute;
    top: 100%;
    left: 50%;
    padding: 6px 10px 6px 30px;
    transform: translateX(-50%);
    background-color: #fff;
    font-style: italic;
    font-size: 100%;
    color: #acacac;
    z-index: 10;
  }

  .disable {
    display: none;
  }

  .nav-wrapper {
    display: flex;
    align-items: center;
    width: 530px;
  }

  .logo {
    width: 154px;
    height: 20px;
  }

  .menu {
    list-style: none;
    display: flex;
    color: #fff;
    cursor: pointer;
    width: 100%;
    margin-left: .5rem;
    font-weight: 500;
    @media (max-width: 735px) {
      display: none;
  }
  }

  .has-submenu {
    position: relative; 
    display: flex;
    justify-content: center;
    margin: 0 .4rem;
    padding: .5rem .5rem;
    min-width: max-content;
  }

  .submenu {
    background-color: #fff;
    color: #212529;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 2;
    width: 173px;
    display: none;
    list-style: none;
    padding: 5px 0;
    align-items: center;
    border-radius: .35rem;
    font-weight: normal;
}

.has-submenu:hover .submenu {
    display: block;
}

  .menu-selected {
    color: #000;
    padding-bottom: .2rem;
    border-bottom: 1px solid #fff;
  }

  .submenu li {
    width: 100%;
}

  .menu-text { 
    color: #000;
    text-decoration: none;
    width: 170px;
    padding: .33rem 1.5rem;
    padding-right: calc(3rem + 16px);
    white-space: nowrap;
    display: block;
  }

  .submenu-item:hover {
    background-color: rgba(0,0,0,0.1);
  }
  
  .right-box {
    display: flex;
  }

  .search-btn {
    cursor: pointer;
  }

  .login {
    font-weight: 600;
    color: #fff;
    margin-right: 30px;
    margin-bottom: 8px;
  }

  .logo-mobile {
    @media (max-width: 735px) {
    margin: 0 auto;
    }
  }

  .language-box {
    display: flex;
    margin-right: 0.7rem;
  }

  .language-btn {
    border: 1px solid #fff;
    margin: 0px 5px;
    width: 1.8rem;
    justify-content: center;
    display: flex;
    border-radius: 3px;
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
`;

export const MenuMobileWrapper = styled.div`
    display: none;
    @media (max-width: 735px) {
    position: absolute;
    width: 320px;
    top: 100%;
    left: 0;
    height: 100ch;
    background-color: #032541;
    display: block;
    transform: translateX(${(props) => (props.status ? "0%" : "-100%")});
    transition: all linear 0.35s;
  }

  .menu-mobile {
    margin-left: 2rem;
    list-style: none;
    display: ${(props) => (props.status ? "block" : "none")};
  }

  .has-submenu-mobile-text {
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    margin-top: 1rem;
  }

  .submenu-mobile {
    list-style: none;
  }

  .menu-text-mobile {
    color: #cacaca;
    text-decoration: none;
    line-height: 1.4;
  }

`;
