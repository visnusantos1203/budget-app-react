import "./Transactions.css"
import TransactionDate from "./TransactionDate";
import { Trash } from "react-bootstrap-icons";

const Transactions = (props) => {

    return (
        <div className="transaction-item">
            <TransactionDate date={props.date} />
            <div className="transaction-item__description">
                <h2>{props.title}</h2>
                <div className="transaction-item__price">${props.amount}</div>
                <button id="delete-btn">
                    <Trash color="red" />
                </button>
            </div>
         </div>
    );
};

export default Transactions;