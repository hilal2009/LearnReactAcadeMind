import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const expenseTitle = props.title; //"Car Insurance";
  const expenseAmount = props.amount;

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount} /= TZS</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
