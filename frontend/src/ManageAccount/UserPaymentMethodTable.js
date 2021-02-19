import React from 'react'

const UserPaymentMethodTable = () => {
    return (
        <div>
            <table class="table table-sm mt-4 text-center">
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
                        <td><button type="button" className="btn btn-sm btn-danger">Remove</button></td>
                    </tr>
                    <tr>
                        <td>Chase Unlimited</td>
                        <td>1.5%</td>
                        <td>3%</td>
                        <td>5%</td>
                        <td>3%</td>
                        <td>1.5%</td>
                        <td>$0</td>
                        <td><button type="button" className="btn btn-sm btn-danger">Remove</button></td>
                    </tr>
                    <tr>
                        <td>Delta SkyMiles Amex</td>
                        <td>0%</td>
                        <td>2%</td>
                        <td>3%</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td>$99</td>
                        <td><button type="button" className="btn btn-sm btn-danger">Remove</button></td>
                    </tr>
                </tbody>
            </table>
        To add a new payment method, please navigate to the Add Credit Cards page.
        </div>
    )
}

export default UserPaymentMethodTable;