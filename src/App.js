import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TeleVision",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const getEnteredData = (enteredData) => {
    console.log(expenses);
    setExpenses((prevExpenses) => {
      return [enteredData, ...prevExpenses];
    });
  };

  // JSX code

  return (
    <div>
      <h1>Hello There</h1>
      <NewExpense onSubmitForm={getEnteredData}></NewExpense>
      {/* Assignment 01 */}
      <Expenses expenses={expenses}></Expenses>
    </div>
  );

  // React Equiv

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Hello there [ React Equiv ]"),
  //   React.createElement("h2", {}, "Lets Get Started [ React Equiv ]"),
  //   React.createElement(Expenses, { expenses: expenses })
  // );
}

export default App;
