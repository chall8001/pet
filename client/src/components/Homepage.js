import React from "react";
import logo from "./images/onlypetslogo.png";
import "./Homepage.css";

// import Carousel from "./Carousel";

function Homepage() {
  return (
    <div className="home-container">
      <h1>Welcome</h1>
      <img className="petslogo" alt="OnlyPets Logo" src={logo} />
    </div>
  );
}

export default Homepage;
