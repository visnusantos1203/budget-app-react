import "./TransactionFilter.css"

const TransactionFilter = (props) => {
    return (
        <div className="transaction-filter">
            <div >
                <form className="transaction-filter__control">
                    <label>Transaction History</label>
                    <select onChange={e => props.onChangeFilter(e.target.value)} value={props.selected}>
                        <option value="all" > - </option>
                        <option value="2022" >2022</option>
                        <option value="2021" >2021</option>
                        <option value="2020" >2020</option>
                        <option value="2019" >2019</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default TransactionFilter