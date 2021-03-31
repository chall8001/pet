import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import logo from "./images/onlypetslogo.png";
import './Navbar.css'
import Login from "./Auth/LoginBtn"
import Logout from "./Auth/LogoutBtn"


function Navbar() {
  return (
    <div>
    <nav className="navbar">
       <div className="navbar-container">
       <img className="petslogo" src={logo}/>
      <ul className="list">
        <Link to="/" className='nav-links' >
          <li className='nav-item'> Homepage </li>
        </Link>
        <Link to="/Favorite" className='nav-links' >
          <li className='nav-item'> Favorites </li>
        </Link>
        <Link to="/userprofile" className='nav-links' >
          <li className='nav-item'> My Profile </li>
        </Link>
        <Link to="/chatroom" className='nav-links' >
          <li className='nav-item'> Chat Room  </li>
        </Link>
      </ul>
      </div>
    </nav>
    <Login />
    <Logout />

    </div>
  );
}

export default Navbar;
