import React from "react";
import styled from "styled-components";
import image from "../images/home/mobile/image-header.jpg";
import image1 from "../images/home/mobile/image-speaker-zx9.png";
import image2 from "../images/home/mobile/image-speaker-zx7.jpg";
import image3 from "../images/home/tablet/image-speaker-zx7.jpg";
import image4 from "../images/home/desktop/image-speaker-zx7.jpg";
import image5 from "../images/home/mobile/image-earphones-yx1.jpg";
import image6 from "../images/shared/mobile/image-best-gear.jpg";
import image7 from "../images/shared/tablet/image-best-gear.jpg";
import image8 from "../images/shared/desktop/image-best-gear.jpg";

import Category from "./Category";
import { useEffect, useState } from "react";
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
  ImageDesk,
} from "./Styles";

export default function ({ items }: any) {
  return (
    <MainCont>
      <Div>
        <Image src={image} />
        <Container>
          <Text>NEW PRODUCT</Text>
          <TextH1>XX99 MARK II HEADPHONES</TextH1>
          <TextH2>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </TextH2>
          <Button>SEE PRODUCT</Button>
        </Container>
      </Div>

      <Category />

      <Orange>
        <ImageOrange src={image1} />
        <Cont>
          <Name>ZX9 SPEAKER</Name>
          <TextP>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </TextP>
          <SeeProduct>SEE PRODUCT</SeeProduct>
        </Cont>
      </Orange>

      <Grey>
        <ImageGreyMob src={image2} />
        <ImageGreyTab src={image3} />
        <ImageGreyDesk src={image4} />
        <ContainerInside>
          <H4>ZX7 SPEAKER</H4>
          <SeeProduct2>SEE PRODUCT</SeeProduct2>
        </ContainerInside>
      </Grey>

      <DarkDiv>
        <Img src={image5} />
        <Container2>
          <H4>YX1 EARPHONES</H4>
          <SeeProduct2>SEE PRODUCT</SeeProduct2>
        </Container2>
      </DarkDiv>

      <LastDiv>
        <ImageGreyMob src={image6} />
        <ImageGreyTab src={image7} />
        <ImageDesk src={image8} />
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
    </MainCont>
  );
}
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
