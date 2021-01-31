import React from 'react'
import PaymentMethodTable from './paymentMethodsTable';
import UserInfoTable from './userInfoTable';


//Edit transaction URL to match Tyler
const AccountSettings = () => {
  return (
    <div><PaymentMethodTable/>
    <UserInfoTable/></div>
    
  )
}

export default AccountSettings