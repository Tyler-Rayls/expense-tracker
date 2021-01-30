import React from 'react';

const Home = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                <h1 className="text-center">Login</h1>
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username"></input>
                <input type="text" className="form-control" placeholder="Password"></input>
                <button type="button" className="btn btn-light">Login</button>
            </div>
        </div>
    );
}

export default Home;