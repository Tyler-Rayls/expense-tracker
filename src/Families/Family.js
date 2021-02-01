import React from 'react';

const Family = (props) => {
    return (
        <div className="col-8 col-md-6 col-lg-4">
            <div class="card mb-3 text-center">
                <div className="card-header">
                    <h5 className="card-title d-inline">{props.family.surname}</h5><p className="text-muted fw-light d-inline"> #{props.family.id}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{props.family.members[0]}</li>
                    <li class="list-group-item">{props.family.members[1]}</li>
                    <li class="list-group-item">{props.family.members[2]}</li>
                </ul>
                <div class="card-body">
                    <button type="button" className="btn btn-outline-danger btn-sm"><i class="bi bi-dash-circle"></i> Leave</button>
                </div>
            </div>
        </div>
    );
}

export default Family;