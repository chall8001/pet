import React from "react";

import { Card, Image, Button } from "semantic-ui-react";

function Yourprofile( image, petName, memberName, location, breedSize, birthday, favorites){



 
  return (
    <div>
      <Card>
        <Image src={image} alt="pet-image" />
        <Card.Content>
          <Card.Header>
            <h1>PetName</h1>
            {petName}
          </Card.Header>
          <Card.Header>
            <h2>MemberName</h2>
            {memberName}
          </Card.Header>
          <Card.Meta>City, State{location}</Card.Meta>
          <Card.Meta>BreedSize{breedSize}</Card.Meta>
          <Card.Meta>Birthday{birthday}</Card.Meta>
          <Card.Meta>FavoriteActivities{favorites}</Card.Meta>
        </Card.Content>
        <Card.Content>
          <Button color="blue">Edit Profile</Button>
        </Card.Content>
      </Card>
    </div>
     );
  }


export default Yourprofile;
