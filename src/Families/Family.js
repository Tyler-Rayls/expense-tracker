import React from 'react';

const Family = () => {
    return (
        <div className="row mb-4">
            <div className="col-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Family Members</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Shane Yen</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Shane Yen</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Shane Yen</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Total Spending:</td>
                            <td>$3409.53</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className="btn btn-danger">Leave Family</button>
            </div>
        </div>  
    );
}

export default Family;