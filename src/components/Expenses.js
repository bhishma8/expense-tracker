import React,{useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import './ExpenseItem.css';
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props)
{
    const [filteredYear,changeFilteredYear]=useState('2020');
    const filterChangeHandler=enteredYear=>{
        changeFilteredYear(enteredYear); 
    } 
    return(
    <div>
    <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
    <div className="expenses">
        
    <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
   <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
   <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
   <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem>
    </div>
    </div>)
}
export default Expenses;