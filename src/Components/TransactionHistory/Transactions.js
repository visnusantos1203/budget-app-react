import "./Transactions.css"
import TransactionDate from "./TransactionDate";
import { Trash } from "react-bootstrap-icons";

const Transactions = (props) => {
    const changeColorHandler = () => {
        if(props.type === "income"){
            return <div className="transaction-item__price" id="green">+${props.amount}</div>
        }
        if(props.type === "expense"){
            return <div className="transaction-item__price" id="red">-${props.amount}</div>
        }
    }
    const removeTransactionHandler = () =>{
        
    }
    return (
        <div className="transaction-item" >
            <TransactionDate date={props.date}/>
            <h2>{props.title}</h2>
            {changeColorHandler()}
            <button id="delete-btn"><Trash color="red"/></button>
         </div>
    );
};

export default Transactions;