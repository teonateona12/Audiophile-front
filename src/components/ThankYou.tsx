import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function ThankYou() {
  return (
    <Order>
      <h1>THANK YOU FOR YOUR ORDER</h1>
      <Link to={`/products`}>
        <Button>BACK TO HOME</Button>
      </Link>
    </Order>
  );
}

const Button = styled.button`
  background: #d87d4a;
  color: white;
  border: none;
  width: 100%;
  padding: 15px;
  margin-top: 15%;
`;
const Order = styled.div`
  padding: 24px;
  background: #ffffff;
  background-color: antiquewhite;
  border-radius: 8px;
  margin: 24px;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    width: 50%;
    margin: auto;
    margin-top: 10%;
    gap: 20px;
  }
  @media (min-width: 1440px) {
    margin: 10% 10%;
    width: 20%;
  }
`;
