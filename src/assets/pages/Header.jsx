import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/BeanbotLogo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img className="logo" src={Logo} alt="logo" />
        </a>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="My-Games">My Games</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/contact-us">Contact us</Link>
      </nav>
    </header>
  );
}

export default Header;
