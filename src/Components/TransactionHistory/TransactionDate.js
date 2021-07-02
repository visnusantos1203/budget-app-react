import "./TransactionDate.css"

const TransactionDate = (props) => {
    const month = props.date.toLocaleString("en-US", { month: "short" })
    const year = props.date.getFullYear()
    const day = props.date.toLocaleString("en-US", { day: "2-digit" })
    return(
        <div className="transaction-date">
            <div className="transaction-date__month">{month}</div>
            /
            <div className="transaction-date__day">{day}</div>
            /
            <div className="transaction-date__year">{year}</div>
        </div>
    )
}

export default TransactionDate;