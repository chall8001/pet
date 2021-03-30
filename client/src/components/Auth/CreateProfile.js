import React from 'react';
import { useForm } from "react-hook-form"

function CreateUser(){
const {register, handleSubmit} = useForm()

const onSubmit = (data) => {
    console.log(data)
}

return(
    <form onSubmit={handleSubmit(onSubmit)}>
    <input type="password" placeholder="name" name="name" ref={register({required: true})}/>
    <input type="data" placeholder="name" name="name" ref={register({required: true})}/>
    <input type="data" placeholder="name" name="name" ref={register({required: true})}/>
    <input type="data" placeholder="name" name="name" ref={register({required: true})}/>
    <input type="submit" />
    </form>
)


}

export default CreateUser;