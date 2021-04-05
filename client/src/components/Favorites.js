import React, { useState } from "react";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";
import { Card, Button } from "semantic-ui-react";
import "./Favorites.css";
import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";
import Image6 from "./images/6.jpg";
import FavSearch from "./FavSearch";

function Favorites() {
  const { user } = useAuth0();
  const [searchTerm, setSearchTerm] = useState("");

  //grabs all users from the db filtering out the user that is logged in
  function getOwners() {
    API.getOwners()
      .then((res) => {
        const owners = res.data.filter((owner) => owner.user_id !== user.email);

        console.log(owners);
      })
      .catch((err) => console.log(err));
  }

  function handleSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <FavSearch onSearch={handleSearchTerm} searchTerm={searchTerm} />
      <Card.Group itemsPerRow={3}>
        <div className="card-container">
          <Card
            image={Image1}
            header="Pet Name: Ziggy"
            meta="Username: Blair"
            description="Location: Denver CO"
            description="Hobbies: Anything kitchen. Moderate enthusiasm for fetching a tennis ball."
            extra="Birthday: Dec 24 2019"
          />
          <Button
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "5",
            }}
          />
        </div>
        <div className="card-container">
          <Card
            image={Image2}
            header="Pet Name: Ali"
            meta="Username: Luke"
            description="Location: Denver CO"
            description="Hobbies: Baskets, newspaper, computers, drinking out of your glass and then knocking it over."
            extra="Birthday: Mar 24 2018"
          />
          <Button
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "21",
            }}
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
          <Button
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "12",
            }}
          />
        </div>
        <div className="card-container">
          <Card
            image={Image4}
            header="Pet Name: Murphy"
            meta="Username: Lincoln and Charlotte"
            description="Location: Denver CO"
            description="Hobbies: Shredding, barking, jumping like a mountain goat over any obstacle."
            extra="Birthday: Feb 14 2020"
          />
          <Button
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "3",
            }}
          />
        </div>
        <div className="card-container">
          <Card
            image={Image5}
            header="Pet Name: Loki"
            meta="Username: Lollie"
            description="Location: Denver CO"
            description="Hobbies: Cooking with exotic spices. Hemmingway, Darwin, Plato, and Kafka."
            extra="Birthday: Jan 11 2017"
          />
          <Button
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "5",
            }}
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
          <Button
            color="red"
            content="Like"
            icon="heart"
            label={{
              basic: true,
              color: "red",
              pointing: "left",
              content: "7",
            }}
          />
        </div>
      </Card.Group>
    </div>
  );
}

export default Favorites;
