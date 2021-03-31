import React from "react";

import { useForm } from "react-hook-form";
import API from "../../utils/API";

function CreateUser() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    API.saveOwner({
      name: data.ownerName,
      petName: data.petName,
      location: data.location,
      petType: data.petType,
      birthDay: new Date(data.birthDay),
      hobbies: data.favoriteActivities,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="password"
        placeholder="Pet Name"
        name="petName"
        ref={register({ required: true })}
      />
      <input
        type="data"
        placeholder="Your Name"
        name="ownerName"
        ref={register({ required: true })}
      />
      <input
        type="data"
        placeholder="Location"
        name="location"
        ref={register({ required: true })}
      />
      <input
        type="data"
        placeholder="Pet Type"
        name="petType"
        ref={register({ required: true })}
      />
      <input
        type="data"
        placeholder="Birth-Day"
        name="birthDay"
        ref={register({ required: true })}
      />
      <input
        type="data"
        placeholder="Favorite Activities"
        name="favoriteActivities"
        ref={register({ required: true })}
      />
      <input type="submit" />
    </form>
  );
}

export default CreateUser;
