import React,{ useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState(' ');
    const [enteredAmount,setEnteredAmount]=useState(' ');
    const [enteredDate,setEnteredDate]=useState(' ');


    // ALTERNATIVE APPROACH IN ONE useState()
    // ALTERNATIVE APPROACH IN ONE useState()
    // const[userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });


    // for Title
    const titleChangeHandler=(event)=>{
        // thisfunction is used when multiple useState() is  used
        setEnteredTitle(event.target.value);
        // 2nd ways
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // });
        // 3rd ways
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredTitle:event.target.value}
        // })
      
     }

    //  for amount
    const amountChangeHandler=(event)=>{
        setEnteredAmount(event.target.value);
        // 2nd ways 
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // });
        // 3rd ways
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredAmount:event.target.value}
        // })


       

       


    }

    // for date
    const dateChangeHandler=(event)=>{
        setEnteredDate(event.target.value);

        // 2nd ways
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value

        // })
        // 3rd ways
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredDate:event.target.value}
        // })


    }

    
         // storing the value of form
         const submitHandler=(event)=>{
            event.preventDefault();

            const expenseData={
                title:enteredTitle,
                amount:enteredAmount,
                date:new Date(enteredDate)
            };
            console.log(expenseData);
            

            // transferring data from child to parent component 
            props.onSaveExpenseData(expenseData);
            setEnteredTitle('');
            setEnteredDate('');
            setEnteredAmount('');
           
        };
    return(
        // 012->handling form submission  
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">

                {/* for Title */}
                <div className="new-expense__control">
                    <label>Title:</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}
                    required/>
                </div>

                {/* for Amount */}

                <div className="new-expense__control">
                    <label>Amount:</label>
                    <input type="number"  value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} required/>
                </div>

                {/* For Date */}

                <div className="new-expense__control">
                    <label>Date:</label>
                    <input type="date" value={enteredDate}  min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} required/>
                </div>
            </div>

            {/* submit button  */}
            <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
            <button type="submit" onClick={props.onCancel}> Cancel</button>
            </div>
           
        </form>
    );

}
export default ExpenseForm;



