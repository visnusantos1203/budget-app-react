import "./DisplayBalance.css"

const DisplayBalance = (props) => {

    let initialBalance = 0
    let initialIncome = 0
    let initialExpense = 0
   
    for(let i = 0; i < props.items.length; i++ ){
        if(props.items[i].type === "income"){
            let amount = parseInt(props.items[i].amount)
            initialIncome += amount    
        }
    }

    for(let i = 0; i < props.items.length; i++ ){
        if(props.items[i].type === "expense"){
            let amount = parseInt(props.items[i].amount)
            initialExpense += amount    
        }
    } 

    initialBalance = initialIncome - initialExpense

    return(
        
        <div className="display-balance-container">
            <div className="display-subcontainer income">
                <p>Total Income</p>
                <div id="income-amount">${initialIncome}</div>
            </div>
            <div className="display-subcontainer expense">
                <p>Total Expenses</p>
                <div id="expenses-amount">${initialExpense}</div>
            </div>
            <div className="display-subcontainer balance">
                <p>Remaining Balance</p>
                <div id="balance-amount">${initialBalance}</div>
            </div>
        </div>
    )
}

export default DisplayBalance