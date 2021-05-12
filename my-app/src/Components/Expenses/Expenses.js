import React,{ useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';


const Expenses=(props)=>{
  const [filteredYear, setFilteredYear] = useState('2019');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  
 


    return(
        <Card className="expenses">
          <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {/* shorthand notation for conditional rendering */}
          {/* {filteredExpenses.length===0 && <p>No result found</p> }

          {filteredExpenses.length>0 &&
            filteredExpenses.map(expense=>{
          return <ExpenseItem
           key={expense.id}
           title={expense.title}
          amount={expense.amount}
          date={expense.date}/>
          });
          } */}

          {/* {expensesContent} */}
          <ExpensesChart expenses={filteredExpenses}/>
          <ExpensesList items={filteredExpenses}/>
          
        
      </Card>
    );


}
export default Expenses;