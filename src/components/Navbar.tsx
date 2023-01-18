import { useState } from "react";
import styled from "styled-components";

const Navbar = ({ setisLoggedIn }: any) => {
  const [nav, setNav] = useState<Boolean>(false);

  return (
    <MainCont>
      <Nav>
        <ImgHeight
          style={{ transform: nav ? " rotate(90deg)" : "" }}
          onClick={() => setNav(!nav)}
          src="https://audiophile-r04o.onrender.com/product/nav.svg"
        />
        <ImgHeight src="https://audiophile-r04o.onrender.com/product/logo.png" />
        <Img src="https://audiophile-r04o.onrender.com/product/card.svg" />
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
