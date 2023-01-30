import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Protected from "./components/Protected";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Product from "./components/Product";
import axios from "axios";
import Detail from "./components/Detail";
import { CartType, ProductType, User } from "./components/types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import { getCookie } from "react-use-cookie";
import ThankYou from "./components/ThankYou";
import Verify from "./components/Verify";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState<Boolean>(true);
  const [data, setData] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<CartType[]>([]);
  const [user, setUser] = useState<User>();
  const [number, setNumber] = useState<number>(1);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const token = getCookie("token");
      if (token.length === 0) {
        navigate("/");
      }
      try {
        const response = await axios.get("http://localhost:5000/api/products", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login setisLoggedIn={setisLoggedIn} />} />
        <Route path="/verify" element={<Verify />} />
        <Route
          path="/signup"
          element={<Signup setisLoggedIn={setisLoggedIn} />}
        />
        <Route
          path="/products"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Navbar
                setisLoggedIn={setisLoggedIn}
                user={user}
                cart={cart}
                setCart={setCart}
              />
              <Home setUser={setUser} />
              <Footer />
            </Protected>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Navbar
                setisLoggedIn={setisLoggedIn}
                user={user}
                cart={cart}
                setCart={setCart}
              />
              <Product data={data} />
              <Footer />
            </Protected>
          }
        />
        <Route
          path="/products/:id/:detail"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Navbar
                setisLoggedIn={setisLoggedIn}
                user={user}
                cart={cart}
                setCart={setCart}
              />
              <Detail
                data={data}
                number={number}
                setNumber={setNumber}
                user={user}
              />
              <Footer />
            </Protected>
          }
        />
        <Route
          path="/checkout"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Navbar
                setisLoggedIn={setisLoggedIn}
                user={user}
                cart={cart}
                setCart={setCart}
              />
              <Checkout cart={cart} user={user} />
              <Footer />
            </Protected>
          }
        />

        <Route
          path="/thankyou"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Navbar
                setisLoggedIn={setisLoggedIn}
                user={user}
                cart={cart}
                setCart={setCart}
              />
              <ThankYou />
              <Footer />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
