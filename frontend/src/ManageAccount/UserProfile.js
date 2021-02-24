import React from 'react';
import UserPaymentMethodTable from './UserPaymentMethodTable';
import InfoTable from './userInfoTable';
import RewardsMain from './Reward';
import { useSelector } from 'react-redux';

const UserProfile = () => {
    const user = useSelector(state => state.user)
    return (
        <div className="container mt-5">
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Profile Info</a>
                    <a class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Your Payment Methods</a>
                    <a class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Your Cashback Rewards</a>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><InfoTable /></div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><UserPaymentMethodTable currentUser = {user.userID}/></div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><RewardsMain /></div>
            </div>
        </div>
    )
}

export default UserProfile;