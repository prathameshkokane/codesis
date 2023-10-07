import React from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>Network</li>
        <li>Product</li>
        <li>Technology</li>
        <li>Our Story</li>
        <li>Knowledge center</li>
      </ul>
      <div className="buttons">
        <button className="btn btn1">Contact Us</button>
        <button className="btn btn2">Log In</button>
      </div>
      <div className="menu">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

export default Navbar;
