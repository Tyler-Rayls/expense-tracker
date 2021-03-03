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
                console.log(res.data.queryResults)
                setFamilies(res.data.queryResults);
            });
        }
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
                                <td><button type="submit" className="btn btn-outline-success mt-3">Join</button></td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FamilySearch;
