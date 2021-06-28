import React, {useState} from "react";
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from "./Components/NewExpense/NewExpense";
import LoginForm from "./LoginComponents/LoginForm/LoginForm"
import NavBar from "./Components/NavBar/NavBar";

const DUMMY_EXPENSES = [
  {
  title: "Car Insurance",
  amount: "100",
  date: new Date( 2021, 6, 19,)
  },
  {
  title: "House Insurance",
  amount: "100",
  date: new Date( 2019, 7, 19,)
  },
  {
  title: "Phone Insurance",
  amount: "100",
  date: new Date( 2020, 8, 19,)
  },
  {
    title: "Computer Insurance",
    amount: "100",
    date: new Date( 2021, 9, 19,)
  },
  {
    title: "Car Insurance",
    amount: "100",
    date: new Date( 2021, 6, 19,)
    },
    {
    title: "House Insurance",
    amount: "100",
    date: new Date( 2012, 7, 19,)
    },
    {
    title: "Phone Insurance",
    amount: "100",
    date: new Date( 2022, 8, 19,)
    },
    {
      title: "Computer Insurance",
      amount: "100",
      date: new Date( 2021, 9, 19,)
    },
    {
      title: "Car Insurance",
      amount: "100",
      date: new Date( 2021, 6, 19,)
      },
      {
      title: "House Insurance",
      amount: "100",
      date: new Date( 2012, 7, 19,)
      },
      {
      title: "Phone Insurance",
      amount: "100",
      date: new Date( 2022, 8, 19,)
      },
      {
        title: "Computer Insurance",
        amount: "100",
        date: new Date( 2021, 9, 19,)
      },
]


function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  
  return (
    <div className="App">
      <NavBar />
      <Expenses expenses={expenses}/>
      <div className="btn-container">
        <button>Add Income</button>
        <NewExpense onAddExpense={addExpenseHandler}/>
      </div>
      <LoginForm />
    </div>
  );
}

export default App;
