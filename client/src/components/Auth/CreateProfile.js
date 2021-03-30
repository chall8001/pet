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

return(

    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
    <ul>
      <li>
    <input type="data" placeholder="Pet Name" name="petName" ref={register({required: true})}/>
    </li>
    <li>
    <input type="data" placeholder="Your Name" name="memberName" ref={register({required: true})}/>
    </li>
    <li>
    <input type="data" placeholder="Location" name="location" ref={register({required: true})}/>
    </li>
    <li>
    <input type="data" placeholder="Breed" name="breedSize" ref={register({required: true})}/>
    </li>
    <li>
    <input type="data" placeholder="Birth-Day" name="birthDay" ref={register({required: true})}/>
    </li>
    <li>
    <input type="data" placeholder="Favorite Activities" name="favoriteActivities" ref={register({required: true})}/>
    </li>
    <li>
    <input type="submit" />
    </li>
    </ul>
    </div>
    </form>
    

)

}

export default CreateUser;
