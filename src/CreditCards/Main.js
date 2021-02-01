import React from 'react';
import AddCardForm from './addCardForm';
import AllPaymentsMethodTable from './AllPaymentMethodsTable';

const CreditCardMain = () => {
    return (
        <div className="container w-75">
            <div className="row mt-4">
                <h2 className="text-center">Select an existing credit card</h2>
                <hr className="mb-0"/>
                <div className="row mt-2 justify-content-evenly">
                    <AllPaymentsMethodTable />
                </div>
                <h5 className="text-center">Don't see your card?</h5>
                <h3 className="text-center">Add a new card:</h3>
                <hr className="mb-0"/>
                <div className="row justify-content-center m-2">
                    <AddCardForm />
                </div>

        </div>
    </div>
    )
}

export default CreditCardMain;