import React, {useState} from 'react'
import './App.css';
import Expenses from './Components/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const defaultExpenses = [
  {
    id: 1,
    date: new Date(2021, 5, 14),
    name: "Toilet Paper",
    amount: 200
  },
  {
    id: 2,
    date: new Date(2021, 5, 24),
    name: "Toilet Paper",
    amount: 100
  },
  {
    id: 3,
    date: new Date(2021, 6, 2),
    name: "Atta",
    amount: 150
  },
  {
    id: 4,
    date: new Date(2021, 6, 10),
    name: "Tail",
    amount: 150
  },
];


const App = () => {
  const [expenses, setExpenses] = useState(defaultExpenses);
const addExpensehandler = (expense) => {
  setExpenses(prevExpenses => {
    return [expense, ...prevExpenses]
  });
}

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpensehandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
