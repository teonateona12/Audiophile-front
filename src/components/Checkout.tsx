import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CartType, CheckoutProps } from "./types";

const Checkout: React.FC<CheckoutProps> = ({ cart, user }) => {
  const result = cart.filter((item: CartType) => item.userId === user?.id);
  const navigate = useNavigate();
  const button = () => {
    navigate("/thankyou");
  };

  return (
    <div>
      <MainCont>
        <Text>CHECKOUT</Text>
        <OrangeTxt>Billing details</OrangeTxt>
        <Form>
          <Div1>
            <Div>
              <Label>Name</Label>
              <Input placeholder="Alexei Ward"></Input>
            </Div>
            <Div>
              <Label>Email Adress</Label>
              <Input placeholder="alexei@mail.com"></Input>
            </Div>
            <Div>
              <Label>Phone Number</Label>
              <Input placeholder="+1 202-555-0136"></Input>
            </Div>
          </Div1>

          <OrangeTxt>shipping info</OrangeTxt>

          <Div1>
            <DivAddress>
              <Label>Your Address</Label>
              <Input placeholder="1137 Williams Avenue"></Input>
            </DivAddress>
            <Div>
              <Label>ZIP Code</Label>
              <Input placeholder="10001"></Input>
            </Div>
            <Div>
              <Label>City</Label>
              <Input placeholder="New York"></Input>
            </Div>
            <Div>
              <Label>Country</Label>
              <Input placeholder="United States"></Input>
            </Div>
          </Div1>
        </Form>
      </MainCont>

      <Summery>
        <h1>summary</h1>

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
              <p>{`x${item.number}`}</p>
            </ImageName>
          </Cont>
        ))}
        <Button onClick={() => button()}>CONTINUE & PAY</Button>
      </Summery>
    </div>
  );
};
export default Checkout;

const Button = styled.button`
  background: #d87d4a;
  color: white;
  border: none;
  width: 100%;
  padding: 15px;
  margin-top: 15%;
`;
const Div2 = styled.div`
  display: flex;
  gap: 15px;
`;
const Image = styled.img`
  width: 20%;
  border-radius: 8px;
`;
const Cont = styled.div`
  margin-top: 30px;
`;
const ImageName = styled.div`
  display: flex;
  gap: 20px;
`;
const Name = styled.p`
  font-size: 13px;
  font-weight: 700;
`;
const Summery = styled.div`
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
  margin: 24px;
  margin-top: 30%;
  @media (min-width: 680px) {
    margin-top: 20%;
  }
  @media (min-width: 1240px) {
    margin: 10% 10%;
  }
`;
const DivAddress = styled.div`
  width: 90%;
  margin-top: 5%;
`;
const Div = styled.div`
  width: 90%;
  margin-top: 5%;
  @media (min-width: 768px) {
    width: 45%;
  }
`;
const Div1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;
const Label = styled.label`
  margin-top: 20px;
  letter-spacing: -0.214286px;
  font-weight: 700;
  color: #000000;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Input = styled.input`
  width: 100%;
  background: #ffffff;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  margin-top: 10px;
  padding: 18px 0 18px 24px;
`;
const OrangeTxt = styled.h4`
  font-weight: 700;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: 0.928571px;
  text-transform: uppercase;
  color: #d87d4a;
  margin-top: 32px;
`;
const MainCont = styled.div`
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
  margin: 24px;
  margin-top: 30%;
  @media (min-width: 680px) {
    margin-top: 20%;
  }
  @media (min-width: 1240px) {
    margin: 10% 10%;
  }
`;
const Text = styled.h1`
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
`;
