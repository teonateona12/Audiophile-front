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
    </MainCont>
  );
};
export default Navbar;

const Button = styled.button`
  display: flex;
  margin: auto;
  margin-top: 5%;
`;

const MainCont = styled.div`
  padding: 30px;
  background-color: black;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
const ImgHeight = styled.img``;
const Img = styled.img``;
