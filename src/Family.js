import React from 'react';
import Navbar from './Navbar';

const Family = () => {
    return (
    <div>
      <Navbar />
    <h2>Family 1</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Family Members</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shane Yen</td>
          </tr>
          <tr>
            <td>Shane Yen</td>
          </tr>
          <tr>
            <td>Shane Yen</td>
          </tr>
          <tr>
            <td>Total spending:</td>
            <td>$3409.53</td>
          </tr>
        </tbody>
      </table>
      <button>
        Leave Family
      </button>
      <h2>Family 2</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Family Members</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Shane Yen</td>
          </tr>
          <tr>
            <td>Shane Yen</td>
          </tr>
          <tr>
            <td>Shane Yen</td>
          </tr>
          <tr>
            <td>Total spending:</td>
            <td>$5984.34</td>
          </tr>
        </tbody>
      </table>
      <button>
        Leave Family
      </button>
    </div>
    );
}

export default Family;