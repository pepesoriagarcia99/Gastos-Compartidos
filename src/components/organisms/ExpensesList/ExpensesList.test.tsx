/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";

import ExpensesList from "./ExpensesList";
import User from "../../../models/User";
import Expense from "../../../models/Expense";

jest.mock("../../../css/modules/Expenses.module.css", () => ({}));
jest.mock("../../molecules/ExpensesItem/ExpensesItem", () => jest.fn());

describe("ExpensesList", () => {
  it("renders appropriately", () => {
    const user = new User("pepe");

    const expense1 = {
      id: "1",
      creator: {} as User,
      description: "Prueba",
      date: new Date(),
      amount: 1,
    } as Expense;
    const expense2 = {
      id: "2",
      creator: {} as User,
      description: "Prueba 2",
      date: new Date(),
      amount: 1,
    } as Expense;
    const expensesList: Array<Expense> = [expense1, expense2];

    render(
      <ExpensesList
        user={user}
        expenses={expensesList}
        deleteExpense={() => {}}
      />
    );

    expect(screen.getAllByTestId('Expense')).toHaveLength(2)
  });
});
