import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LogIn, ProductType } from "./types";

import { Link } from "react-router-dom";
import { MainCont, Error } from "./Signup";

export default function Login({ setisLoggedIn }: LogIn) {
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const login = async (data: any) => {
    const { email, password } = data;
    try {
      const res = await axios.post(
        "https://audiophile-r04o.onrender.com/api/login",
        {
          email,
          password,
        }
      );
      console.log(res.data.token);
      setisLoggedIn(true);
      navigate("/products");
    } catch (error) {
      setError("Invalid Email/Password");
      console.log(error);
    }
  };
  return (
    <div>
      <MainCont>
        <Title>Log In</Title>
        <Form onSubmit={handleSubmit(login)}>
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
          <Error>{error}</Error>
          <Button type="submit">Login to your account</Button>
          <Container>
            <Text>Don’t have an account?</Text>
            <ButtonSignLog>
              <Link to="/signup">Sign Up</Link>
            </ButtonSignLog>
          </Container>
        </Form>
      </MainCont>
    </div>
  );
}

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
  margin-top: 40px;
`;
export const Input = styled.input`
  padding: 8px;
  margin-top: 10px;
  width: 95%;
`;
export const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
export const Button = styled.button`
  padding: 5px;
  margin-top: 15px;
`;
export const Container = styled.div`
  display: flex;
  margin: 0 auto;
`;
export const ButtonSignLog = styled.button`
  border: none;
  background-color: white;
`;
export const Text = styled.p`
  font-size: 15px;
  line-height: 19px;
`;
