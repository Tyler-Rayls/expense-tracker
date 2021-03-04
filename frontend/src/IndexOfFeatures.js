import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const Features = () => {
    return (
        <div className="container mt-5 mb-5">
            <h2>List of features</h2>
            <ul className="list-group">
                <h4>CREATE</h4>
                <li className="list-group-item"><Link to="/register">Register an account</Link></li>
                <li className="list-group-item"><Link to="/expenses">Add an expense</Link></li>
                <li className="list-group-item"><Link to="/family">Create a family</Link></li>
                <li className="list-group-item"><Link to="/creditCards">Add a payment method</Link></li>
                <li className="list-group-item"><Link to="/creditCards">Add a new credit card to the database</Link></li>

                <h4>READ</h4>
                <li className="list-group-item"><Link to="/expenses">View and filter expenses</Link></li>
                <li className="list-group-item"><Link to="/family">View families you're a member of</Link></li>
                <li className="list-group-item"><Link to="/family">Search for a family</Link></li>
                <li className="list-group-item"><Link to="/accountSettings">View your payment methods</Link></li>
                <li className="list-group-item"><Link to="/login">Admin Tools (View Full User Table and Payment Methods Table)</Link></li>

                <h4>UPDATE</h4>
                <li className="list-group-item"><Link to="/accountSettings">Change your user/account information/password</Link></li>

                <h4>DELETE</h4>
                <li className="list-group-item"><Link to="/expenses">Delete expenses (Set userID and cardID to NULL)</Link></li>
                <li className="list-group-item"><Link to="/family">Leave a family</Link></li>
                <li className="list-group-item"><Link to="/accountSettings">Delete your payment methods</Link></li>
                <li className="list-group-item"><Link to="/accountSettings">Delete your account</Link></li>

                <h4>OTHER</h4>
                <li className="list-group-item"><Link to="/login">Login to an account</Link></li>
                <li className="list-group-item"><Link to="/accountSettings">View your cash back rewards</Link></li>   
                
            </ul>
        </div>
    )
}

export default Features;