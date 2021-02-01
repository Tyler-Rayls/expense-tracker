import React from 'react'

const UserInfoTable = () => {
    return (
        <div className="text-center">
            <h4>User Information</h4>
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
            <button type="button" className="btn btn-danger m-1">Delete Account</button>
            <button type="button" className="btn btn-secondary m-1">Edit Name</button>
            <button type="button" className="btn btn-primary m-1">Change Password</button>
        </div>
    )
}

export default UserInfoTable;