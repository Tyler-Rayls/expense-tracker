import React from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './Login/Main';
import Expenses from './Expenses/Main';
import Family from './Families/Main';
import Register from './Register/Main';
import Index from './IndexOfFeatures';
import AccountSettings from './ManageAccount/UserProfile';
import CreditCardMain from './CreditCards/Main';
import AdminMain from './Admin/Main'

const App = () => {
	return (
		<Router>
			<Navbar />

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
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/features">
					<Index />
				</Route>
				<Route path="/creditCards">
					<CreditCardMain />
				</Route>
				<Route path = "/admin">
					<AdminMain/>
				</Route>
				<Route path="/">
					<Login />
				</Route>
			</Switch>
		</Router>
	);
}
export default App;
