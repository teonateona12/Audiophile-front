import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Protected from "./components/Protected";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Product from "./components/Product";
import axios from "axios";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState<any>(true);
  const [data, setData] = useState<any>([]);
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
        <Route path="/" element={<Login setisLoggedIn={setisLoggedIn} />} />
      </Routes>
    </div>
  );
}
export default App;
