import React from 'react'

const UserInfoTable = () => {
    return (
<div>
<text>User information</text>

<table class="table table-sm">
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
&nbsp;
<button>
  Change Password
</button>
</div>

)
}

export default UserInfoTable;