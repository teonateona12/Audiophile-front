import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import axios from "axios";
import { useEffect } from "react";

export default function Products({ setisLoggedIn }: any) {
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
      <Navbar setisLoggedIn={setisLoggedIn} />
      <Home items={data} />
    </div>
  );
}
