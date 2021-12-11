import React,{useState} from 'react';
import ChartComponent from './ChartComponent';
import ExpenseItem from "./ExpenseItem";
import './ExpenseItem.css';
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props)
{
    const [filteredYear,changeFilteredYear]=useState('2020');
    const filterChangeHandler=enteredYear=>{
        changeFilteredYear(enteredYear); 
    } 
    const filteredExpenses=props.expenses.filter(expense=>{
        return expense.date.getFullYear().toString()===filteredYear;
    });
    return(
    <div>
    <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
    <ChartComponent expenses={filteredExpenses}/>
    <div className="expenses">
    {filteredExpenses.length===0 && <p>No expenses found</p>}
    {filteredExpenses.length>0 && filteredExpenses.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)};   
    
    </div>
    </div>)
}
export default Expenses;