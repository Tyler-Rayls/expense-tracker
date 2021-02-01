import React from 'react'
import PaymentMethodTable from './paymentMethodsTable';
import UserInfoTable from './userInfoTable';
import AddCardForm from './addCardForm'


//Edit transaction URL to match Tyler
const AccountSettings = () => {
    return (
        <div className="container justify-content-center mt-3">
            <div className="row justify-content-center">
                <PaymentMethodTable />
            </div>
            <div className="row justify-content-center mt-2">
                <AddCardForm />
            </div>
            <div className="row mt-5">
                <UserInfoTable />
            </div>
        </div>  
    )
}

export default AccountSettings