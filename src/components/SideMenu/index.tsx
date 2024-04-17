import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { menuItems } from "../../utils/menuItems";

const SideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MenuToggleButton onClick={toggleMenu}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </MenuToggleButton>
      <SideMenuContainer isOpen={isOpen}>
        <MenuItems>
          <MenuItems>
            {menuItems.map((item) => (
              <MenuItem key={item.id}>
                <a href={item.link}>{item.text}</a>
              </MenuItem>
            ))}
          </MenuItems>
        </MenuItems>
      </SideMenuContainer>
    </>
  );
};

const MenuToggleButton = styled.div`
  position: fixed;
  top: -1px;
  left: 5px;
  z-index: 999;
  cursor: pointer;
  padding: 10px;
  background-color: #0e62bc;
  color: #fff;
`;

const SideMenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 38px;
  left: ${(props) => (props.isOpen ? "0" : "-200px")};
  width: 200px;
  height: 100%;
  background-color: #0e62bc;
  color: #fff;
  transition: left 0.3s ease;
`;

const MenuItems = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const MenuItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #4d4d4d;

  &:last-child {
    border-bottom: none;
  }
`;

export default SideMenu;
