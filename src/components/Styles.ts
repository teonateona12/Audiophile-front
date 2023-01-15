import react from "react";
import styled from "styled-components";

export const ImageDesk = styled.img`
  display: none;
  @media (min-width: 1440px) {
    display: block;
    order: 2;
  }
`;
export const DarkDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
  gap: 30px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 20px;
  }
  @media (min-width: 1440px) {
    margin: 5% 12%;
  }
`;
export const Image = styled.img`
  display: flex;
  margin: auto;
  margin-top: -10%;
  @media (min-width: 768px) {
    margin-top: -15%;
  }
`;
export const Text = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 1.07143px;
`;
export const TextSmall = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  opacity: 0.5;
`;
export const IconDiv = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
export const Div = styled.div`
  background: #f1f1f1;
  border-radius: 8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 5%;
`;
export const CategoryDiv = styled.div`
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

export const H4 = styled.h4`
  letter-spacing: 2px;
  margin-bottom: 32px;
`;
export const ContainerInside = styled.div`
  top: 40%;
  left: 15%;
  position: absolute;
`;
export const Cont = styled.div`
  gap: 20px;

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;
export const Grey = styled.div`
  margin: 24px;
  position: relative;
  @media (min-width: 1440px) {
    margin: 5% 12% 0 12%;
  }
`;
export const ImageGreyMob = styled.img`
  width: 100%;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const ImageGreyTab = styled.img`
  width: 100%;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1440px) {
    display: none;
  }
`;
export const ImageGreyDesk = styled.img`
  display: none;
  width: 100%;
  @media (min-width: 1440px) {
    display: block;
  }
`;
export const SeeProduct = styled.button`
  letter-spacing: 1px;
  color: #ffffff;
  padding: 20px;
  background: #000000;
  border: none;
  display: flex;
  margin: auto;
  margin-bottom: 55px;
  @media (min-width: 1440px) {
    margin: 0;
  }
`;
export const SeeProduct2 = styled.button`
  padding: 20px;
  letter-spacing: 1px;
  color: #000000;
  border: 1px solid #000000;
`;
export const TextP = styled.p`
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  opacity: 0.75;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
export const Name = styled.h1`
  text-align: center;
  font-size: 56px;
  line-height: 58px;
  text-align: center;
  letter-spacing: 2px;
  letter-spacing: 1.28571px;
  color: #ffffff;
  @media (min-width: 1440px) {
    text-align: left;
  }
`;
export const ImageOrange = styled.img`
  width: 50%;
  display: flex;
  margin: auto;
  margin-top: 57px;
  @media (min-width: 1440px) {
    order: 1;
  }
`;
export const Orange = styled.div`
  background-color: #d87d4a;
  border-radius: 8px;
  margin: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: 1440px) {
    flex-direction: row-reverse;
    margin: 0 12% 0 12%;
    padding: 0 10%;
    gap: 20%;
  }
`;

export const MainCont = styled.div``;

export const Container = styled.div`
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

export const TextH1 = styled.h1`
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
export const TextH2 = styled.h2`
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
export const Button = styled.button`
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
