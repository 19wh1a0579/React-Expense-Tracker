import ExpenseDetails  from './ExpenseDetails.js';
import ExpenseDate from './ExpenseDate.js'

import './ExpenseItems.css'
function ExpenseItems(props){

    return(
        <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        {/* <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">{props.amount}</div>
            <div>{props.location}</div>
        </div> */}
        <ExpenseDetails title={props.title} amount={props.amount} location={props.location}/>
        </div>
    )
}
export default ExpenseItems;