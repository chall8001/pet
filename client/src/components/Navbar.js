import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import LoginBtn from "./Auth/LoginBtn";
import LogoutBtn from "./Auth/LogoutBtn";
import './Navbar.css'

function Navbar() {
  return (
    <div>
    <LoginBtn />
    <LogoutBtn />
    <nav className="navbar">
       <div className="navbar-container">
       <img src='/images/logo.png'/>
      <ul className="list">
        <Link to="/">
          <li> Homepage </li>
        </Link>
        <Link to="/Favorite">
          <li> Favorites </li>
        </Link>
        <Link to="/userprofile">
          <li> My Profile </li>
        </Link>
        <Link to="/chatroom">
          <li> Chat Room  </li>
        </Link>
      </ul>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
