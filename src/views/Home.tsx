import React from "react";

import Expanse from "../interfaces/Expense.interface";
import ExpanseModel from "../models/Expense";

import Header from "../components/atoms/Header";
import ExpensesList from "../components/organisms/ExpensesList";
import CreateExpense from "../components/molecules/dialogs/CreateExpense";

export default function Home() {
  const mock: Array<Expanse> = [
    new ExpanseModel("pepe", "Cena", 15.6, ["Cristina", "Ibrahim"]),
  ];

  const showCreateExpense = () => {};

  return (
    <div>
      <Header></Header>
      <div>
        <ExpensesList expanses={mock}></ExpensesList>
      </div>

      <button onClick={showCreateExpense}>Crear gasto</button>

      <CreateExpense></CreateExpense>
    </div>
  );
}
