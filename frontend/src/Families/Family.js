import React from 'react';

const Family = (props) => { 
    return (
        <div className="col-8 col-md-6 col-lg-4">
            <div className="card mb-3 text-center">
                <div className="card-header">
                    <h5 className="card-title d-inline">{props.surname}</h5><p className="text-muted fw-light d-inline"> #{props.familyID}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li key={props.head + props.familyID} className="list-group-item"><span className="text-muted fw-light">Head: </span>{props.head}</li>
                    {props.members?.map(member => <li key={props.familyID + member[1] + 0} className="list-group-item">{member[0]}</li>)}
                </ul>
                <div className="card-body">
                    <button type="button" className="btn btn-outline-danger btn-sm"><i className="bi bi-dash-circle"></i> Leave</button>
                </div>
            </div>
        </div>
    );
}

export default Family;