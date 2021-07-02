import { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [titleError, setTitleError] = useState("")
    const [amountError, setAmountError] = useState("")
    const [dateError, setDateError] = useState("")
    const [selectError, setSelectError] = useState("")

    const [enteredTitle, setEnteredTitle] = useState("")
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const [enteredAmount, setEnteredAmount] = useState("")
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    
    const [enteredDate, setEnteredDate] = useState("")
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    console.log(enteredDate)
    const [selectedType, setSelectedType] = useState("")
    const selectTypeHandler = (event) => {
        if(event.target.value !== ""){
            setSelectedType(event.target.value)
        }
    }
    
    const submitHandler = (event) => {
        event.preventDefault()
        if(enteredTitle === "" || enteredAmount === "" || enteredDate === "" || selectedType === ""){
            if(enteredTitle === ""){
                setTitleError("Please specify the title of transaction")
            }else{
                setTitleError("")
            }
            if(enteredAmount === ""){
                setAmountError("Please provide amount")
            }else{
                setAmountError("")
            }
            if(enteredDate === ""){
                setDateError("Please provide date of transaction")
            }else{
                setDateError("")
            }
            if(selectedType === ""){
                setSelectError("Please select type of transaction")
            }else(
                setSelectError("")
            )
        }else{
            const expenseData = {
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate),
                type: selectedType
            }
            props.onSaveExpenseData(expenseData)
            setEnteredTitle("")
            setEnteredAmount("")
            setEnteredDate("")
            props.setEditing(false)
        }
    }
    return(
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title <h6>{titleError}</h6></label>
                    <input type="text" 
                    value={enteredTitle} 
                    onChange={titleChangeHandler} placeholder="Salary, Bonus, Groceries, Meralco Bill"></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount <h6>{amountError}</h6></label>
                    <input type="number" 
                    min="0.01" 
                    step="0.01"
                    value={enteredAmount}
                    onChange={amountChangeHandler} placeholder="$"></input>
                </div>
                <div className="new-expense__control">
                    <label>Date <h6>{dateError}</h6></label>
                    <input type="Date" 
                    min="01-01-2019" 
                    max="12-31-2022"
                    value={enteredDate}
                    onChange={dateChangeHandler}></input>
                </div>
                <div className="new-expense__control select" >
                    <label>Select Transaction Type <h6>{selectError}</h6></label>
                    <select onChange={selectTypeHandler} value={selectedType}>
                        <option value="" > - </option>
                        <option value="income" >Income</option>
                        <option value="expense" >Expense</option>
                    </select>
                </div> 

                <div className="new-expense__actions">
                    <button id="cancel-btn" type="button" onClick={props.onCancel}>Cancel</button>
                    <button type="button" onClick={submitHandler} >Add Transaction</button>
                </div>

            </div>

        </form>
    )
}

export default ExpenseForm