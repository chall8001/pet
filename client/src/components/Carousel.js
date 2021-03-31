import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import picOne from "./images/1.jpg";
import picTwo from "./images/2.jpg";
import picThree from "./images/3.jpg";
import picFour from "./images/4.jpg";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={picOne} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={picTwo} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={picThree} />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src={picFour} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}

ReactDOM.render(<DemoCarousel />, document.querySelector(".demo-carousel"));

export default Carousel;
