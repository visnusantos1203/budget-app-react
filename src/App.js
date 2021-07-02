import React, {useState} from "react";
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from "./Components/NewExpense/NewExpense";
import NavBar from "./Components/NavBar/NavBar";
import fire from "./config/Fire";
import LoginButton from "./LoginComponents/LoginButton";
 
const DUMMY_EXPENSES = [
  {
  title: "Salary",
  amount: "100",
  date: new Date( 2021, 6, 19,),
  type: "income"
  },
  {
  title: "House Insurance",
  amount: "100",
  date: new Date( 2019, 7, 19,),
  type: "expense"
  },
  {
  title: "Bonus",
  amount: "100",
  date: new Date( 2020, 8, 19,),
  type: "income"
  },
  {
    title: "Computer Insurance",
    amount: "100",
    date: new Date( 2021, 9, 19,),
    type: "expense"
  },
  {
    title: "Dividends",
    amount: "100",
    date: new Date( 2021, 6, 19,),
    type: "income"
    },
    {
    title: "House Insurance",
    amount: "100",
    date: new Date( 2012, 7, 19,),
    type: "income"
    },
    {
    title: "Profit",
    amount: "100",
    date: new Date( 2022, 8, 19,),
    type: "expense"
    },
    {
      title: "Computer Insurance",
      amount: "100",
      date: new Date( 2021, 9, 19,),
      type: "income"
    },
    {
      title: "Car Insurance",
      amount: "100",
      date: new Date( 2021, 6, 19,),
      type: "income"
      },
      {
      title: "House Insurance",
      amount: "100",
      date: new Date( 2021, 7, 19,),
      type: "expense"
      },
      {
      title: "Phone Insurance",
      amount: "100",
      date: new Date( 2022, 8, 19,),
      type: "income"
      },
      {
        title: "Computer Insurance",
        amount: "100",
        date: new Date( 2021, 9, 19,),
        type: "income"
      },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <header>
        <LoginButton />
        <NavBar />
      </header>
      <Expenses expenses={expenses}/>
      <div className="btn-container">
        <NewExpense onAddExpense={addExpenseHandler}/>
      </div>
    </div>
  );
}

export default App;
