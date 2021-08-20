import React from "react";
import { menuData } from "../../mock/MenuData";
import { Button } from "../Buttons/Button";

import {
  Container,
  Icon,
  CloseIcon,
  DropdownWrapper,
  Menu,
  DropdownLink,
  Btn,
} from "../DropDown/DropDownStyle";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <Menu>
          {menuData.map((item, index) => (
            <DropdownLink to={item.link} key={index}>
              {item.title}
            </DropdownLink>
          ))}
        </Menu>
        <Btn>
          <Button primary="true" round="true" large="true" to="/">
            About Us
          </Button>
        </Btn>
      </DropdownWrapper>
    </Container>
  );
};

export default Dropdown;
