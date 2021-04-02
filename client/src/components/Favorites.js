import React from "react";
import API from "../utils/API";
import { useAuth0 } from "@auth0/auth0-react";

function Favorites() {
  const { user } = useAuth0();

  function getOwners() {
    API.getOwners()
      .then((res) => {
        const owners = res.data.filter((owner) => owner.user_id !== user.email);

        console.log(owners);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      {getOwners()}
      <h1>This is favorites</h1>
    </div>
  );
}

export default Favorites;
