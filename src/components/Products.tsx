import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import axios from "axios";
import { useEffect } from "react";
import { LogIn } from "./types";

export default function Products({ setisLoggedIn }: LogIn) {
  return (
    <div>
      <Navbar setisLoggedIn={setisLoggedIn} />
      <Home />
    </div>
  );
}
