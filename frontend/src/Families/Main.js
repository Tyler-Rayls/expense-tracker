import React from 'react';
import Family from './Family';
import CreateFamily from './CreateFamily';
import FamilySearch from './FamilySearch';

const family1 = {
    id: "34987",
    surname: "Chipmunk",
    members: ["Shane Yen", "Tyler Rayls", "Elon Musk"],
    total: 2309.97
}
const family2 = {
    id: "23569",
    surname: "Tesla",
    members: ["Shane Yen", "Elon Musk", "Betty White"],
    total: 4506.78
}

const FamilyMain = () => {
    return (
        <div className="container mt-4">
            <h2 className="text-center">Families</h2>
            <div className="row justify-content-center mt-4">
                <Family family={family1}/>
                <Family family={family2}/>
                <CreateFamily />
            </div>
            <hr />
            <FamilySearch /> 
        </div>
    );
}

export default FamilyMain;