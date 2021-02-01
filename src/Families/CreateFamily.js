import React from 'react';

const CreateFamily = () => {
    return (
        <div className="col-8 col-md-6 col-lg-4">
            <div class="card mb-3">
                <h5 className="card-title card-header text-center">Create a family</h5> 
                <div class="card-body text-center">
                    <label for="surname">Surname</label>
                    <input type="text" name="surname" className=""></input><br />
                    <button type="button" className="btn btn-outline-success mt-3"><i class="bi bi-plus-circle"></i> Add</button>
                </div>
            </div>
        </div>
    )
}

export default CreateFamily;