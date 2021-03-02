import React from 'react';
import AdminPaymentMethodsTable from './AdminPaymentMethodsTable'
import AdminUsersTable from './UsersTable'
import AddUserForm from './AddUserForm'
import { useSelector } from 'react-redux';


const AdminMain = () => {
    const user = useSelector(state => state.user)
    return (
        <div className="container">
            <div className="row mt-4">
                <h4 className="text-left">View/Add Users</h4>
                    <AdminUsersTable/>
                    <AddUserForm/>
                <h4 className="text-left">View/Add Payment Methods</h4>
                    <AdminPaymentMethodsTable/>
                To add a new payment method, sign into the desired user and hit the 'Add Payment Method' button next to the desired card from the table.
                
            </div>
        </div>
    )
}

export default AdminMain;