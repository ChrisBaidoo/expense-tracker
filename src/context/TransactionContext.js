import React, {createContext, useReducer } from 'react';
import {transactionReducer} from '../reducer/transactionReducer'

//initial state
const initialState = {
    transactions:
    [ ]
};

//Create context
export const TransactionContext = createContext(initialState)

//Provider component 
export const TransactionProvider = (props) => {
    const [state, dispatch] = useReducer(transactionReducer, initialState)

    //Actions
    const deleteTransaction = (id) =>{
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    const addTransaction = (transaction) =>{
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return(
        <TransactionContext.Provider value={{transactions: state.transactions, deleteTransaction, addTransaction} }>
            {props.children}
        </TransactionContext.Provider>
    )
}

