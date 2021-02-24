import React from 'react';
import axios from 'axios';

class AddExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    };

    componentDidMount() {
        if (this.props.currentUser != null) {
        //Request cards with matching userID from PaymentMethods
        axios({
            method: 'post',
            url: "http://flip1.engr.oregonstate.edu:4225/paymentMethods",
            headers: {},
            data: {
                userID: this.props.currentUser, //Get unique userID
            }
        }).then(response => {
            var cardIDList = []
            response.data.map(item => 
                {cardIDList.push(item.cardID)});
        //Request cards with matching cardIDs from CreditCards
        axios({
            method: 'post',
            url: "http://flip1.engr.oregonstate.edu:4225/creditCardsForDropdown",
            headers: {},
            data: {
                cardID: cardIDList, //Get unique cardID
            }
        }
        ).then(res => {
            this.setState({data: res.data});
        })
            .catch(function (error) {
                console.log(error);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
    }};

    render() {
    const { data } = this.state;
    return(
        <>
            <div className="col-2">
                <input type="number" className="form-control" placeholder="Amount" step="0.01"></input>
            </div>
            <div className="col-3">
                <input type="text" class="form-control" placeholder="Date (YYYY-MM-DD)"></input>
            </div>
            <div className="col-3">
                <select className="form-select">
                    <option selected>Select a payment method...</option>
                    {data.map(item =>
                            <option value = {item.cardID}>{item.cardName}</option>
                    )}
                </select>
            </div>
            <div className="col-3">
                <select className="form-select">
                    <option selected>Select a category...</option>  
                    <option value="dining">Dining</option>
                    <option value="gas">Gas</option>
                    <option value="grocery">Groceries</option>
                    <option value="travel">Travel</option>
                    <option value="other">Other</option> 
                </select>
            </div>
            <div className="col-1 text-center">
                <button type="button" className="btn btn-outline-primary"><i class="bi bi-plus-circle"></i></button>
            </div>
        </>
    )
}};

export default AddExpenseForm;