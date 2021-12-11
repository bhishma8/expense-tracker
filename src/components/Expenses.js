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
    {props.expenses.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)};   
    
    </div>
    </div>)
}
export default Expenses;