import { useState } from "react"
import "./Expenses.css"
import DisplayBalance from "../DisplayBalance/DisplayBalance"
import TransactionFilter from "../TransactionHistory/TransactionFilter"
import TransactionList from "../TransactionHistory/TransactionList"

const Expenses = (props) => {
    const [filteredYear, setSelectedYear]= useState("all")
    const filterChangedHandler = (selectedValue) => {
        setSelectedYear(selectedValue)
    }

    let filteredExpenses;
    // if "all" is selected, will display all expenses, else display only filtered year
    if(filteredYear === "all"){
        filteredExpenses = props.expenses
    } else{
        filteredExpenses = props.expenses.filter((expenses) => {
            return expenses.date.getFullYear().toString() === filteredYear
        })    
    }


    return (
        <div className="transaction-container">
            <DisplayBalance items={filteredExpenses}/>
            <TransactionFilter onChangeFilter={filterChangedHandler}/>
            <TransactionList items={filteredExpenses} />
        </div>
    )
}

export default Expenses