import React from 'react'

export const Transaction = () => {
    return (
        <li className="minus" key={transaction.id}>
           {transaction.text} <span>-£400</span><button className="delete-btn">x</button>
         </li> 
    )
}
