import React from 'react';
import axios from 'axios';


class AllPaymentMethodsTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.addCard = this.addCard.bind(this);
    };
    
    componentDidMount() {
    axios.get("http://flip1.engr.oregonstate.edu:4221/creditCards").then(res => {
            this.setState({data: res.data});
        })
        .catch(function (error) {
            console.log(error);
            });
        }

    addCard(cardID) {
        if (this.props.currentUser != null) {
        axios.post("http://flip1.engr.oregonstate.edu:4221/addPaymentMethod", {cardID: cardID, userID: this.props.currentUser}).then(res => {
            alert(res.data.message);
        })
    }
};
    

    render(){
        const {data} = this.state;
    return (
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
                        <td><button type="button" className="btn btn-sm btn-success" onClick={()=> this.addCard(item.cardID)}>Add Payment Method</button></td>
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
                            <td><button type="button" className="btn btn-sm btn-success">Add Payment Method</button></td>
                        </tr>
                    )}
                    </tbody>
                </table>
        )
    };
}

export default AllPaymentMethodsTable;