import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { NavbarProps } from "./types";
import Cookies from "js-cookie";

const Navbar: React.FC<NavbarProps> = ({
  setisLoggedIn,
  user,
  cart,
  setCart,
}) => {
  const [nav, setNav] = useState<Boolean>(false);
  const cartButton = () => {
    setNav(!nav);
  };
  const logOut = () => {
    setisLoggedIn(false);
    Cookies.remove("token");
  };
  return (
    <div>
      <MainCont>
        <Nav>
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
          <Img
            onClick={() => cartButton()}
            src="https://audiophile-r04o.onrender.com/product/card.svg"
          />
        </Nav>
        <Button onClick={() => logOut()}>Log Out</Button>
      </MainCont>

      {nav && (
        <Modal>
          <Cart user={user} setNav={setNav} cart={cart} setCart={setCart} />
        </Modal>
      )}
    </div>
  );
};
export default Navbar;

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  height: 100%;
  top: 15%;
  width: 100%;
`;
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
`;
const MainCont = styled.div`
  padding: 20px;
  background-color: black;
  position: fixed;
  opacity: 1;
  top: 0;
  width: 100%;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  @media (min-width: 1440px) {
    padding: 0 10%;
  }
`;
const ImgHeight = styled.img``;
const Img = styled.img`
  position: fixed;
  display: flex;
  margin-left: 80%;
`;
