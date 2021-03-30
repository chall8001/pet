import React from "react";
import { useForm } from "react-hook-form";

function CreateUser() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    fetch("/create-profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
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
