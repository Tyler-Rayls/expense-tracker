import React from 'react';
import axios from 'axios';


class UserPaymentMethodTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    };

    //Get request creditCardsForPaymentMethodsTable for all cardIDs
    componentDidMount() {
        //GET USER ID
        //Request cards with matching userID from PaymentMethods
        axios({
            method: 'post',
            url: "http://flip1.engr.oregonstate.edu:4221/paymentMethods",
            headers: {},
            data: {
                userID: this.props.currentUser, //Get unique userID
            }
        }).then(response => {
            var cardIDList = []
            response.data.map(item => 
                {cardIDList.push(item.cardID)});
            console.log(cardIDList); //Collect all cardIDs
        //Request cards with matching cardIDs from CreditCards
        axios({
            method: 'post',
            url: "http://flip1.engr.oregonstate.edu:4221/creditCardsForPaymentMethodsTable",
            headers: {},
            data: {
                cardID: cardIDList, //Get unique cardID
            }
        }
        ).then(res => {
            console.log(res.data) //DISPLAY THIS AT THE END
            this.setState({data: res.data});
        })
            .catch(function (error) {
                console.log(error);
            });
        })
        .catch(function (error) {
            console.log(error);
        });
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
                                <td><button type="button" className="btn btn-sm btn-danger">Remove</button></td>
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