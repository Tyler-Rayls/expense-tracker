import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const user = 'Shane' //Pull user's name from the database

//Edit transaction URL to match Tyler
const AccountSettings = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shane</td>
            <td>Yen</td>
            <td>totallysecurepassword</td>
          </tr>
        </tbody>
      </table>
      <button>
        Edit your Name
      </button>
      <button>
        Change Password
      </button>
    </div>
  )
}

export default AccountSettings