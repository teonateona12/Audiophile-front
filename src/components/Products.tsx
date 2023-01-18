import Navbar from "./Navbar";
import Home from "./Home";
import { LogIn } from "./types";

export default function Products({ setisLoggedIn }: LogIn) {
  return (
    <div>
      <Home setisLoggedIn={setisLoggedIn} />
    </div>
  );
}
