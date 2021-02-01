import React from 'react'

class AddCardForm extends React.Component {
    render() {
        return (
            <div className="col-8">
                <form>
                    <div className="row">
                        <div className="col-12">
                                <label for="card" className="form-label d-block">Card Name</label>
                                <input type="text" name="card" />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <label for="gas" className="form-label d-block">Gas</label>
                            <input type="number" name="gas" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label for="grocery" className="form-label d-block">Grocery</label>
                            <input type="number" name="grocery" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label for="travel" className="form-label d-block">Travel</label>
                            <input type="number" name="travel" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label for="dining" className="form-label d-block">Dining</label>
                            <input type="number" name="dining" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <label for="other" className="form-label d-block">Other</label>
                            <input type="number" name="other" />
                        </div>
                    </div>
                    <hr />
                    <div className="row justify-content-between mb-3">
                        <div className="col-12 col-md-6">
                            <label for="annualFee" className="form-label d-block">Annual Fee</label>
                            <input type="number" name="annualFee" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <button type="button" className="btn btn-success">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
  }

  export default AddCardForm;

