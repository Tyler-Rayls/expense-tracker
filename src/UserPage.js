import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Navbar';

const user = 'Shane' //Pull user's name from the database

//Edit transaction URL to match Tyler

//This whole page can probably just be a navbar. Have transactions be the landing page after you sign in?
const UserHome = () => {
  return (
        <div>
          <Navbar/>
          <h3>Welcome, {user}</h3>
          <ul><Link to="/transactions"> Manage your transactions </Link></ul>  
          <ul><Link to="/payments">Manage your payment methods</Link></ul>
          <ul><Link to="/families">Manage your families</Link></ul>
          <ul><Link to="/account">Manage your account</Link></ul>
        </div>
      )
    }
  
  export default UserHome