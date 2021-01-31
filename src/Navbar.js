import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Login from './Login/Main';
import Expenses from './Expenses/Main';
import Family from './Family';
import AccountSettings from './AccountSettingsPage';

const Navbar = () => {
    return (
        <Router>
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
                            <Link to="/family" className="nav-link" aria-current="page">Families</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/accountSettings" className="nav-link" aria-current="page">Manage Account</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route path="/expenses">
                    <Expenses />
                </Route>
                <Route path="/family">
                    <Family />
                </Route>
                <Route path="/accountSettings">
                   <AccountSettings/>
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}
export default Navbar;