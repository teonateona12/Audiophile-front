import { Link } from "react-router-dom";
import navImg from "../images/nav.svg";
import { useState } from "react";
import logo from "../images/logo.png";
import card from "../images/card.svg";
import styled from "styled-components";
const Navbar = ({ setisLoggedIn }: any) => {
  const [nav, setNav] = useState<any>(false);

  return (
    <MainCont>
      <Nav>
        <ImgHeight
          style={{ transform: nav ? " rotate(90deg)" : "" }}
          onClick={() => setNav(!nav)}
          src={navImg}
        />
        <ImgHeight src={logo} />
        <Img src={card} />
      </Nav>
      <Button onClick={() => setisLoggedIn(false)}>Log Out</Button>
      <Category>text</Category>
      {nav && (
        <CategoryDiv>
          <Category>headphones</Category>
          <Category>headphones</Category>
          <Category>headphones</Category>
        </CategoryDiv>
      )}
    </MainCont>
  );
};
export default Navbar;

const Div = styled.div``;
const Button = styled.button`
  display: flex;
  margin: auto;
  margin-top: 5%;
`;
const Category = styled.p`
  color: red;
`;
const CategoryDiv = styled.div`
  background-color: white;
  position: absolute;
  width: 100%;
  margin-top: -5%;
  left: 0;
`;
const MainCont = styled.div`
  padding: 30px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
const ImgHeight = styled.img``;
const Img = styled.img``;
