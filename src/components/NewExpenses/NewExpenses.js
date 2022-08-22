import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = function (props) {
  const saveExpenseHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id: Math.random(),
    };
    props.onSubmitForm(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={saveExpenseHandler}></ExpenseForm>
    </div>
  );
};

export default NewExpense;
