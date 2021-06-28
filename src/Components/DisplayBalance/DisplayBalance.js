import "./DisplayBalance.css"

const DisplayBalance = (props) => {

    let initialAmount = 0

    for(let i = 0; i < props.items.length; i++ ){
        let amount = parseInt(props.items[i].amount)
        initialAmount += amount
    }

    console.log(initialAmount)
    return(
        
        <div className="display-balance-container">
            <p>Total Expenses/Income/ Remaining Budget</p>
            <div id="balance-amount">${initialAmount}</div>
        </div>
    )
}

export default DisplayBalance