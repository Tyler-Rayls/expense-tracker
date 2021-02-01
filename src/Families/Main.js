import React from 'react';
import Family from './Family';
import CreateFamily from './CreateFamily';
import FamilySearch from './FamilySearch';

const FamilyMain = () => {
    return (
        <div className="container">
            <h2 className="text-center">Families</h2> 
            <Family />
            <Family />
            <CreateFamily />
            <FamilySearch /> 
        </div>
    );
}

export default FamilyMain;