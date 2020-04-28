import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { TransactionProvider } from './context/TransactionContext';

function App() {
  return (
    <div>

      <TransactionProvider>
      <Header/>
      <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
      </div>
      </TransactionProvider>
    </div>
  );
}

export default App;
