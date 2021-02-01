import React from 'react';

const RegisterForm = () => {
    return (
        <>
            <div className="row justify-content-center m-1">
                <div className="col-10 col-md-6 col-xl-4">
                    <input type="text" className="form-control" placeholder="Email"></input>
                </div>
            </div>
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
            <div className="row justify-content-center m-1">
                <div className="col-10 col-md-6 col-xl-4">
                    <input type="text" className="form-control" placeholder="Confirm Password"></input>
                </div>
            </div>
            <div className="row justify-content-center mt-2">
                <div className="text-center">
                    <button type="button" className="btn btn-success m-1">Register</button>
                </div>
            </div>
        </>
    );
}

export default RegisterForm;