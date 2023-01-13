import React from "react";
import styled from "styled-components";
import image from "../images/home/mobile/image-header.jpg";
import Category from "./Category";

export default function () {
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
      <Category CategoryDiv={CategoryDiv} />
    </MainCont>
  );
}
const CategoryDiv = styled.div`
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 90px;
  margin-top: 20%;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    gap: 20px;
  }
  @media (min-width: 1440px) {
    margin: 10% 10%;
  }
`;
const MainCont = styled.div``;
const Div = styled.div`
  background-color: #191919;
  position: relative;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    padding: 0 10%;
  }
`;
const Image = styled.img`
  margin: auto;
  display: flex;
`;
const Container = styled.div`
  position: absolute;
  top: 10%;
  width: 100%;
  @media (min-width: 1440px) {
    position: inherit;
    padding-top: 20%;
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;
const Text = styled.p`
  text-align: center;
  letter-spacing: 10px;
  color: #ffffff;
  mix-blend-mode: normal;
  opacity: 0.5;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
const TextH1 = styled.h1`
  text-align: center;
  letter-spacing: 1.28571px;
  color: #ffffff;
  margin: 16px 0 24px 0;
  @media (min-width: 768px) {
    font-size: 56px;
    line-height: 58px;
    margin: 30px;
  }
  @media (min-width: 1440px) {
    text-align: left;
    margin: 0;
  }
`;
const TextH2 = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  opacity: 0.75;
  width: 65%;
  margin: auto;
  @media (min-width: 1440px) {
    text-align: left;
    margin: 0;
  }
`;
const Button = styled.button`
  color: #ffffff;
  background-color: #d87d4a;
  padding: 15px 30px;
  border: none;
  margin: auto;
  display: flex;
  margin-top: 28px;
  @media (min-width: 1440px) {
    margin: 0;
    width: 50%;
  }
`;
