import React from "react";
import logo from "./images/onlypetslogo.png";
import "./Homepage.css";
import LoginBtn from "./Auth/LoginBtn";

// import Carousel from "./Carousel";

function Homepage() {
  return (
    <div className="home-container">
      <h1>Welcome to</h1>
      <img className="petslogo" alt="OnlyPets Logo" src={logo} />
      <LoginBtn />
    </div>
  );
}

export default Homepage;
