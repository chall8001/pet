import React from "react";
// import { Menu, Segment } from "semantic-ui-react";
import "../App.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li> Homepage </li>
        </Link>
        <Link to="/Favorite">
          <li> Favorites </li>
        </Link>
        <Link to="/userprofile">
          <li> My Profile </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
