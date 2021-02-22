import React from 'react'
import { useSelector } from 'react-redux';

const UserInfoTable = () => {
    const user = useSelector((state) => state.user);

    return (
        <div className="text-center mt-4">
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
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