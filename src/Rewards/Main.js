import React from 'react';
import RewardsTable from './RewardsTable';

const RewardsMain = () => {
    return (
        <div className="container w-75">
            <div className="row mt-4">
                <h2 className="text-center">Rewards</h2>
                <hr className="mb-0"/>
            </div>
            <div>
                <RewardsTable />
            </div>
        </div>
    )
}

export default RewardsMain;