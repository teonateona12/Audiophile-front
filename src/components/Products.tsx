import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";

export default function Products({ setisLoggedIn }: any) {
  return (
    <div>
      <Navbar setisLoggedIn={setisLoggedIn} />
      <Home />
    </div>
  );
}
