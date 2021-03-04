import React from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Family = (props) => { 
    const user = useSelector((state) => state.user);
    const head = props.head
    var headVar = ""
    if (head == "") {
        headVar = "<Deleted User>"
    }
    else {
        headVar = head
    }


    const leaveFamily = (event) => {
        event.preventDefault();
        if (props.head != (user.firstName + " " + user.lastName) || props.members.length == 0) {
            axios.delete("http://flip1.engr.oregonstate.edu:4221/family/", {data: {props, user}}).then(res => {
                alert(res.data.message);
            });
        } else {
            alert("Sorry. You can not leave a family that you are the head of while there are still other members in it.");
        }
    }

    return (
        <div className="col-8 col-md-6 col-lg-4">
            <div className="card mb-3 text-center">
                <div className="card-header">
                    <h5 className="card-title d-inline">{props.surname}</h5><p className="text-muted fw-light d-inline"> #{props.familyID}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li key={props.head + props.familyID} className="list-group-item"><span className="text-muted fw-light">Head: </span>{headVar}</li>
                    {props.members?.map(member => <li key={props.familyID + member[1] + 0} className="list-group-item">{member[0]}</li>)}
                </ul>
                <div className="card-body">
                    <button type="submit" className="btn btn-outline-danger btn-sm" onClick={leaveFamily}><i className="bi bi-dash-circle"></i> Leave</button>
                </div>
            </div>
        </div>
    );
}

export default Family;