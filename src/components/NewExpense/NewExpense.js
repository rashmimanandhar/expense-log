import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHander = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const [showForm, setShowForm] = useState(false);
  const showFormHandler = () => {
    setShowForm(true);
  };
  const hideFormHandler = () => {
    setShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm && (
        <ExpenseForm
          onCancel={hideFormHandler}
          onSaveExpenseData={saveExpenseDataHander}
        />
      )}
      {!showForm && <button onClick={showFormHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
