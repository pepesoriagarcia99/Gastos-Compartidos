import React from "react";
import { render, screen } from "@testing-library/react";
import CreateExpense from "./CreateExpense";
import User from "../../../../models/User";


describe("Generic Dialog", () => {
  it("renders appropriately", () => {
    render(<CreateExpense friends={[] as Array<User>} close={() => {}} submit={() => {}}/>);
    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });
});
