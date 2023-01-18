import styled from "styled-components";
import Footer from "./Footer";
import Category from "./Category";
import { Link } from "react-router-dom";

import {
  MainCont,
  Container,
  TextH1,
  TextH2,
  Button,
  Orange,
  ImageOrange,
  ImageGreyDesk,
  ImageGreyMob,
  ImageGreyTab,
  Cont,
  Name,
  Grey,
  TextP,
  SeeProduct,
  SeeProduct2,
  ContainerInside,
  H4,
  DarkDiv,
} from "./Styles";
import Navbar from "./Navbar";

export default function Home({ setisLoggedIn }: any) {
  return (
    <MainCont>
      <Div>
        <Image src="https://audiophile-r04o.onrender.com/product/image-header.jpg" />
        <Container>
          <Text>NEW PRODUCT</Text>
          <TextH1>XX99 MARK II HEADPHONES</TextH1>
          <TextH2>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </TextH2>
          <Link to="/products/headphones/xx99-mark-two-headphones">
            <Button>SEE PRODUCT</Button>
          </Link>
        </Container>
      </Div>

      <Category />

      <Orange>
        <ImageOrange src="https://audiophile-r04o.onrender.com/product/image-speaker-zx9.png" />
        <Cont>
          <Name>ZX9 SPEAKER</Name>
          <TextP>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </TextP>
          <Link to="/products/speakers/zx9-speaker">
            <SeeProduct>SEE PRODUCT</SeeProduct>
          </Link>
        </Cont>
      </Orange>

      <Grey>
        <ImageGreyMob src="https://audiophile-r04o.onrender.com/product/mob-image-speaker-zx7.jpg" />
        <ImageGreyTab src="https://audiophile-r04o.onrender.com/product/tab-image-speaker-zx7.jpg" />
        <ImageGreyDesk src="https://audiophile-r04o.onrender.com/product/dec-image-speaker-zx7.jpg" />
        <ContainerInside>
          <H4>ZX7 SPEAKER</H4>
          <Link to="/products/speakers/zx7-speaker">
            <SeeProduct2>SEE PRODUCT</SeeProduct2>
          </Link>
        </ContainerInside>
      </Grey>

      <DarkDiv>
        <Img src="https://audiophile-r04o.onrender.com/product/image-earphones-yx1.jpg" />
        <Container2>
          <H4>YX1 EARPHONES</H4>
          <Link to="/products/earphones/yx1-earphones">
            <SeeProduct2>SEE PRODUCT</SeeProduct2>
          </Link>
        </Container2>
      </DarkDiv>

      <Footer />
    </MainCont>
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
const Img = styled.img`
  width: 100%;
`;

const Container2 = styled.div`
  padding: 50px;
  background-color: #f1f1f1;
`;
export const Text = styled.p`
  text-align: center;
  letter-spacing: 10px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
export const Div = styled.div`
  background-color: #191919;
  position: relative;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    padding: 0 10%;
  }
`;
export const Image = styled.img`
  margin: auto;
  display: flex;
`;
