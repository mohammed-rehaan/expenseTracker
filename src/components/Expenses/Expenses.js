import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(expense) {
  const expenses = expense.expenses;
  console.log(expenses);
  const [filterYear, setFilterYear] = useState("");

  const yearChange = (data) => {
    setFilterYear(data);
  };

  const filteredExpenses = expenses.filter(
    (ex) => +filterYear === ex.date.getFullYear()
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeYear={yearChange}></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList filteredExpenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
