import React from 'react';

const ExpenseTable = () => {
    return(
        <table>
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Payment Method</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>$20.31</td>
                    <td>1/21/2021</td>
                    <td>Chase Sapphire</td>
                    <td>Gas</td>
                </tr>
                <tr>
                    <td>$4.58</td>
                    <td>12/30/2020</td>
                    <td>Chase Unlimited</td>
                    <td>Other</td>
                </tr>
                <tr>
                    <td>$300.00</td>
                    <td>12/20/2020</td>
                    <td>Delta SkyMiles Amex</td>
                    <td>Travel</td>
                </tr>
            </tbody>
        </table>
    )
}

export default ExpenseTable;