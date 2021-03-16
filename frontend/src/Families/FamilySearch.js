// Allows the user to search for Families

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const FamilySearch = () => {
    const user = useSelector((state) => state.user);
    const [surname, setSurname] = useState("");
    const [families, setFamilies] = useState([]);

    const searchFamilies = (event) => {
        event.preventDefault();
        if (surname != "") {
            axios.get("http://flip1.engr.oregonstate.edu:4221/family/search", { params: {surname} }).then(res => {
                setFamilies(res.data.queryResults);
            });
        }
    }

    const joinFamily = (event, familyID) => {
        event.preventDefault();
        axios.post("http://flip1.engr.oregonstate.edu:4221/family/join", {familyID, user}).then(res => {
            alert(res.data.message);
        });
    }
    
    return (
        <div className="row mt-4 justify-content-center">
            <div className="row">
                <h2 className="text-center">Search Existing Families</h2>
            </div>
            <div className="row mt-3">
                <div className="col-12 d-flex text-center justify-content-center align-items-center">
                    <input type="text" name="family" className="" placeholder="Surname" onChange={(event) => setSurname(event.target.value)} value={surname}></input>
                    <button type="submit" className="btn btn-primary m-2" onClick={searchFamilies}>Search</button>
                </div>
            </div>
            <div className="col-6 mb-5 text-center justify-content-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Family ID</th>
                            <th>Surname</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {families.map(family =>
                            <tr>
                                <td>{family.familyID}</td>
                                <td>{family.surname}</td>
                                <td><button key={family.familyID} type="submit" className="btn btn btn-outline-success" onClick={(event, index) => joinFamily(event, family.familyID)}>Join</button></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FamilySearch;
