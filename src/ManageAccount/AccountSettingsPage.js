import React from 'react'
<<<<<<< HEAD
// import AddCardForm from './addCardForm';
=======
>>>>>>> origin/master
import PaymentMethodTable from './paymentMethodsTable';
import UserInfoTable from './userInfoTable';


//Edit transaction URL to match Tyler
const AccountSettings = () => {
  return (
    <div className="container">
      <PaymentMethodTable/>
      <br/>
      <UserInfoTable/>
      <br/>
      <button>Delete Account</button>
    </div>  

  )
}

export default AccountSettings