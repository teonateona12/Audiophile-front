import { useState } from "react";
import styled from "styled-components";
import { LogIn } from "./types";
import { Link } from "react-router-dom";

const Navbar = ({ setisLoggedIn }: LogIn) => {
  const [nav, setNav] = useState<Boolean>(false);

  return (
    <MainCont>
      <Nav>
        {/* <ImgHeight
          style={{ transform: nav ? " rotate(90deg)" : "" }}
          onClick={() => setNav(!nav)}
          src="https://audiophile-r04o.onrender.com/product/nav.svg"
        /> */}
        <ImgHeight src="https://audiophile-r04o.onrender.com/product/logo.png" />
        <NavLink>
          <Link to="/products">
            <NavText>HOME</NavText>
          </Link>

          <Link to="/products/headphones">
            <NavText>HEADPHONES</NavText>
          </Link>
          <Link to="/products/speakers">
            <NavText>SPEAKERS</NavText>
          </Link>
          <Link to="/products/earphones">
            <NavText>EARPHONES</NavText>
          </Link>
        </NavLink>
        <Img src="https://audiophile-r04o.onrender.com/product/card.svg" />
      </Nav>
      <Button onClick={() => setisLoggedIn(false)}>Log Out</Button>
    </MainCont>
  );
};
export default Navbar;
const NavText = styled.p`
  letter-spacing: 2px;
  color: #ffffff;
  text-align: center;
`;
const NavLink = styled.nav`
  display: none;
  @media (min-width: 768px) {
    gap: 30px;
    margin: 30px;
    display: flex;
    flex-direction: row;
    margin-left: 0;
  }
  @media (min-width: 1440px) {
    margin-top: 0;
  }
`;
const Txt = styled.p`
  color: white;
`;
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
