import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import {
  Button,
  Input,
  Form,
  ButtonSignLog,
  Text,
  Container,
  Title,
} from "./Login";
import { Link } from "react-router-dom";

export default function Signup({ setisLoggedIn }: any) {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const signup = async (data: any) => {
    const formData = new FormData();
    formData.append("avatar", data.avatar[0]);
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("password", data.password);

    try {
      const res = await axios.post(
        "https://audiophile-r04o.onrender.com/api/signup",
        formData
      );
      setisLoggedIn(true);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MainCont>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit(signup)}>
        <Input type="string" {...register("name")} placeholder="name"></Input>
        <Input type="string" {...register("email")} placeholder="email"></Input>
        <Input
          type="password"
          {...register("password")}
          placeholder="password"
        ></Input>
        <Input type="file" {...register("avatar")}></Input>
        <Button type="submit">Create an account</Button>
        <Container>
          <Text>Already have an account?</Text>
          <ButtonSignLog>
            <Link to="/">Log In</Link>
          </ButtonSignLog>
        </Container>
      </Form>
    </MainCont>
  );
}

export const MainCont = styled.div`
  background-color: white;
  margin: 20% 10%;
  border-radius: 8px;
  padding-top: 5px;
  @media (min-width: 775px) {
    margin: 15% 25%;
  }
  @media (min-width: 1200px) {
    margin: 12% 30%;
  }
`;
