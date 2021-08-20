import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/all";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  margin-top: 0px;
  height: 80px;
  width: 100%;
  background: ${({ scrollNav }) => (scrollNav ? "var(--nav-large-color)" : "var(--nav-bg-color)")};
  color: ${({ scrollNav }) => (scrollNav ? "var(--nav-large-text-color)" : "var(--nav-text-color)")};
  font-size: 1.1rem;
  position: fixed;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0px 28px;
  max-width: 100%;
  z-index: 1;
  
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 100%;
  color: ${({ scrollNav }) => (scrollNav ? "var(--nav-large-text-color)" : "var(--nav-text-color)")};
  font-size: 2rem;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    color: var(--nav-hover-color);
    border-bottom: 1px solid var(--nav-hover-color);
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    display: flex;
    justify-content: flex-start;
    margin-left: -10px;
  }
`;

export const NavLink = css`
  display: flex;
  align-items: center;
  justify-content: space-space-around;
  padding: 0px 40px;
  height: 100%;
  color: var(--nav-text-color);
  cursor: pointer;
  text-decoration: none;
  &:hover {
    margin-bottom: 15px;
    border-bottom: 2px solid var(--nav-hover-color);
  }
`;

export const MenuBars = styled(FaBars)`
  display: none;

 

  @media screen and (max-width: 768px) {
    display: block;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.8rem;
    margin-right: 20px;
    transform: translate(50%, 100%);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


  @media screen and (max-width: 748px) {
    display: none;
  }
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 25px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavMenuLinks = styled(Link)`
  ${NavLink}

`;


