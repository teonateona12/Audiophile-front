import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Protected from "./components/Protected";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Product from "./components/Product";
import axios from "axios";
import Detail from "./components/Detail";
import { useParams } from "react-router-dom";
import { ProductType } from "./components/types";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState<Boolean>(true);
  const [data, setData] = useState<ProductType[]>([]);
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
        <Route
          path="/products"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Products setisLoggedIn={setisLoggedIn} />
            </Protected>
          }
        />
        <Route path="/products/:id" element={<Product data={data} />} />
        <Route
          path="/signup"
          element={<Signup setisLoggedIn={setisLoggedIn} />}
        />
        <Route path="/products/:id/:detail" element={<Detail data={data} />} />
        <Route path="/" element={<Login setisLoggedIn={setisLoggedIn} />} />
      </Routes>
    </div>
  );
}
export default App;
