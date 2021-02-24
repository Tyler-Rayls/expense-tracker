import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Family from './Family';
import CreateFamily from './CreateFamily';
import FamilySearch from './FamilySearch';

var families = {};

const FamilyMain = () => {
    const user = useSelector(state => state.user);
    const [reload, setReload] = useState(0);

    useEffect(() => {
        families = {};
        axios.get("http://flip1.engr.oregonstate.edu:4221/family", { params: {userID: user.userID} }).then(res => {
            for (const row of res.data) {
                if (families[row.familyID] == null) {
                    families[row.familyID] = {};
                    families[row.familyID].head = "";
                    families[row.familyID].members = [];
                    families[row.familyID].surname = row.surname;
                    families[row.familyID].familyID = row.familyID;
                }
                if (row.isHead == 1) {
                    families[row.familyID].head = `${row.firstName} ${row.lastName}`;
                } else {
                    families[row.familyID].members = [...families[row.familyID].members, [`${row.firstName} ${row.lastName}`, row.userID]];
                }
            }
            setReload(reload + 1);
        });
    }, [user, reload]);  

    return (
        <div className="container mt-4">
            <h2 className="text-center">Families</h2>
            <div className="row justify-content-center mt-4">
                {Object.entries(families).map(family => <Family familyID={family[1].familyID} members={family[1].members} surname={family[1].surname} head={family[1].head} />)}
                <CreateFamily />
            </div>
            <hr />
            <FamilySearch /> 
        </div>
    );
}

export default FamilyMain;