import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import icons from "../images/icons.png";

export default function Footer() {
  return (
    <Container>
      <Cont>
        <div>
          <Img src={logo} />
        </div>
        <Nav>
          <NavText>HOME</NavText>
          <NavText>HEADPHONES</NavText>
          <NavText>SPEAKERS</NavText>
          <NavText>EARPHONES</NavText>
        </Nav>
      </Cont>
      <FooterText>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </FooterText>
      <Div>
        <FooterText>Copyright 2021. All Rights Reserved</FooterText>
        <div>
          <Img src={icons} />
        </div>
      </Div>
    </Container>
  );
}
const Cont = styled.div`
  @media (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
const Div = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
  }
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px;
  @media (min-width: 768px) {
    flex-direction: row;
    margin-left: 0;
  }
  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;
const Img = styled.img`
  margin: auto;
  display: flex;
  margin-top: 40px;
  @media (min-width: 768px) {
    margin: 0;
  }
`;
const Container = styled.div`
  background-color: #101010;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  margin-top: 10%;
  @media (min-width: 768px) {
    padding: 60px 30px;
  }
  @media (min-width: 1440px) {
    padding: 5% 12%;
  }
`;
const FooterText = styled.p`
  text-align: center;
  color: #ffffff;
  mix-blend-mode: normal;
  line-height: 25px;
  opacity: 0.5;
  @media (min-width: 768px) {
    text-align: left;
  }
  @media (min-width: 1440px) {
    width: 50%;
  }
`;
const NavText = styled.p`
  letter-spacing: 2px;
  color: #ffffff;
  text-align: center;
`;
