import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import axios from 'axios';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.validateLogin = this.validateLogin.bind(this);
    };

    // Updates the state value associated with the input when it is changed
    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };

    validateLogin(event) {
        event.preventDefault();
        axios.get("http://flip1.engr.oregonstate.edu:4221/login", { params: this.state }).then(res => {
            if (res.data.successful == true) {
                console.log(res.data);
            } else {
                alert("The email or password that you entered was incorrect.");
            }
        });
    };

    render() {
        return (
            <form onSubmit={this.validateLogin}>
                <div className="row justify-content-center m-1">
                    <div className="col-10 col-md-6 col-xl-4">
                        <input type="text" className="form-control" placeholder="Username" name="email" onChange={this.handleInputChange} value={this.state.email}></input>
                    </div>
                </div>
                <div className="row justify-content-center m-1">
                    <div className="col-10 col-md-6 col-xl-4">
                        <input type="text" className="form-control" placeholder="Password" name="password" onChange={this.handleInputChange} value={this.state.password}></input>
                    </div>
                </div>
                <div className="row justify-content-center mt-2">
                    <div className="text-center">
                        <p className="d-inline">Forgot your password?</p>
                        <Link to="/register"><button type="button" className="btn btn-light m-1">Register</button></Link>
                        <button type="submit" className="btn btn-primary m-1">Login</button>
                    </div>
                </div>
            </form >
        );
    }
}

export default LoginForm;