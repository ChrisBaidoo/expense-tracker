import React, {createContext, useReducer } from 'react';
import {transactionReducer} from '../reducer/transactionReducer'

//initial state
const initialState = {
    transactions:
    [
           { id: 1, text: 'Flower', amount: -20 },
           { id: 2, text: 'Salary', amount: 300 },
           { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
         ]
};

export const TransactionContext = createContext(initialState)

export const TransactionProvider = (props) => {
    const [state, dispatch] = useReducer(transactionReducer, initialState)

    return(
        <TransactionContext.Provider value={{transactions: state.transactions}}>
            {props.children}
        </TransactionContext.Provider>
    )
}