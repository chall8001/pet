import React from "react";
import API from "../../utils/API";


export default class CreateUserForm extends React.Component {
    state = {
        ownerName: "",
        petName: "",
        username: "",
        location: "", 
        petType: "",
        birthDay: "",
        favoriteActivities: ""
    }

    change = e => {
    this.setState({
        [e.target.name]: e.target.value
    })
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        API.saveOwner({
            name: this.state.ownerName,
            petName: this.state.petName,
            location: this.state.location,
            petType: this.state.petType,
            birthDay: new Date(this.state.birthDay),
            hobbies: this.state.favoriteActivities,
          })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    render() {
        return(

            <form>
                <input 
                name="ownerName"
                placeholder='Your name' 
                value={this.state.ownerName} 
                onChange={e => this.change(e)} />
                <br />
                <input 
                name="petName"
                placeholder='Your pets name' 
                value={this.state.petName} 
                onChange={e => this.change(e)} />
                 <br />
                <input 
                name="location"
                placeholder='Your location' 
                value={this.state.location} 
                onChange={e => this.change(e)} />
                 <br />
                <input 
                name="petType"
                placeholder='type of pet' 
                value={this.state.petType} 
                onChange={e => this.change(e)}/>
                 <br />
                 <input 
                name="birthDay"
                placeholder='your pets birthday' 
                value={this.state.birthDay} 
                onChange={e => this.change(e)} />
                <br />
                <input 
                name="favoriteActivities"
                placeholder='your pets favorite activites' 
                value={this.state.favoriteActivities} 
                onChange={e => this.change(e)} />
                <br />
                 <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>

        )

    }
}