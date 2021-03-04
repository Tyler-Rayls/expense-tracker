import React from 'react';
import AddCardForm from './AddCardForm';

import { useSelector } from 'react-redux';


const CreditCardMain = () => {
    const user = useSelector(state => state.user)
    return (
        <div className="container">
            <div className="row mt-4">
                <h2 className="text-center">Select a Credit Card</h2>
                <div className="row m-2">
                    <hr className="mb-2" />
                    <h5 className="fw-light text-muted text-right">Don't see your card? Add it.</h5>
                    <AddCardForm currentUser = {user.userID}/>
                </div>
            </div>
        </div>
    )
}

export default CreditCardMain;