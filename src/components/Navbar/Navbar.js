import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  Nav,
  NavContainer,
  Logo,
  MenuBars,
  NavMenu,
  NavMenuLinks,
} from "../Navbar/NavbarStyle";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    scroll.scrollToTop();
  };
  return (
    <Nav scrollNav={scrollNav} toggle={toggle}>
      <NavContainer>
        <Logo onClick={toggleNav} to="/">
          Ayrton Senna
        </Logo>
        <MenuBars></MenuBars>
        <NavMenu>
          <NavMenuLinks to="home" exact="true" offset={-80} smooth={true} duration={500} spy={true}>
            THE DRIVER
          </NavMenuLinks>
          <NavMenuLinks to="stories">STORIES</NavMenuLinks>
          <NavMenuLinks to="foundation">FOUNDATION</NavMenuLinks>

          <NavMenuLinks href="//www.twitter.com/ayrtonsenna">
            OFFICIAL SITE
          </NavMenuLinks>
        </NavMenu>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
