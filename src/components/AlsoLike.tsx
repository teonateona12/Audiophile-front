import React from "react";
import { AlsoProps, PropsType } from "./types";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AlsoLike: React.FC<PropsType> = ({ data }) => {
  const { detail } = useParams();
  const result = data.find((item) => item.slug === detail);
  return (
    <div>
      <Title>YOU MAY ALSO LIKE</Title>
      <Cont>
        {result?.others.map((item: AlsoProps) => (
          <div>
            <Img
              src={`https://audiophile-r04o.onrender.com/product/${item.image.mobile}`}
            />
            <Name>{item.name}</Name>
            <Link to={`/products/headphones/${item.slug}`}>
              <Button>SEE PRODUCT</Button>
            </Link>
          </div>
        ))}
      </Cont>
    </div>
  );
};
export default AlsoLike;
const Button = styled.button`
  color: #ffffff;
  background-color: #d87d4a;
  padding: 15px 30px;
  border: none;
  margin: auto;
  display: flex;
  margin-top: 28px;
`;
const Cont = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;
const Img = styled.img`
  margin-top: 50px;
`;
const Title = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.857143px;
  text-transform: uppercase;
  color: #000000;
  margin-top: 40px;
`;
const Name = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  text-align: center;
  letter-spacing: 1.71429px;
  text-transform: uppercase;
  color: #000000;
`;
