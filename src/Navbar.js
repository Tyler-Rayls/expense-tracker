import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Expenses from './Expenses';
import Family from './Family';
import Login from './Login';

const Navbar = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/expenses" className="nav-link" aria-current="page">Expenses</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/family" className="nav-link" aria-current="page">Family</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link" aria-current="page">Login</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route path="/expenses">
                    <Expenses />
                </Route>
                <Route path="/Family">
                    <Family />
                </Route>
                <Route path="/Login">
                    <Login />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}
export default Navbar;