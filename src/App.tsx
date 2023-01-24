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

function App() {
  const [isLoggedIn, setisLoggedIn] = useState<Boolean>(true);
  const [data, setData] = useState<ProductType[]>([]);
  const [cart, setCart] = useState([]);
  const [number, setNumber] = useState<number>(1);
  const { id } = useParams();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(
          "https://audiophile-r04o.onrender.com/api/products"
        );
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
              <Navbar setisLoggedIn={setisLoggedIn} />
              <Home />
              <Footer />
            </Protected>
          }
        />
        <Route
          path="/products/:id"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Navbar setisLoggedIn={setisLoggedIn} />
              <Product data={data} />
              <Footer />
            </Protected>
          }
        />
        <Route
          path="/products/:id/:detail"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Navbar setisLoggedIn={setisLoggedIn} />
              <Detail data={data} number={number} setNumber={setNumber} />
              <Footer />
            </Protected>
          }
        />
        <Route
          path="/checkout"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Navbar setisLoggedIn={setisLoggedIn} />
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
