import React from 'react';
import { useSelector } from 'react-redux';

const ExpenseTable = () => {
    const user = useSelector((state) => state.user);

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Payment Method</th>
                    <th>Category</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    )
}

export default ExpenseTable;

// {data.map(item => 
//     <tr>
//         <td>{item.amount}</td>
//         <td>{item.cardName}</td>
//         <td>{item.date}</td>
//         <td>{item.paymentMethod}</td>
//         <td>{item.category}</td>
//         <td><button type="button" className="btn btn-primary">Edit</button></td>
//         <td><button type="button" className="btn btn-danger">Delete</button></td>
//     </tr>)}