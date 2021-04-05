import React from "react";

import logo from "./images/onlypetslogo.png";
import "../App.css";
import { Link } from "react-router-dom";
import LogoutBtn from "./Auth/LogoutBtn";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <img className="logo" alt="OnlyPets Logo" src={logo} />
          <ul className="list">
            <Link to="/">
              <li> Homepage </li>
            </Link>
            <Link to="/Favorite">
              <li> Favorites </li>
            </Link>
            <Link to="/Yourprofile">
              <li> My Profile </li>
            </Link>
            <Link to="/chatroom">
              <li> Chat Room </li>
            </Link>
            <li>
              <LogoutBtn />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
