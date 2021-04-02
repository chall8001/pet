import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useForm } from "react-hook-form";
import API from "../../utils/API";
function CreateUser() {
  const { user } = useAuth0();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    console.log(user.email);
    API.saveOwner({
      user_id: user.email,
      name: data.memberName,
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
      <div>
        <ul>
          <li>
            <input
              type="data"
              placeholder="Pet Name"
              name="petName"
              ref={register({ required: true })}
            />
          </li>
          <li>
            <input
              type="data"
              placeholder="Your Name"
              name="memberName"
              ref={register({ required: true })}
            />
          </li>
          <li>
            <input
              type="data"
              placeholder="Location"
              name="location"
              ref={register({ required: true })}
            />
          </li>
          <li>
            <input
              type="data"
              placeholder="Breed"
              name="petType"
              ref={register({ required: true })}
            />
          </li>
          <li>
            <input
              type="data"
              placeholder="Birth-Day"
              name="birthDay"
              ref={register({ required: true })}
            />
          </li>
          <li>
            <input
              type="data"
              placeholder="Favorite Activities"
              name="favoriteActivities"
              ref={register({ required: true })}
            />
          </li>
          <li>
            <input type="submit" />
          </li>
        </ul>
      </div>
    </form>
  );
}
export default CreateUser;
