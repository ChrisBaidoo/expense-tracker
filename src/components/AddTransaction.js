import React, {useState, useContext} from 'react'
import {TransactionContext} from '../context/TransactionContext'


export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(TransactionContext)

  const onSubmit = (e) =>{
    e.preventDefault()
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: Number(amount)
    }
    setText('')
    setAmount('')
    addTransaction(newTransaction)
  }


    return (
        <div>
           <h3>Add new transaction</h3>
          <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmfor="text">Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
         </div>
        <div className="form-control">
          <label htmfor="amount">Amount <br />
            (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
        </div>
    )
}
