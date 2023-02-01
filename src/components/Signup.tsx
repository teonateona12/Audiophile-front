import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { LogIn } from "./types";
import styled from "styled-components";
import { useState } from "react";
import {
  Button,
  Input,
  Form,
  ButtonSignLog,
  Text,
  Container,
  Title,
} from "./Login";

export default function Signup({ setisLoggedIn }: LogIn) {
  const navigate = useNavigate();
  const [check, setCheck] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signup = async (data: any) => {
    const formData = new FormData();
    formData.append("avatar", data.avatar[0]);
    formData.append("email", data.email);
    formData.append("name", data.name);
    formData.append("password", data.password);
    formData.append("backLink", "https://audiophile-front.onrender.com/verify");

    try {
      const res = await axios.post(
        "https://audiophile-r04o.onrender.com/api/signup",
        formData
      );
      setCheck(`Check your email ${data.name}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MainCont>
      <Title>Sign Up</Title>
      <Form onSubmit={handleSubmit(signup)}>
        <Input
          type="string"
          {...register("name", { required: true })}
          placeholder="name"
        ></Input>
        {errors.name && <Error>Please write name</Error>}
        <Input
          type="string"
          {...register("email", { required: true })}
          placeholder="email"
        ></Input>
        {errors.email && <Error>Please write email</Error>}
        <Input
          type="password"
          {...register("password", { required: true })}
          placeholder="password"
        ></Input>
        {errors.password && <Error>Please write password</Error>}
        <Input type="file" {...register("avatar", { required: true })}></Input>
        {errors.avatar && <Error>Please upload image</Error>}
        <Button type="submit">Create an account</Button>
        <Container>
          <Text>Already have an account?</Text>
          <ButtonSignLog>
            <Link to="/">Log In</Link>
          </ButtonSignLog>
        </Container>
      </Form>
      <Check>{check}</Check>
    </MainCont>
  );
}
const Check = styled.h4`
  color: red;
  margin: 5%;
`;
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

export const Error = styled.small`
  color: red;
  font-size: 12px;
  margin: 0;
  padding: 0;
`;
