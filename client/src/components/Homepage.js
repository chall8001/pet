import React from "react";
import logo from "./images/onlypetslogo.png";
import "./Homepage.css";
import BannerAd from "./BannerAd";
import LoginBtn from "./Auth/LoginBtn";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import picOne from "./images/1.jpg";
import picTwo from "./images/2.jpg";
import picThree from "./images/3.jpg";
import picFour from "./images/4.jpg";
import picFive from "./images/5.jpg";
import picSix from "./images/6.jpg";

// import Carousel from "./Carousel";

function Homepage() {
  return (
    <div>
      <div className="home-container">
        <h1>Welcome to</h1>
        <img className="petslogo" alt="OnlyPets Logo" src={logo} />
        <div className="logbtn">
          <LoginBtn />
        </div>
      </div>
      <div className="carouselpics">
        <Carousel>
          <div>
            <img src={picOne} />
            <p className="legend">Ziggy</p>
          </div>
          <div>
            <img src={picTwo} />
            <p className="legend">Ali</p>
          </div>
          <div>
            <img src={picThree} />
            <p className="legend">Lulu</p>
          </div>
          <div>
            <img src={picFour} />
            <p className="legend">Murphy</p>
          </div>
          <div>
            <img src={picFive} />
            <p className="legend">Loki</p>
          </div>
          <div>
            <img src={picSix} />
            <p className="legend">Tucker</p>
          </div>
        </Carousel>
      </div>

      <BannerAd />
    </div>
  );
}

export default Homepage;
