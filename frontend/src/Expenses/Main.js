import React from 'react';
import AddExpense from './AddExpenseForm';

import { useSelector } from 'react-redux';

const ExpensesMain = () => {
    const user = useSelector(state => state.user)
    return (
        <div className="container">
            <div className="row mt-4">
                <h2 className="text-center">Expenses</h2>
                <div className="row justify-content-center m-2">
                    <AddExpense currentUser = {user.userID}/>
                </div>
            </div>
        </div>
    )
}

export default ExpensesMain;