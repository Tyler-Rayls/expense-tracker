import React from 'react'

const PaymentMethodTable = () => {
    return (
        <div>
            <h4>Your payment methods:</h4>
            <table class="table table-sm">
                <thead>
                <tr>
                    <th>Card Name</th>
                    <th>Gas</th>
                    <th>Grocery</th>
                    <th>Travel</th>
                    <th>Dining</th>
                    <th>Other</th>
                    <th>Annual Fee</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Chase Sapphire</td>
                    <td>3%</td>
                    <td>2%</td>
                    <td>1%</td>
                    <td>0%</td>
                    <td>0%</td>
                    <td>$550</td>
                <button>
                Edit card
                </button>
                &nbsp;
                <button>
                Delete card
                </button>
                </tr>
                <tr>
                    <td>Amazon Prime Rewards Visa</td>
                    <td>2%</td>
                    <td>5%</td>
                    <td>1%</td>
                    <td>0%</td>
                    <td>5%</td>
                    <td>$0</td>
                <button>
                Edit card
                </button>
                &nbsp;
                <button>
                Delete card
                </button>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PaymentMethodTable;