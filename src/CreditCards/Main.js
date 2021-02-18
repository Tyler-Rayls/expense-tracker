import React from 'react';
import AddCardForm from './AddCardForm';
import AllPaymentsMethodTable from './AllPaymentMethodsTable';

const CreditCardMain = () => {
    return (
        <div className="container">
            <div className="row mt-4">
                <h2 className="text-center">Select a Credit Card</h2>
                <hr className="mb-0" />
                <div className="row m-2">
                    <h5 className="fw-light text-muted text-right">Don't see your card? Add it.</h5>
                    <AddCardForm />
                </div>
                <hr className="mb-2"/>
                <div className="row mt-2 justify-content-evenly">
                    <AllPaymentsMethodTable />
                </div>
            </div>
        </div>
    )
}

export default CreditCardMain;