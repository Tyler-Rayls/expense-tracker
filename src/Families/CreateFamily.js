import React from 'react';

const CreateFamily = () => {
    return (
        <div className="row mt-5 justify-content-center">
            <div className="row">
                <h2 className="text-center">Create Family</h2>
                <hr />
            </div>
            <div className="row justify-content-center">
                <div className="col-12 text-center">
                    <label for="surname" className="input-label d-block">Surname</label>
                    <input type="text" name="surname" className=""></input>
                </div>
                <div className="col-12 text-center">
                    <button type="button" className="btn btn-success m-2">Create</button>
                </div>
            </div>
        </div>
    )
}

export default CreateFamily;