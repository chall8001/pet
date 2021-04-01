import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "semantic-ui-react";
import "./Yourprofile.css";
import Image from "./images/3.jpg";
import API from "../utils/API";

function Yourprofile() {
  const [owner, setOwner] = useState({});
  const { user, isAuthenticated, isLoading } = useAuth0();

  console.log(user);
  useEffect(() => {
    loadOwnerProfile();
  }, []);

  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("-");
  }

  function loadOwnerProfile() {
    API.getOwner(user.email)
      .then((res) => {
        console.log(res);
        setOwner(res.data);
      })
      .then(console.log(owner))
      .catch((err) => console.log(err));
  }

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
          header={`Pet Name: ${owner.petName}`}
          meta={`Username: ${owner.name}`}
          description={`Location: ${owner.location}`}
          description={`Hobbies: ${owner.hobbies}`}
          extra={`Birthday: ${formatDate(owner.birthDay)}`}
        />
      </div>
    )
  );
}

export default Yourprofile;
