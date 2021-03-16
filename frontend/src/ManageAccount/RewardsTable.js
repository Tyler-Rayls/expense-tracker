import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const RewardsTable = () => {
    const user = useSelector(state => state.user);
    const [reload, setReload] = useState(0);

    useEffect(() => {
        axios.get("http://flip1.engr.oregonstate.edu:4221/rewards", { params: {userID: user.userID} }).then(res => {
            console.log(user.userID);
        });
    }, [user, reload]);  

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Payment Method</th>
                    <th>Total Expenses</th>
                    <th>Total Rewards</th>
                    <th>Annual Fee</th>
                    <th>Gain from Expenses</th>
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
