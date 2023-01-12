import { Link } from "react-router-dom";
const Navbar = ({ setisLoggedIn }: any) => {
  return (
    <nav>
      <button onClick={() => setisLoggedIn(false)}>Log Out</button>
    </nav>
  );
};
export default Navbar;
