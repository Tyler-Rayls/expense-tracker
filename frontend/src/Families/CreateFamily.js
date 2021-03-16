// Allows the user to create a new Family

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const CreateFamily = () => {
    const user = useSelector((state) => state.user);
    const [surname, setSurname] = useState("");

    const createNewFamily = (event) => {
        event.preventDefault();
        if (surname != "") {
            axios.post("http://flip1.engr.oregonstate.edu:4221/family/", {surname, user}).then(res => {
                alert(res.data.message);
            });
        }
    }

    return (
        <div className="col-8 col-md-6 col-lg-4">
            <div class="card mb-3">
                <h5 className="card-title card-header text-center">Create a family</h5> 
                <form onSubmit={createNewFamily} class="card-body text-center">
                    <input type="text" name="surname" className="" placeholder="Surname" onChange={(event) => setSurname(event.target.value)} value={surname}></input><br />
                    <button type="submit" className="btn btn-outline-success mt-3"><i class="bi bi-plus-circle"></i> Add</button>
                </form>
            </div>
        </div>
    )
}

export default CreateFamily;