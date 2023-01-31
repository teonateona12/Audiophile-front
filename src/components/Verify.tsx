import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { ButtonSignLog } from "./Login";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Verify() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const hash = params.get("hash");

  useEffect(() => {
    const verify = async () => {
      const res = await axios.post(
        "https://audiophile-r04o.onrender.com/api/verification",
        {
          hash,
        }
      );
    };
    verify();
  });
  return (
    <Div>
      <Text>Your eccount verified</Text>

      <Button>
        <Link to="/">
          <P>Log In</P>
        </Link>
      </Button>
    </Div>
  );
}
const Text = styled.h1`
  text-align: center;
`;
const Button = styled.button`
  border: none;
  padding: 4%;
  background-color: #6268b4;
  border-radius: 8px;
  width: 50%;
  margin: auto;
`;
const P = styled.p`
  font-size: 20px;
  color: #ead5d5;
`;
const Div = styled.div`
  margin: 25%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
