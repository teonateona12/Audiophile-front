import React from "react";
import styled from "styled-components";
import icon from "../images/icon.svg";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";

export default function Category({ CategoryDiv }: any) {
  return (
    <CategoryDiv>
      <Div>
        <Image src={image1} />
        <Text>HEADPHONED</Text>
        <IconDiv>
          <p>SHOP</p>
          <img src={icon} />
        </IconDiv>
      </Div>
      <Div>
        <Image src={image2} />
        <Text>HEADPHONED</Text>
        <IconDiv>
          <p>SHOP</p>
          <img src={icon} />
        </IconDiv>
      </Div>
      <Div>
        <Image src={image3} />
        <Text>HEADPHONED</Text>
        <IconDiv>
          <TextSmall>SHOP</TextSmall>
          <img src={icon} />
        </IconDiv>
      </Div>
    </CategoryDiv>
  );
}
const Image = styled.img`
  display: flex;
  margin: auto;
  margin-top: -10%;
  @media (min-width: 768px) {
    margin-top: -15%;
  }
`;
const Text = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.07143px;
`;
const TextSmall = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  opacity: 0.5;
`;
const IconDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
const Div = styled.div`
  background: #f1f1f1;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 5%;
`;
