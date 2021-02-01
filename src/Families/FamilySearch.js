import React from 'react';

const FamilySearch = () => {
    return (
        <div className="row mt-4">
            <div className="row">
                <h2 className="text-center">Search Existing Families</h2>
            </div>
            <div className="row justify-content-center mt-3">
                <div className="col-12 text-center">
                    <input type="text" name="family" className="" placeholder="Surname"></input>
                </div>
                <div className="col-12 text-center">
                    <button type="button" className="btn btn-success m-2">Search</button>
                </div>
            </div>
            <div className="col-12 mb-5">
                <p>Search results:</p>
                <p>The result would be displayed here as a table, along with a join button.</p>
            </div>
        </div>
    )
}

export default FamilySearch;
