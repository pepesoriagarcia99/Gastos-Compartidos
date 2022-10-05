/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import ExpensesItem from "./ExpensesItem";
import User from "../../../models/User";
import Expense from "../../../models/Expense";

jest.mock("../../../css/modules/Expenses.module.css", () => ({}));

jest.mock("../../atoms/Avatar/Avatar", () => jest.fn());
jest.mock("../../atoms/Button/Button", () => jest.fn());

describe("Expenses Item", () => {
  it("renders appropriately", () => {
    const user = new User("pepe");
    const expense = {
      id: "1",
      creator: {} as User,
      description: "Prueba",
      date: new Date(),
      amount: 1,
    } as Expense;

    render(
      <ExpensesItem user={user} expense={expense} deleteExpense={() => {}} />
    );

    expect(screen.getByText(expense.description)).toBeTruthy();
  });
});
