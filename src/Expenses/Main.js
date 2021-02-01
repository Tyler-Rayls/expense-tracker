import React from 'react';
import AddExpense from './AddExpenseForm';
import CascadingDropdown from './CascadingDropdown';
import ExpensesTable from './ExpensesTable';

const ExpensesMain = () => {
    return (
        <div className="container w-75">
            <div className="row mt-4">
                <h2 className="text-center">Add an Expense</h2>
                <hr />
                <div className="row mt-2">
                    <AddExpense />
                </div>
            </div>
            <div className="row mt-5">
                <h2 className="text-center">Expenses</h2>
                <hr />
                <div className="row justify-content-evenly mb-3">
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