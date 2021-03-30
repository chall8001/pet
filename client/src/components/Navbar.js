import React from "react";
// import { Menu, Segment } from "semantic-ui-react";
import "../App.css";
import { Link } from "react-router-dom";
import LoginBtn from "./Auth/LoginBtn";
import LogoutBtn from "./Auth/LogoutBtn";

function Navbar() {
  return (
    <nav>
      <div class="ui menu">
        <div class="header item" Link to="/">
          Our Company
        </div>
        <a class="item" Link to="/Favorite">
          About Us
        </a>
        <a class="item" Link to="/userprofile">
          Jobs
        </a>
        <LoginBtn />
        <LogoutBtn />
      </div>
    </nav>
  );
}

export default Navbar;
