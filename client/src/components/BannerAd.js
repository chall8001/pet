import React from "react";
import { motion } from "framer-motion";
import petcoLogo from "./images/logo-petco.png";
import dogPic from "./images/dog.png";
import "./BannerAd.css";
import { Button } from "semantic-ui-react";

function BannerAd() {
  return (
    // <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}></motion.div>
    <div className="ui banner">
      <div className="img">
        {<img className="dog" alt="Dog pic" src={dogPic} />}
      </div>
      <div className="text-right">
        <header>EASY, STRESS-FREE SHOPPING ONLY AT PETCO</header>
        <p>Get peace of mind when you buy online and pick up in-store.</p>
      </div>
      {<img className="logo" alt="Petco logo" src={petcoLogo} />}
      <button class="ui inverted red button">Shop Petco Now</button>
    </div>
  );
}

export default BannerAd;
