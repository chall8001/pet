import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "semantic-ui-react";
import "./Yourprofile.css";
import Image from "./images/3.jpg";

function Yourprofile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <h1 stlye="color: red">Please Login to see this page!</h1>;
  }

  return (
    isAuthenticated && (
      <div className="card-container">
        <Card
          image={Image}
          header="Pet Name: Lulu"
          meta="Username: Andrew"
          description="Location: Denver CO"
          description="Hobbies: Running, playing, laying in the sun."
          extra="Birthday: Feb 13 2005"
        />
      </div>
    )
  );
}

export default Yourprofile;
