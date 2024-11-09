import { useState } from "react";
import { LOGO_URL } from "../utils/constant.js";
import { Link } from "react-router-dom";
import './header.css';
import useOnlineStatus from "./useOnlineStatus.jsx";

const Header = () => {
  const [btn, setBtn] = useState("Log In");

  

  function handleClick() {
    return btn === "Log In" ? setBtn("LogOut") : setBtn("Log In");
  }

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} style={{ width: "100px", height: "100px" }} />
      </div>
      <h3>Eatzilla</h3>
      <div className="navBar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          
            <button className="login-btn" onClick={handleClick}>
              {" "}
              {btn}{" "}
            </button>
          
        </ul>
      </div>
    </div>
  );
};

export default Header;
