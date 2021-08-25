import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";

import Card from "./Card";
import './Expenses.css';
const Expenses = (props) =>{
const [selectedYear, setSelectedYear] = useState('2019');
const filterChangehandler = (selectedYear) => {
  setSelectedYear(selectedYear);
}

return (
    <Card className="expenses">
      <ExpenseFilter selectedYear = {selectedYear} onFilterChange= {filterChangehandler}  />
      {props.items.map( (expense) => (
         <ExpenseItem key={expense.id}  name={expense.name} date={expense.date} amount={expense.amount} />
      ))}
      
    </Card>
 )
}

export default Expenses;