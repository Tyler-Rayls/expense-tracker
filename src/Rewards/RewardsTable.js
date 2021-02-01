import React from 'react';

const RewardsTable = () => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Payment Method</th>
                    <th>Gas</th>
                    <th>Grocery</th>
                    <th>Travel</th>
                    <th>Dining</th>
                    <th>Other</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Chase Sapphire</td>
                    <td>$4.04</td>
                    <td>$12.99</td>
                    <td>$32.02</td>
                    <td>$13.45</td>
                    <td>$2.03</td>
                    <td>$64.53</td>
                </tr>
                <tr>
                    <td>Chase Unlimited</td>
                    <td>$4.04</td>
                    <td>$12.99</td>
                    <td>$32.02</td>
                    <td>$13.45</td>
                    <td>$2.03</td>
                    <td>$64.53</td>
                </tr>
                <tr>
                    <td>Delta SkyMiles Amex</td>
                    <td>$4.04</td>
                    <td>$12.99</td>
                    <td>$32.02</td>
                    <td>$13.45</td>
                    <td>$2.03</td>
                    <td>$64.53</td>
                </tr>
            </tbody>
        </table>
    )
}

export default RewardsTable;