import React from 'react';
import AddExpense from './AddExpenseForm';
import CascadingDropdown from './CascadingDropdown';
import ExpensesTable from './ExpensesTable';

const ExpensesMain = () => {
    return (
        <div className="container w-75">
            <div className="row mt-4">
                <h2 className="text-center">Expenses</h2>
                <hr className="mb-0"/>
                <div className="row justify-content-center m-2">
                    <AddExpense />
                </div>
                <hr className="mb-5"/>
                <div className="row mb-1">
                    <CascadingDropdown />
                </div>
                <div className="row mt-2 justify-content-evenly">
                    <ExpensesTable />
                </div>
            </div>
        </div>
    )
}

export default ExpensesMain;