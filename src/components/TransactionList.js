
import React, {useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext'

export const TransactionList = () => {

  const context = useContext(TransactionContext)

  console.log(context)

    return (
        <div>
               <h3>History</h3>
      <ul className="list">
         <li className="minus">
          Cash <span>-£400</span><button className="delete-btn">x</button>
        </li> 
      </ul>
        </div>
    )
}
