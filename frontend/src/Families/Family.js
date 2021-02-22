import React from 'react';
import { useSelector } from 'react-redux';

const Family = (props) => {
    const user = useSelector((state) => state.user);
    
    return (
        <div className="col-8 col-md-6 col-lg-4">
            <div className="card mb-3 text-center">
                <div className="card-header">
                    <h5 className="card-title d-inline">{props.family.surname}</h5><p className="text-muted fw-light d-inline"> #{props.family.id}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className="text-muted fw-light">Head: </span>{props.family.members[0]}</li>
                    <li className="list-group-item">{props.family.members[1]}</li>
                    <li className="list-group-item">{props.family.members[2]}</li>
                    <li className="list-group-item">Total Spent: ${props.family.total}</li>
                </ul>
                <div className="card-body">
                    <button type="button" className="btn btn-outline-danger btn-sm"><i className="bi bi-dash-circle"></i> Leave</button>
                </div>
            </div>
        </div>
    );
}

export default Family;