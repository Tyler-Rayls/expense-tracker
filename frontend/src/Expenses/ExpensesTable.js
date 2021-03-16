import React from 'react';
import axios from 'axios';

class ExpenseTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.getTable = this.getTable.bind(this);
    };

    getTable() {
        if (this.props.currentUser != null) {
            //Request cards with matching userID from PaymentMethods
            axios({
                method: 'post',
                url: "http://flip1.engr.oregonstate.edu:4221/expensesTable",
                headers: {},
                data: {
                    userID: this.props.currentUser, //Get unique userID
                }
            }).then(response => {
                this.setState({ data: response.data })
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    month(monthReq) {
        if (this.props.currentUser != null) {
            //Request cards with matching userID from PaymentMethods
            axios({
                method: 'post',
                url: "http://flip1.engr.oregonstate.edu:4221/filterMonth",
                headers: {},
                data: {
                    userID: this.props.currentUser, //Get unique userID
                    month: monthReq
                }
            }).then(response => {
                this.setState({ data: response.data })
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    cardFilter(card) {
        if (this.props.currentUser != null) {
            //Request cards with matching userID from PaymentMethods
            axios({
                method: 'post',
                url: "http://flip1.engr.oregonstate.edu:4221/filterCard",
                headers: {},
                data: {
                    userID: this.props.currentUser, //Get unique userID
                    cardName: card
                }
            }).then(response => {
                this.setState({ data: response.data })
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    category(catReq) {
        if (this.props.currentUser != null) {
            //Request cards with matching userID from PaymentMethods
            axios({
                method: 'post',
                url: "http://flip1.engr.oregonstate.edu:4221/filterCategory",
                headers: {},
                data: {
                    userID: this.props.currentUser, //Get unique userID
                    category:catReq
                }
            }).then(response => {
                this.setState({ data: response.data })
            })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    removeExpense(expenseID) {
        if (this.props.currentUser != null) {
            axios.put("http://flip1.engr.oregonstate.edu:4221/removeExpense", { expenseID: expenseID }).then(res => {
                alert(res.data.message);
                this.getTable();
            });
        }
    };

    componentDidMount() {
        this.getTable()
    };


    render() {
        const { data } = this.state;
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Payment Method</th>
                        <th>Category</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>
                        <tr>
                            <td>${item.amount}</td>
                            <td>{item.date.slice(0, 10)}</td>
                            <td>{item.cardName}</td>
                            <td>{item.category}</td>
                            {/* <td><button type="button" className="btn btn-primary" onClick={() => this.editExpense(item.cardID)}>Edit</button></td> */}
                            <td><button type="button" className="btn btn-danger" onClick={() => this.removeExpense(item.expenseID)}>Delete</button></td>
                        </tr>)}
                </tbody>
            </table>
        )
    }
}

export default ExpenseTable;

