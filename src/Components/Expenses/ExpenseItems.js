import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItems.css';

function ExpenseItem(props) {
  const deleteExpense = () => {
    console.log("Delete the expense!!!")
  }
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={deleteExpense}>Delete Expense</button>
    </Card>
  );
}

export default ExpenseItem;