import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useParams } from "react-router";
import Category from "./Category";

export default function Product({ data }: any) {
  const { id } = useParams();
  const product = data.filter((product: any) => id === product.category);

  return (
    <div>
      <Navbar />
      <div>
        <CategoryDiv>
          <CategoryName>{product[0]?.category}</CategoryName>
        </CategoryDiv>
        {product.map((product: any) => (
          <Div>
            <Image src={`${product.image.mobile}`} />
            <Cont>
              {product.new && <New>NEW PRODUCT</New>}
              <Name>{product.name}</Name>
              <Description>{product.description}</Description>
              <Button>SEE PRODUCT</Button>
            </Cont>
          </Div>
        ))}
      </div>
      <Category />
      <Footer />
    </div>
  );
}
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 1440px) {
    margin-top: 15%;
  }
`;
const CategoryName = styled.h1`
  text-align: center;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
`;
const CategoryDiv = styled.div`
  background-color: black;
  padding-bottom: 32px;
`;
const New = styled.p`
  text-align: center;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #d87d4a;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
const Button = styled.button`
  color: #ffffff;
  border: none;
  background: #d87d4a;
  padding: 15px 30px;
  width: 50%;
  margin: auto;
  @media (min-width: 768px) {
    width: 25%;
  }
  @media (min-width: 1440px) {
    margin: 0;
    width: 50%;
  }
`;
const Description = styled.p`
  line-height: 25px;
  text-align: center;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
const Name = styled.p`
  font-size: 28px;
  line-height: 38px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
const Div = styled.div`
  margin: 100px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 768px) {
    margin: 32px;
  }
  @media (min-width: 1440px) {
    margin: 10% 10%;
    flex-direction: row;
    gap: 10%;
  }
`;
const Image = styled.img`
  border-radius: 8px;
`;
