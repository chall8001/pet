import React from "react";
import { motion } from "framer-motion";
import petcoLogo from "./images/logo-petco.png";
import dogPic from "./images/dog.png";
import "./BannerAd.css";

function BannerAd() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="banner">
        <row>
          {/* <img className="dog" alt="Dog pic" src={dogPic} />
          <img className="logo" alt="Petco logo" src={petcoLogo} /> */}
          <header>EASY, STRESS-FREE SHOPPING ONLY AT PETCO</header>
          <span>
            Get peace of mind when you buy online and pick up in-store.
          </span>
        </row>
      </div>
    </motion.div>
  );
}

export default BannerAd;
