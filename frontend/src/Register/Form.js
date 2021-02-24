import React, { Component } from 'react';
import axios from 'axios';

class RegisterForm extends Component {
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
        if (this.state.password == this.state.passwordConfirmation) {
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
            <form onSubmit={this.createAccount} className="justify-content-center col-10 col-md-6 col-xl-4 text-center">
                        <input type="text" name="email" className="form-control row m-1" placeholder="Email" onChange={this.handleInputChange} value={this.state.email}></input>
                        <input type="text" name="firstName" className="form-control row m-1" placeholder="First Name" onChange={this.handleInputChange} value={this.state.firstName}></input>
                        <input type="text" name="lastName" className="form-control row m-1" placeholder="Last Name" onChange={this.handleInputChange} value={this.state.lastName}></input>
                        <input type="text" name="password" className="form-control row m-1" placeholder="Password" onChange={this.handleInputChange} value={this.state.password}></input>
                        <input type="text" name="passwordConfirmation" className="form-control row m-1" placeholder="Confirm Password" onChange={this.handleInputChange} value={this.state.passwordConfirmation}></input>
                        <button type="submit" className="btn btn-success m-1">Register</button>
            </form>
    )};
}

export default RegisterForm;