import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Cart({ number, setNumber }: any) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const getCartList = async () => {
      const res = await axios.get("http://localhost:5000/api/carts");
      setCart(res.data);
    };
    getCartList();
  }, []);

  return (
    <MainCont>
      <Div>
        <h1>Cart</h1>
        <button>Remove all</button>
      </Div>
      {cart?.map((item: any) => (
        <Cont>
          <ImageName>
            <Image
              src={`https://audiophile-r04o.onrender.com/product/${item.image}`}
            />
            <div>
              <Name>{item.name}</Name>
              <p>{`$ ${item.price * +item.number}`}</p>
            </div>

            <CartDiv>
              <Btn>-</Btn>
              <p>{item.number}</p>
              <Btn>+</Btn>
            </CartDiv>
          </ImageName>
        </Cont>
      ))}
    </MainCont>
  );
}
const ImageName = styled.div`
  display: flex;
  gap: 20px;
`;
const Name = styled.p`
  font-size: 13px;
  font-weight: 700;
`;
const MainCont = styled.div`
  margin: 20px;
  background: #a38357;
  position: absolute;
  border-radius: 8px;
  padding: 28px;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 20%;
  border-radius: 8px;
`;
const Btn = styled.button`
  border: none;
  color: #000000;
  opacity: 0.25;
`;
const Cont = styled.div`
  margin-top: 30px;
`;
const CartDiv = styled.div`
  display: flex;
  background: #f1f1f1;
  gap: 30px;
  padding: 10px;
  height: 50%;
  background: #f1f1f1;
  margin: auto 0;
`;
