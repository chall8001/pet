import React from "react";
// import { ProfileData } from "../components/Yourprofile";
import { Card, Icon } from "semantic-ui-react";

const extra = (
  <a>
    <Icon name="user" />
    16 Friends
  </a>
);

function profile() {
  return (
    <div>
      <Card
        image="/images/avatar/large/elliot.jpg"
        header="Elliot Baker"
        meta="Friend"
        description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
        extra={extra}
      />
    </div>
  );
}

export default profile;
