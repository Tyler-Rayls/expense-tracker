import React from 'react';
import { useSelector } from 'react-redux';

const CreateFamily = () => {
    const user = useSelector((state) => state.user);
    
    return (
        <div className="col-8 col-md-6 col-lg-4">
            <div class="card mb-3">
                <h5 className="card-title card-header text-center">Create a family</h5> 
                <div class="card-body text-center">
                    <input type="text" name="surname" className="" placeholder="Surname"></input><br />
                    <button type="button" className="btn btn-outline-success mt-3"><i class="bi bi-plus-circle"></i> Add</button>
                </div>
            </div>
        </div>
    )
}

export default CreateFamily;