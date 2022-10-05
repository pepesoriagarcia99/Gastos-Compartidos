import React from "react";
import { render, screen } from "@testing-library/react";

import ExpensesList from "./ExpensesList";
import User from "../../../models/User";
import Expense from "../../../models/Expense";

describe("ExpensesList", () => {
  it("renders appropriately", () => {
    const user = new User("pepe");
    const expensesList: Array<Expense> = [];

    render(<ExpensesList user={user} expenses={expensesList} deleteExpense={() => {}} />);

    expect(screen.getByText(/div/i)).toBeInTheDocument();
  });
});
