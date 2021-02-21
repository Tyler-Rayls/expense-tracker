import React, { Component } from 'react';
import Form from './Form';



class LoginMain extends Component {
    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <h1 className="text-center">Login</h1>
                </div>
                <div className="row justify-content-center input-group mt-1">
                    <Form />
                </div>
            </div>
        );
    }
}

export default LoginMain;