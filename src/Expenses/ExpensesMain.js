import React from 'react';
import AddExpense from './AddExpenseForm';
import ExpenseTable from './ExpensesTable';

const Expenses = () => {
    return (
        <div className="container">
            <h1 className="text-center">Expenses</h1>
            <div className="row">
                <AddExpense />
            </div>
            <div className="row">
                <ExpenseTable />
            </div>
        </div>
    );
}

export default Expenses;