import React from 'react';
import AddExpense from './AddExpenseForm';
import CascadingDropdown from './CascadingDropdown';
import ExpensesTable from './ExpensesTable';
import { useSelector } from 'react-redux';

const ExpensesMain = () => {
    const user = useSelector(state => state.user)
    return (
        <div className="container">
            <div className="row mt-4">
                <h2 className="text-center">Expenses</h2>
                <hr className="mb-0"/>
                <div className="row justify-content-center m-2">
                    <AddExpense currentUser = {user.userID}/>
                </div>
                <hr className="mb-5"/>
                <div className="row mb-1">
                    <CascadingDropdown currentUser = {user.userID}/>
                </div>
                <div className="row mt-2 justify-content-evenly">
                    <ExpensesTable currentUser = {user.userID}/>
                </div>
            </div>
        </div>
    )
}

export default ExpensesMain;