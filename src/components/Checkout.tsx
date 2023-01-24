import React from "react";
import styled from "styled-components";

export default function Checkout() {
  return (
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
  );
}
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
  @media (min-width: 1440px) {
  }
`;
const Div1 = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
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
  padding: 18px 0 18px 24px;
  @media (min-width: 768px) {
    // width: 40%;
  }
  @media (min-width: 1440px) {
  }
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
  @media (min-width: 768px) {
    /* flex-wrap: nowrap;
    gap: 20px; */
  }
  @media (min-width: 1440px) {
    /* margin: 10% 10%; */
  }
`;
const Text = styled.h1`
  font-size: 28px;
  line-height: 38px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #000000;
`;
