import React from 'react';
import axios from 'axios';
import AllPaymentsMethodTable from './AllPaymentMethodsTable';


class AddCardForm extends React.Component {
    activeUser = this.props.currentUser
    constructor(props) {
        super(props);
        this.state = {
            cardName: "",
            gas: "",
            grocery: "",
            travel: "",
            dining: "",
            otherReward: "",
            annualFee: ""
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addCard = this.addCard.bind(this);
        this.updateTable = React.createRef();
    };

    handleNameChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.valueAsNumber
        });
    };

    clearInput() {
        this.setState({
            cardName: "",
            gas: "",
            grocery: "",
            travel: "",
            dining: "",
            otherReward: "",
            annualFee: "",
        });
    };

    addCard(event) {
        event.preventDefault();
        axios.post("http://flip1.engr.oregonstate.edu:4221/creditCards", this.state).then(res => {
            alert(res.data.message);
            this.clearInput();
            this.updateTable.current.getTable();
        });
    };


    render() {
        return (
            <>
                <div className="col-2">
                    <input name="cardName" type="text" class="form-control" placeholder="Card Name" onChange={this.handleNameChange} value={this.state.cardName}></input>
                </div>
                <div className="col">
                    <input name="gas" type="number" class="form-control" placeholder="Gas" onChange={this.handleInputChange} value={(this.state.gas)}></input>
                </div>
                <div className="col">
                    <input name="grocery" type="number" class="form-control" placeholder="Grocery" onChange={this.handleInputChange} value={this.state.grocery}></input>
                </div>
                <div className="col">
                    <input name="travel" type="number" class="form-control" placeholder="Travel" onChange={this.handleInputChange} value={this.state.travel}></input>
                </div>
                <div className="col">
                    <input name="dining" type="number" class="form-control" placeholder="Dining" onChange={this.handleInputChange} value={this.state.dining}></input>
                </div>
                <div className="col">
                    <input name="otherReward" type="number" class="form-control" placeholder="Other" onChange={this.handleInputChange} value={this.state.otherReward}></input>
                </div>
                <div className="col-2">
                    <input name="annualFee" type="number" class="form-control" placeholder="Annual Fee" onChange={this.handleInputChange} value={this.state.annualFee} step="0.01"></input>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-outline-primary text-right" onClick={this.addCard}><i class="bi bi-plus-circle"></i></button>
                </div>

                <hr className="mb-2"/>
                <div className="row mt-2 justify-content-evenly">
                    <AllPaymentsMethodTable currentUser = {this.activeUser} ref={this.updateTable}/>
                </div>
            </>
        )
    }
}

export default AddCardForm;