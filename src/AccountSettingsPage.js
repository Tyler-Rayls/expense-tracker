import React from 'react'
import AddCardForm from './addCardForm';
import PaymentMethodTable from './paymentMethodsTable';
import UserInfoTable from './userInfoTable';


//Edit transaction URL to match Tyler
const AccountSettings = () => {
  return (
    <div><PaymentMethodTable/><br />
    <AddCardForm/><br />
    <UserInfoTable/><br />
    <button>Delete Account</button>
    </div>
    
  )
}

export default AccountSettings