import React, { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "../Navbar";
import SideMenu from "../SideMenu";
import "../../styles/global.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Navbar />
      <SideMenu />
      {children}
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  position: relative;
`;

export default Layout;
