import React from "react";
import Navbar from "./Navbar";

export default function Products({ setisLoggedIn }: any) {
  return (
    <div>
      <Navbar setisLoggedIn={setisLoggedIn} />
    </div>
  );
}
