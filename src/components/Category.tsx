import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import icon from "../images/icon.svg";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import { CategoryDiv, Image, Text, IconDiv, Div, TextSmall } from "./Styles";

export default function Category() {
  return (
    <CategoryDiv>
      <Div>
        <Image src={image1} />
        <Text>HEADPHONES</Text>
        <IconDiv>
          <Link to="/products/headphones">
            {" "}
            <TextSmall>SHOP</TextSmall>
          </Link>
          <img src={icon} />
        </IconDiv>
      </Div>
      <Div>
        <Image src={image2} />
        <Text>SPEAKERS</Text>
        <IconDiv>
          <Link to="/products/speakers">
            {" "}
            <TextSmall>SHOP</TextSmall>
          </Link>
          <img src={icon} />
        </IconDiv>
      </Div>
      <Div>
        <Image src={image3} />
        <Text>EARPHONES</Text>
        <IconDiv>
          <Link to="/products/earphones">
            <TextSmall>SHOP</TextSmall>
          </Link>
          <img src={icon} />
        </IconDiv>
      </Div>
    </CategoryDiv>
  );
}
