import React from 'react'
import PaymentMethodTable from './paymentMethodsTable';
import UserInfoTable from './userInfoTable';


//Edit transaction URL to match Tyler
const AccountSettings = () => {
  return (
    <div>
      <PaymentMethodTable/>
      <br/>
      <UserInfoTable/>
      <br/>
      <button>Delete Account</button>
    </div>  

  )
}

export default AccountSettings