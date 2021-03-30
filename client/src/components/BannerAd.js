import React from "react";
import petcoLogo from "./images/logo-petco.png";
import dogPic from "./images/dog.png";
import "./BannerAd.css";

function BannerAd() {
  return (
    <div className="banner">
      <row>
        <img className="dog" alt="Dog pic" src={dogPic} />
        <img className="logo" alt="Petco logo" src={petcoLogo} />
        <header>EASY, STRESS-FREE SHOPPING ONLY AT PETCO</header>
        <h5>Get peace of mind when you buy online and pick up in-store.</h5>
      </row>
    </div>
  );
}

export default BannerAd;
