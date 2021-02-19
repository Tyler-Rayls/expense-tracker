import React, { Component } from 'react';
import axios from 'axios';
import Form from './Form';



class LoginMain extends Component {
    constructor() {
        super();
        this.state = {
            connected: "Click to Connect Backend"
        }
    }

    connectBackend = () => {
        axios.get("http://flip1.engr.oregonstate.edu:4221/express").then(response => {
            console.log(response);
            this.setState({
                connected: response.data
            });
        });
    };

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <h1 className="text-center">Login</h1>
                </div>
                <div className="row justify-content-center input-group mt-1">
                    <Form />
                </div>
                <button className="btn btn-primary" onClick={this.connectBackend}>{this.state.connected}</button>
            </div>
        );
    }
}

export default LoginMain;