import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { CartType, CartProps } from "./types";

const Cart: React.FC<CartProps> = ({ user, setNav, cart, setCart }) => {
  const result = cart.filter((item: CartType) => item.userId === user?.id);
  const navigate = useNavigate();

  useEffect(() => {
    const getCartList = async () => {
      const res = await axios.get("http://localhost:5000/api/carts");
      setCart(res.data);
    };
    getCartList();
  }, [cart]);
  const removeFunc = async (id: string | undefined) => {
    const res = await axios.delete(`http://localhost:5000/api/carts/${id}`);
  };
  const checkout = () => {
    setNav(false);
    navigate("/checkout");
  };
  return (
    <MainCont>
      <Div>
        <h1>Cart</h1>
        {result.length === 0 && <h2>Cart is empty </h2>}
        {result.length !== 0 && (
          <Btn2 onClick={() => removeFunc(user?.id)}>Remove all</Btn2>
        )}
      </Div>

      {result?.map((item: CartType) => (
        <Cont>
          <ImageName>
            <Div2>
              <Image
                src={`https://audiophile-r04o.onrender.com/product/${item.image}`}
              />
              <div>
                <Name>{item.name}</Name>
                <p>{`$ ${+item.price * item.number}`}</p>
              </div>
            </Div2>

            <CartDiv>
              <Btn>-</Btn>
              <p>{item.number}</p>
              <Btn>+</Btn>
            </CartDiv>
          </ImageName>
        </Cont>
      ))}
      {result.length !== 0 && (
        <Button onClick={() => checkout()}>CHECKOUT</Button>
      )}
    </MainCont>
  );
};
export default Cart;
const Btn2 = styled.button`
  border: none;
  background-color: white;
`;
const Div2 = styled.div`
  display: flex;
  gap: 15px;
`;
const Button = styled.button`
  background: #d87d4a;
  color: white;
  border: none;
  width: 100%;
  padding: 15px;
  margin-top: 15%;
`;
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
  background: white;
  border-radius: 8px;
  padding: 28px;
  @media (min-width: 768px) {
    width: 40%;
  }
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
