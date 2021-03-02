import React, { Component } from 'react';
import axios from 'axios';

class AddUserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            passwordConfirmation: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createAccount = this.createAccount.bind(this);
    };

    // Updates the state value associated with the input when it is changed
    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    clearInput() {
        this.setState({
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            passwordConfirmation: ""
        });
    };

    createAccount(event) {  
        event.preventDefault();
        // Checks to see if the password and password confirmation are equal
        if (this.state.password) {
            axios.post("http://flip1.engr.oregonstate.edu:4221/register", this.state).then(res => {
                alert(res.data.message);
                this.clearInput();
            });
        } else {
            alert("The passwords you entered do not match.");
        }
    };

    render() {
        return (
            <form onSubmit={this.createAccount} className="form-inline">
                <div class="form-group mb-2">
                        <input type="text" name="email" className="sr-only" placeholder="Email" onChange={this.handleInputChange} value={this.state.email}></input>
                        <input type="text" name="firstName" className="sr-only" placeholder="First Name" onChange={this.handleInputChange} value={this.state.firstName}></input>
                        <input type="text" name="lastName" className="sr-only" placeholder="Last Name" onChange={this.handleInputChange} value={this.state.lastName}></input>
                        <input type="text" name="password" className="sr-only" placeholder="Password" onChange={this.handleInputChange} value={this.state.password}></input>
                        <button type="submit" className="btn btn-primary mb-2">Add User</button>
                    </div>
            </form>
    )};
}

export default AddUserForm;