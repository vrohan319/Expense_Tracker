import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditng] = useState(false);

  const startEditingHandler = () => {
    setIsEditng(true);
  };

  const stopEditinghandler = () => {
    setIsEditng(false);
  };

  const onSaveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    stopEditinghandler();
  };

  if (!isEditing)
    return (
      <div className="new-expense">
        <button type="button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      </div>
    );

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={onSaveDataHandler}
        onStop={stopEditinghandler}
      />
    </div>
  );
};

export default NewExpense;
