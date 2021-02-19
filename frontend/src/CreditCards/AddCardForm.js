import React from 'react';

const AddExpenseForm = () => {
    return(
        <>
            <div className="col-2">
                <input type="text" className="form-control" placeholder="Card Name"></input>
            </div>
            <div className="col">
                <input type="number" class="form-control" placeholder="Gas"></input>
            </div>
            <div className="col">
                <input type="number" class="form-control" placeholder="Grocery"></input>
            </div>
            <div className="col">
                <input type="number" class="form-control" placeholder="Travel"></input>
            </div>
            <div className="col">
                <input type="number" class="form-control" placeholder="Dining"></input>
            </div>
            <div className="col">
                <input type="number" class="form-control" placeholder="Other"></input>
            </div>
            <div className="col-2">
                <input type="number" class="form-control" placeholder="Annual Fee"></input>
            </div>
            <div className="col">
                <button type="button" className="btn btn-outline-primary text-right"><i class="bi bi-plus-circle"></i></button>
            </div>
        </>
    )
}

export default AddExpenseForm;