import React from 'react';

const AddExpenseForm = () => {
    return(
        <>
            <div className="col">
                <input type="text" className="form-control" placeholder="Amount"></input>
            </div>
            <div className="col">
                <input type="text" class="form-control" placeholder="Date"></input>
            </div>
            <div className="col">
                <select className="form-select">
                    <option selected>Select a payment method...</option>
                    <option value="1">Chase Sapphire</option>
                    <option value="2">Chase Unlimited</option>
                    <option value="3">Delta SkyMiles Amex</option> 
                </select>
            </div>
            <div className="col">
                <select className="form-select">
                    <option selected>Select a category...</option>  
                    <option value="dining">Dining</option>
                    <option value="gas">Gas</option>
                    <option value="grocery">Groceries</option>
                    <option value="travel">Travel</option>
                    <option value="other">Other</option> 
                </select>
            </div>
            <div className="col">
                <button type="button" className="btn btn-primary">Add</button>
            </div>
        </>
    )
}

export default AddExpenseForm;