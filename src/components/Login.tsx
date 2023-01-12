import styled from "styled-components";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { MainCont } from "./Signup";

export default function Login({ setisLoggedIn }: any) {
  const { register, handleSubmit } = useForm();
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
      setisLoggedIn(true);
      navigate("/products");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <MainCont>
      <Title>Log In</Title>
      <Form onSubmit={handleSubmit(login)}>
        <Input type="string" {...register("email")} placeholder="email"></Input>
        <Input
          type="password"
          {...register("password")}
          placeholder="password"
        ></Input>

        <Button type="submit">Login to your account</Button>
        <Container>
          <Text>Don’t have an account?</Text>
          <ButtonSignLog>
            <Link to="/signup">Sign Up</Link>
          </ButtonSignLog>
        </Container>
      </Form>
    </MainCont>
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

  width: 95%;
`;
export const Form = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Button = styled.button`
  padding: 5px;
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
