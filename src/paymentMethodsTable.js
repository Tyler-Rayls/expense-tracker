import React from 'react'

const PaymentMethodTable = () => {
    return (
        <div>
            Your payment methods:
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
                </tr>
                </tbody>
            </table>
            <button>
                Add a card
            </button>
            <button>
                Edit a card
            </button>
            &nbsp;
            <button>
                Delete a card
            </button>
        </div>
    )
}

export default PaymentMethodTable;