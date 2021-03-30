import React from "react";
// import { Menu, Segment } from "semantic-ui-react";
import "../App.css";
import { Link } from "react-router-dom";
import LoginBtn from "./Auth/LoginBtn";
import LogoutBtn from "./Auth/LogoutBtn";

function Navbar() {
  return (
    <nav>
      <ul>
        <LoginBtn />
        <LogoutBtn />

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
    </nav>
  );
}

export default Navbar;
