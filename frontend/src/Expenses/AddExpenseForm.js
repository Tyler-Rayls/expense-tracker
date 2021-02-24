import React from 'react';
import axios from 'axios';

class AddExpenseForm extends React.Component {
    activeUser = this.props.currentUser
    constructor(props) {
        super(props);
        this.state = {
            values:{
                userID : this.activeUser,
                amount: "",
                date: "",
                paymentID: "",
                category: ""
            },
            data: []
        };
        this.clearInput = this.clearInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addExpense = this.addExpense.bind(this);}

    componentDidMount() {
        if (this.props.currentUser != null) {
        //Request cards with matching userID from PaymentMethods
        axios({
            method: 'post',
            url: "http://flip1.engr.oregonstate.edu:4221/creditCardsForExpenseAndPaymentMethods",
            headers: {},
            data: {
                userID: this.props.currentUser, //Get unique userID
            }
        }).then(response => {
            var stateCopy = this.state;
            stateCopy.data = response.data
            this.setState(stateCopy)
        })
        .catch(function (error) {
            console.log(error);
        });
    }};

    handleChange(event) {
        var stateCopy = this.state;
        stateCopy.values.[event.target.name] = event.target.value
        this.setState(stateCopy)
        };

    clearInput() {
        var stateCopy = this.state;
        stateCopy.values =  {
            userID: this.activeUser,
            amount: "",
            date: "",
            paymentID: "",
            category: ""
        }
        this.setState(stateCopy)
        }
    

    addExpense(event) {
        event.preventDefault();
        axios.post("http://flip1.engr.oregonstate.edu:4221/addExpense", this.state.values).then(res => {
            alert(res.data.message);
            this.clearInput();
        })
    };

    render() {
    const { data } = this.state;
    return(
        <>
            <div className="col-2">
                <input type="number" name="amount" className="form-control" placeholder="Amount" step="0.01" onChange={this.handleChange} value={this.state.amount}></input>
            </div>
            <div className="col-3">
                <input type="text" name="date" class="form-control" placeholder="Date (YYYY-MM-DD)" onChange={this.handleChange} value={this.state.date}></input>
            </div>
            <div className="col-3">
                <select className="form-select" name="paymentID" onChange={this.handleChange} value={this.state.paymentID}>
                    <option selected>Select a payment method...</option>
                    {data.map(item =>
                            <option value = {item.cardID} >{item.cardName}</option>
                    )}

                </select>
            </div>
            <div className="col-3">
                <select className="form-select" name="category" onChange={this.handleChange} value={this.state.category}>
                    <option selected>Select a category...</option>  
                    <option value="dining">Dining</option>
                    <option value="gas">Gas</option>
                    <option value="grocery">Groceries</option>
                    <option value="travel">Travel</option>
                    <option value="other">Other</option> 
                </select>
            </div>
            <div className="col-1 text-center">
                <button type="button" className="btn btn-outline-primary" onClick={this.addExpense}><i class="bi bi-plus-circle"></i></button>
            </div>
        </>
    )
}};

export default AddExpenseForm;