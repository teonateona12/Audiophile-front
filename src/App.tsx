import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Protected from "./components/Protected";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Product from "./components/Product";
import axios from "axios";
import Detail from "./components/Detail";
import { useParams } from "react-router-dom";
import { ProductType } from "./components/types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import { getCookie } from "react-use-cookie";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState<Boolean>(true);
  const [data, setData] = useState<ProductType[]>([]);
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState<any>();
  const [number, setNumber] = useState<number>(1);
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const token = getCookie("token");
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
        <Route
          path="/signup"
          element={<Signup setisLoggedIn={setisLoggedIn} />}
        />
        <Route
          path="/products"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Navbar setisLoggedIn={setisLoggedIn} user={user} />
              <Home setUser={setUser} />
              <Footer />
            </Protected>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Navbar setisLoggedIn={setisLoggedIn} user={user} />
              <Product data={data} />
              <Footer />
            </Protected>
          }
        />
        <Route
          path="/products/:id/:detail"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Navbar setisLoggedIn={setisLoggedIn} user={user} />
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
              <Navbar setisLoggedIn={setisLoggedIn} user={user} />
              <Checkout />
              <Footer />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}
export default App;
