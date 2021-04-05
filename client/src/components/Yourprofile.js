import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "semantic-ui-react";
import "./Yourprofile.css";
import Image from "./images/3.jpg";
import API from "../utils/API";
import Calendar from 'react-calendar'

function Yourprofile() {
  const [owner, setOwner] = useState({});
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    loadOwnerProfile();
  }, []);

  //this is a helper function to show the date in a way that is pleasing to the user.
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("-");
  }

  //this loads the user info from the backend db
  function loadOwnerProfile() {
    API.getOwner(user?.email)
      .then((res) => {
        setOwner(res.data);
      })
      .catch((err) => console.log(err));
  }

  //function the if the page is loading will display loading
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  //if the user tries to access the profile page without loggin in will display this message.
  if (!isAuthenticated) {
    return <h1 style="color: red">Please Login to see this page!</h1>;
  }

  return (
    isAuthenticated && (
      <>
    
 <div className="flex-grid">
 <div class="col">
 <Card 
          image={Image}
          header={`Pet Name: ${owner?.petName}`}
          meta={`Username: ${owner?.name}`}
          description={`Location: ${owner?.location}`}
          description={`Hobbies: ${owner?.hobbies}`}
          extra={`Birthday: ${formatDate(owner?.birthDay)}`}
        />
      </div>
    
      <div class="col">
        <center><h1 className="title">Your Profile</h1></center>
        <br></br>
        <h3>Here you can view your current profile and check the calendar for events</h3>
        </div>
      <div class="col">
      <Calendar/>
      </div>
      </div>

      </>

    )
  );
}

export default Yourprofile;
