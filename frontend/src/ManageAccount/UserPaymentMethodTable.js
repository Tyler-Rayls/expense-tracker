import React from 'react';
import axios from 'axios';


class UserPaymentMethodTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.getTable = this.getTable.bind(this);
    };

    removePaymentMethod(paymentID) {
        if (this.props.currentUser != null) {
            console.log(this.state.data)
            console.log(this.state.data.expenseID)
            axios.put("http://flip1.engr.oregonstate.edu:4221/removePaymentMethod", { paymentID: paymentID }).then(res => {
                alert(res.data.message);
                this.getTable();
            });
        }
    };

    getTable() {
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
            this.setState({data: response.data})
        })
        .catch(function (error) {
            console.log(error);
        });
    }};

    //Get request creditCardsForPaymentMethodsTable for all cardIDs
    componentDidMount() {
        this.getTable()
    };



    render() {
        const { data } = this.state;
        return (
            <div>
                <table class="table table-sm mt-4 text-center">
                    <thead>
                        <tr>
                            <th>Card Name</th>
                            <th>Gas</th>
                            <th>Grocery</th>
                            <th>Travel</th>
                            <th>Dining</th>
                            <th>Other</th>
                            <th>Annual Fee</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item =>
                            <tr>
                                <td>{item.cardName}</td>
                                <td>{item.gas}%</td>
                                <td>{item.grocery}%</td>
                                <td>{item.travel}%</td>
                                <td>{item.dining}%</td>
                                <td>{item.otherReward}%</td>
                                <td>${item.annualFee}</td>
                                <td><button type="button" className="btn btn-sm btn-danger" onClick={() => this.removePaymentMethod(item.paymentID)}>Remove</button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
        To add a new payment method, please navigate to the Add Credit Cards page.
            </div>
        )
    }
}

export default UserPaymentMethodTable;