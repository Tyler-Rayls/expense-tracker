import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Expense Tracker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/expenses" className="nav-link" aria-current="page">Expenses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/creditCards" className="nav-link" aria-current="page">Add Credit Cards</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/family" className="nav-link" aria-current="page">Families</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/accountSettings" className="nav-link" aria-current="page">Manage Account</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link" aria-current="page" style={{color: '#ff1a55'}}>Admin Tools</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    );
}
export default Navbar;