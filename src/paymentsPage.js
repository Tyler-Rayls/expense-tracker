import React from 'react'

//Show payment table
//Edit a card
//Add a new card
//Delete a card

const PaymentPage = () => {
  return (
    <div>
      <table>
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
        Edit a card
      </button>
      <button>
        Delete a card
      </button>
    </div>
      )
    }
  
  export default PaymentPage