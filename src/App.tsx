import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Protected from "./components/Protected";
import Products from "./components/Products";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState<any>(null);

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
