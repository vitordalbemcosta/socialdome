import React from "react";
import styled from "styled-components";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const Home = () => {
  // Sample menu items
  const menuItems = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];

  return (
    <HomePage>
      <MainContent>
        <WelcomeMessage>Welcome to Social Dome</WelcomeMessage>
        <DropdownContainer>
          <DropdownMenu options={menuItems} placeholder="Portas" />
        </DropdownContainer>
        <AboutSection>
          <SectionTitle>About Us</SectionTitle>
          <p>
            Social Dome Gestão de Condomínios Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nihil maiores a dicta eos cupiditate
            nobis porro recusandae labore veniam, rem maxime, magnam impedit
            placeat in consequatur hic doloribus at corporis?
          </p>
        </AboutSection>
        <ContactSection>
          <SectionTitle>Contact Us</SectionTitle>
          <p>
            If you have any inquiries or require our services, feel free to
            contact us:
          </p>
          <ContactInfo>
            <strong>Phone:</strong> +55-2456-7890
          </ContactInfo>
          <ContactInfo>
            <strong>Email:</strong> info@socialdome.com
          </ContactInfo>
        </ContactSection>
      </MainContent>
    </HomePage>
  );
};

const HomePage = styled.div``;

const MainContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const WelcomeMessage = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

const DropdownContainer = styled.div`
  width: 250px;
  margin: 0 auto;
`;

const DropdownMenu = styled(Dropdown)`
  .Dropdown-control {
    background-color: #0e62bc;
    color: #fff;
    border: none;
  }

  .Dropdown-menu {
    background-color: #0e62bc;
    border: none;
    box-shadow: none;
    overflow-y: scroll;
    max-height: 200px;
  }

  .Dropdown-menu::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }

  .Dropdown-menu::-webkit-scrollbar-thumb {
    background-color: #4d4d4d;
  }

  .Dropdown-option {
    color: #fff;
    padding: 10px;
    border-bottom: 1px solid #4d4d4d;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const AboutSection = styled.section`
  margin: 220px 0 50px 0;
`;

const SectionTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ContactSection = styled.section`
  margin-bottom: 30px;

  p {
    margin: 0 0 16px 0;
  }
`;

const ContactInfo = styled.p`
  margin-bottom: 5px;
`;

export default Home;
