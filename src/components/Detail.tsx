import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ProductType, PropsType } from "./types";

const Detail: React.FC<PropsType> = ({ data }) => {
  const { detail } = useParams();
  const result = data.find((item: ProductType) => item.slug === detail);
  return (
    <div>
      <Navbar />
      <ProductCont>
        <Link to={`/products/${result?.category}`}>
          <Button>Go Back</Button>
        </Link>
        <div>
          <ImgName>
            <div>
              <Image
                src={`https://audiophile-r04o.onrender.com/product/${result?.image.mobile}`}
              />
            </div>
            <NameCont>
              <Name>{result?.name}</Name>
              <Desc>{result?.description}</Desc>
              <Price>{"$ " + result?.price}</Price>
              <CartDiv>
                <Cart>
                  <Btn>-</Btn>
                  <p>1</p>
                  <Btn>+</Btn>
                </Cart>
                <AddButton>ADD TO CART</AddButton>
              </CartDiv>
            </NameCont>
          </ImgName>
        </div>
        <FeatureDiv>
          <Cont>
            <h3>FEATURES</h3>
            <Features>{result?.features}</Features>
          </Cont>
          <div>
            <BoxDiv>
              <h3>IN THE BOX</h3>
              <div>
                {result?.includes.map((item: any) => (
                  <InTheBox>
                    <Number>{item.quantity + "x"}</Number>
                    <Item>{item.item}</Item>
                  </InTheBox>
                ))}
              </div>
            </BoxDiv>
          </div>
        </FeatureDiv>
        <GalleryDiv>
          <TwoImg>
            <Image
              src={`https://audiophile-r04o.onrender.com/product/${result?.gallery.first.mobile}`}
            />
            <Image
              src={`https://audiophile-r04o.onrender.com/product/${result?.gallery.second.mobile}`}
            />
          </TwoImg>
          <Image
            src={`https://audiophile-r04o.onrender.com/product/${result?.gallery.third.mobile}`}
          />
        </GalleryDiv>
      </ProductCont>
      <Footer />
    </div>
  );
};
export default Detail;
const Cont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
const TwoImg = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5%;
  }
`;
const GalleryDiv = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
  }
`;
const BoxDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 768px) {
    gap: 35px;
  }
  @media (min-width: 1440px) {
    gap: 50px;
  }
`;
const ImgName = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
  }
  @media (min-width: 1440px) {
    gap: 10%;
  }
`;
const Btn = styled.button`
  border: none;
  color: #000000;
  opacity: 0.25;
`;
const AddButton = styled.button`
  font-weight: 700;
  font-size: 13px;
  text-align: center;
  letter-spacing: 1px;
  background: #d87d4a;
  padding: 15px 30px;
  color: #ffffff;
  border: none;
`;
const Cart = styled.div`
  display: flex;
  background: #f1f1f1;
  gap: 50px;
  padding: 10px;
`;
const CartDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 1440px) {
    justify-content: left;
    gap: 5%;
  }
`;
const Price = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;
  color: #000000;
`;
const Button = styled.button`
  color: #000000;
  font-weight: 500;
  font-size: 15px;
  mix-blend-mode: normal;
  opacity: 0.5;
  border: none;
  background-color: none;
  margin: 20px 0;
`;
const Image = styled.img`
  border-radius: 8px;
`;
const InTheBox = styled.div`
  display: flex;
  gap: 15px;
`;
const FeatureDiv = styled.div`
  margin: 80px 0 80px 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 1440px) {
    flex-direction: row;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 70px;
  }
`;
const NameCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 24px;
  @media (min-width: 1440px) {
    margin-top: 20%;
  }
`;
const ProductCont = styled.div`
  margin: 24px;
  @media (min-width: 768px) {
    margin: 40px;
  }
  @media (min-width: 1440px) {
    margin: 5% 12%;
  }
`;
const Number = styled.p`
  font-weight: 700;
  font-size: 15px;
  line-height: 25px;
  color: #d87d4a;
`;
const Item = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;
const Features = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;
const Desc = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  color: #000000;
  mix-blend-mode: normal;
  opacity: 0.5;
`;
const Name = styled.p`
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
`;
