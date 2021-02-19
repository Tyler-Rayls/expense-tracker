import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const LoginForm = () => {
    return (
        <>
            <div className="row justify-content-center m-1">
                <div className="col-10 col-md-6 col-xl-4">
                    <input type="text" className="form-control" placeholder="Username"></input>
                </div>
            </div>
            <div className="row justify-content-center m-1">
                <div className="col-10 col-md-6 col-xl-4">
                    <input type="text" className="form-control" placeholder="Password"></input>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="text-center">
                    <p className="d-inline">Forgot your password?</p>
                    <Link to="/register"><button type="button" className="btn btn-light m-1">Register</button></Link>
                    <button type="button" className="btn btn-primary m-1">Login</button>
                </div>
            </div>
        </>
    );
}

export default LoginForm;