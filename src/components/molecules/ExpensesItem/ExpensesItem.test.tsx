import React from "react";
import { render, screen } from "@testing-library/react";

import ExpensesItem from "./ExpensesItem";
import User from "../../../models/User";
import Expense from "../../../models/Expense";

describe("Expenses Item", () => {
  it("renders appropriately", () => {
    const user = new User("pepe");
    const expense = new Expense(user, "Cena Montellano", 100);

    render(<ExpensesItem user={user} expense={expense} deleteExpense={() => {}} />);
    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });
});
