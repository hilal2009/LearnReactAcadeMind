import { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  //let title = props.title;
  //const expenseTitle = props.title; //"Car Insurance";
  const expenseAmount = props.amount;

  const clickHandler = () => {
    setTitle("Updated !");
    console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{expenseAmount} /= TZS</div>
      </div>
      <button onClick={() => clickHandler()}>Change Title</button>
    </div>
  );
};

export default ExpenseItem;
