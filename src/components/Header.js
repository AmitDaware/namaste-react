import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
  // console.log(loggedInUser);
  const cartItems = useSelector((store)=>store.cart.items);
  // console.log(cartItems);
  return (
    <div className="flex justify-between bg-gray-600 shadow-lg">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4 hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:text-blue-500">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-4 hover:text-blue-500">
            <Link to="/ContactUs">Contact</Link>
          </li>
          <li className="px-4 hover:text-blue-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 hover:text-blue-500 text-red-500 "><Link to= "/cart">🛒{cartItems.length}</Link></li>
          <button
            className="px-4  bg-blue-100 rounded-lg hover:bg-blue-500"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
