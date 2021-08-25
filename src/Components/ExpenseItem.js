import ExpenseDate from './ExpenseDate';
import Card from './Card';

import './ExpenseItem.css';
const ExpenseItem = (props) => {
    return(
        <Card className = "expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <div className ="expenseitem__name"><h2>{props.name}</h2></div>
                <div className ="expense-item__price"> INR {props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem;