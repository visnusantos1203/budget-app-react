import "./TransactionList.css"
import Transactions from "./Transactions" 

const TransactionList = (props) => {
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }
    return(
        <div className="transaction-list-container">
            <div className="transaction-title">
                <div id="date-title">Date</div>
                <div id="transaction-title">Transaction Title</div>
                <div id="amount-title">Amount</div>
            </div>
            <ul className="transaction-list">
                {
                    props.items.map((item, index) => (
                        <Transactions 
                            key={index}
                            title={item.title}
                            date={item.date}
                            amount={item.amount}
                            type={item.type}
                        />
                    ))        
                }
            </ul>
        </div>
    )
}

export default TransactionList