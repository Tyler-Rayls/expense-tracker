import React from 'react';

const Login = () => {
    return (
        <div className="container mt-3">
            <h1 className="text-center">Login</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username"></input>
                <input type="text" className="form-control" placeholder="Password"></input>
                <button type="button" className="btn btn-light">Login</button>
            </div>
        </div>
    );
}

//Test comment

export default Login;