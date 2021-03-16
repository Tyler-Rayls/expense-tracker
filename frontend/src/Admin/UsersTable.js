// Displays all of the Users

import React from 'react';
import axios from 'axios';


class AdminUsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.getTable = this.getTable.bind(this);
    };

    getTable() {
        axios.get("http://flip1.engr.oregonstate.edu:4221/adminUsers").then(res => {
            this.setState({
                data: res.data,
            }
            );
        })
            .catch(function (error) {
                console.log(error);
            });
    };

    componentDidMount() {
        this.getTable()
    };

    render() {
        const { data } = this.state;
        return (
            <table class="table table-sm mt-4 text-center">
                <thead>
                    <tr>
                        <th>userID</th>
                        <th>email</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>password</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>
                        <tr>
                            <td>{item.userID}</td>
                            <td>{item.email}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.password}</td>

                        </tr>)}
                </tbody>
            </table>

        )
    };
}

export default AdminUsersTable;