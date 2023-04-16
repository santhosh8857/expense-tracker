import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28); //Mar 28, 2021 - using JS inbuild date component
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.6;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      {/* code will break if we did not use the string function */}
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
