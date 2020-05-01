
import React, {useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext'

export const TransactionList = () => {

  const {transactions} = useContext(TransactionContext)



    return (

        <div>
               <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction)=>(
               
        ))}
         </ul>  
        </div>
    )
}
