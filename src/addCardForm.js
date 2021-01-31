import React from 'react'

class AddCardForm extends React.Component {
    render() {
      return (
          <div>
        <h4>Add New Card:</h4>
        <form>
          <label>
          Card Name:&nbsp;
          <input type="text" name="Card Name" />
          </label>
          <br />
            Gas: &nbsp;
            <input
              name="gas" type="number" />&nbsp;
            Grocery: &nbsp;
            <input
              name="grocery" type="number" />
            <br/>
            Travel: &nbsp;
            <input
              name="travel" type="number" />&nbsp;
            Dining: &nbsp;
            <input name="dining" type="number" />&nbsp;
            Other: &nbsp;
            <input name="other" type="number" />&nbsp;
            <br/>
            Annual Fee: &nbsp;
            <input name="annualFee" type="number" />
        
        </form>
        <button>
            Submit
        </button>
        </div>
      );
    }
  }

  export default AddCardForm;

  //card name
  //Gas
  //Grocery
  //Travel
  //Dining
  //Other
  //Annual Fee