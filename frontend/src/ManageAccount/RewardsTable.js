import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const RewardsTable = () => {
    const user = useSelector(state => state.user);
    const [reload, setReload] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://flip1.engr.oregonstate.edu:4221/rewards", { params: {userID: user.userID} }).then(res => {
            setData(res.data);
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
                {data.map(card => 
                    <tr>
                        <td>{card.cardName}</td>
                        <td>${card.totalExpense}</td>
                        <td>${card.totalRewards}</td>
                        <td>${card.annualFee}</td>
                        <td>${card.totalRewards - card.annualFee}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default RewardsTable;
