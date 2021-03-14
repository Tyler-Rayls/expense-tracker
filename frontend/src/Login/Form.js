import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useHistory} from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../Redux/Ducks/user';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = (data) => {
        dispatch(login(data));
        history.push("/expenses");
    }

    const validateLogin = (event) => {
        event.preventDefault();
        axios.get("http://flip1.engr.oregonstate.edu:4221/login", { params: {email: email, password: password} }).then(res => {
            if (res.data.successful == true) {
                handleLogin(res.data);
            } else {
                alert("The email or password that you entered was incorrect.");
            }
        });
    };

    return (
        <form onSubmit={validateLogin}>
            <div className="row justify-content-center m-1">
                <div className="col-10 col-md-6 col-xl-4">
                    <input type="text" className="form-control" placeholder="Username" name="email" onChange={(event) => setEmail(event.target.value)} value={email}></input>
                </div>
            </div>
            <div className="row justify-content-center m-1">
                <div className="col-10 col-md-6 col-xl-4">
                    <input type="text" className="form-control" placeholder="Password" name="password" onChange={(event) => setPassword(event.target.value)} value={password}></input>
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

export default LoginForm;