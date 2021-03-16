// Displays all CreditCards

import React from 'react';
import axios from 'axios';


class AdminPaymentMethodsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.getTable = this.getTable.bind(this);
    };

    getTable() {
        axios.get("http://flip1.engr.oregonstate.edu:4221/adminPaymentMethods").then(res => {
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
                        <th>paymentID</th>
                        <th>userID</th>
                        <th>cardID</th>

                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>
                        <tr>
                            <td>{item.paymentID}</td>
                            <td>{item.userID}</td>
                            <td>{item.cardID}</td>
                        </tr>)}
                </tbody>
            </table>

        )
    };
}

export default AdminPaymentMethodsTable;