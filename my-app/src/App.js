import Expenses from './Components/Expenses/Expenses';
import './App.css';

import NewExpenses from './Components/NewExpenses/NewExpenses';
import { useState } from 'react';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },

  { id: 'e2', 
  title: 'New TV',
   amount: 799.49, 
   date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },];


  // main App component
const App=()=>{
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
 

    const addExpenseHandler=(expense)=>{
      console.log('[App.js]');
      console.log(expense);

      setExpenses((prevState)=>{
        // item insert in last
        return [...prevState,expense];

        // item insert in first
        // return [...prevState,expense];
      });
    }

  return (
    <div >
     <NewExpenses onAddExpense={addExpenseHandler}/>
     <Expenses items={expenses}/>

    </div>
     
     
    
  );
}

export default App;
