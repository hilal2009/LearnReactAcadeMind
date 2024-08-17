import "./ExpenseItem.css";

const ExpenseItem = () => {
  const expenseDate = new Date(2024, 8, 18);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 50000;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount} /= TZS</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
