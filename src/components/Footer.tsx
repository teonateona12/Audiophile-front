import styled from "styled-components";
import { Link } from "react-router-dom";
import { ImageGreyMob, ImageGreyTab, ImageDesk } from "./Styles";
export default function Footer() {
  return (
    <div>
      <LastDiv>
        <ImageGreyMob src="https://audiophile-r04o.onrender.com/product/mob-image-best-gear.jpg" />
        <ImageGreyTab src="https://audiophile-r04o.onrender.com/product/tab-image-best-gear.jpg" />
        <ImageDesk src="https://audiophile-r04o.onrender.com/product/dec-image-best-gear.jpg" />
        <TextDiv>
          <Txt>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </Txt>
          <Paragraph>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </Paragraph>
        </TextDiv>
      </LastDiv>
      <Container>
        <Cont>
          <div>
            <Img src="https://audiophile-r04o.onrender.com/product/logo.png" />
          </div>
          <Nav>
            <Link to="/products">
              <NavText>HOME</NavText>
            </Link>

            <Link to="/products/headphones">
              <NavText>HEADPHONES</NavText>
            </Link>
            <Link to="/products/speakers">
              <NavText>SPEAKERS</NavText>
            </Link>
            <Link to="/products/earphones">
              <NavText>EARPHONES</NavText>
            </Link>
          </Nav>
        </Cont>
        <FooterText>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </FooterText>
        <Div>
          <FooterText>Copyright 2021. All Rights Reserved</FooterText>
          <div>
            <Img src="https://audiophile-r04o.onrender.com/product/icons.png" />
          </div>
        </Div>
      </Container>
    </div>
  );
}
export const LastDiv = styled.div`
  margin: 24px;
  margin-top: 15%;
  @media (min-width: 1440px) {
    display: flex;
    margin: 0 12% 0 12%;
    gap: 15%;
  }
`;
const TextDiv = styled.div`
  @media (min-width: 1440px) {
    margin-top: 5%;
  }
`;
const Paragraph = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #000000;
  opacity: 0.5;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
const Txt = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  text-align: center;
  letter-spacing: 1px;
  color: #000000;
  margin: 30px 0;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
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
