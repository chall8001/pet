import React from "react";
import { Card } from "semantic-ui-react";
import "./Favorites.css";
import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";
import Image6 from "./images/6.jpg";

function Favorites() {
  return (
    <div>
      <Card.Group itemsPerRow={3}>
        <div className="card-container">
          <Card
            image={Image1}
            header="Pet Name: Ziggy"
            meta="Username: Blair"
            description="Location: Denver CO"
            description="Hobbies: The kitchen. Moderate enthusiasm for fetching a tennis ball."
            extra="Birthday: Dec 24 2019"
          />
        </div>
        <div className="card-container">
          <Card
            image={Image2}
            header="Pet Name: Ali"
            meta="Username: Luke"
            description="Location: Denver CO"
            description="Hobbies: Baskets, newspaper, computers, drinking and knocking over your water glass. "
            extra="Birthday: Mar 24 2018"
          />
        </div>
        <div className="card-container">
          <Card
            image={Image3}
            header="Pet Name: Lulu"
            meta="Username: Andrew"
            description="Location: Denver CO"
            description="Hobbies: Running, playing, laying in the sun."
            extra="Birthday: Feb 13 2005"
          />
        </div>
        <div className="card-container">
          <Card
            image={Image4}
            header="Pet Name: Murphy"
            meta="Username: Lincoln and Charlotte"
            description="Location: Denver CO"
            description="Hobbies: Shredding, barking, jupming like a mountain goat over any obstcle."
            extra="Birthday: Feb 14 2020"
          />
        </div>
        <div className="card-container">
          <Card
            image={Image5}
            header="Pet Name: Loki"
            meta="Username: Lollie"
            description="Location: Denver CO"
            description="Hobbies: Cooking with exotic spices. Hemmingway and long car rides."
            extra="Birthday: Jan 11 2017"
          />
        </div>
        <div className="card-container">
          <Card
            image={Image6}
            header="Pet Name: Tucker"
            meta="Username: Emma"
            description="Location: Denver CO"
            description="Hobbies: Kale. Carrots. Short walks."
            extra="Birthday: 1120 A.D."
          />
        </div>
      </Card.Group>
    </div>
  );
}

export default Favorites;
