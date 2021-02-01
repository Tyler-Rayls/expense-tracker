import React from 'react'

const PaymentMethodTable = () => {
    return (
        <div className="col-12 text-center">
            <h2>Payment Methods</h2>
            <table class="table table-sm">
                <thead>
                <tr>
                    <th>Card Name</th>
                    <th>Gas</th>
                    <th>Grocery</th>
                    <th>Travel</th>
                    <th>Dining</th>
                    <th>Other</th>
                    <th>Annual Fee</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Chase Sapphire</td>
                        <td>3%</td>
                        <td>2%</td>
                        <td>1%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>$550</td>
                        <td><button type="button" className="btn btn-success">Edit</button></td>
                        <td><button type="button" className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr>
                        <td>Amazon Prime Rewards Visa</td>
                        <td>2%</td>
                        <td>5%</td>
                        <td>1%</td>
                        <td>0%</td>
                        <td>5%</td>
                        <td>$0</td>
                        <td><button type="button" className="btn btn-success">Edit</button></td>
                        <td><button type="button" className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PaymentMethodTable;