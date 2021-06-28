import "./TransactionList.css"
import Transactions from "./Transactions" 

const TransactionList = (props) => {
    if(props.items.length === 0){
        return <h2 className="expenses-list__fallback">Found No Expenses</h2>
    }
    return(
        <div className="transaction-list-container">
            <ul className="transaction-list">
                {
                    props.items.map((item, index) => (
                        <Transactions 
                            key={index}
                            title={item.title}
                            date={item.date}
                            amount={item.amount}
                        />
                    ))        
                }
            </ul>
        </div>
    )
}

export default TransactionList