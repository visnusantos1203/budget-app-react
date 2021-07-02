import { useState } from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
    const [isEditing, setEditing] = useState(false)
    const startEditingHandler = () => {
        setEditing(true)
    }
    const stopEditingHandler = () => {
        setEditing(false)
    }
    const saveExpenseDataHandler = (exnteredExpenseData) => {
        const expenseData = {
            ...exnteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add Transaction</button>}
            {isEditing && <ExpenseForm setEditing={setEditing} onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
        </div>
    )
}

export default NewExpense