import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <Menu>
        <MenuEnd>
          <MenuItemLink href="/login">
            <FontAwesomeIcon icon={faUser} />
          </MenuItemLink>
        </MenuEnd>
      </Menu>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  background-color: #0e62bc;
  color: #fff;
  padding: 10px 30px;
`;

const Brand = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const MenuEnd = styled.div`
  margin-left: auto;
`;

const MenuItemLink = styled.a`
  margin-left: 10px;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
`;

export default Navbar;
