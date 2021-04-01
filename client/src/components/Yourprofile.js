import React from "react";
import { Card } from "semantic-ui-react";
import "./Yourprofile.css";
import Image from "./images/3.jpg";

function Yourprofile() {
  return (
    <div className="profile-container">
      <Card
        image={Image}
        header="Pet Name: Lulu"
        meta="Username: Andrew"
        description="Location: Denver CO"
        description="Hobbies: Running, playing, laying in the sun."
        extra="Birthday: Feb 13 2005"
      />
    </div>
  );
}

export default Yourprofile;
