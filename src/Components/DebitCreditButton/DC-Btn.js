import "./DC-Btn.css"

const DCBtn = (props) => {
    return(
        <div className="btn-container">
            <button type="button" id="btn-1" onClick={props.onCancel}>+</button>
            <button type="submit" id="btn-2">-</button>
        </div>
    )
}

export default DCBtn