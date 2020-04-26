
import React from 'react'

export const TransactionList = () => {
    return (
        <div>
               <h3>History</h3>
      <ul class="list">
         <li className="minus">
          Cash <span>-£400</span><button className="delete-btn">x</button>
        </li> 
      </ul>
        </div>
    )
}
