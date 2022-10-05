import React from "react";
import { render, screen } from "@testing-library/react";
import User from "../../../../models/User";
import Expense from "../../../../models/Expense";
import UserDetail from "./UserDetail";


describe("User Detail", () => {
  it("renders appropriately", () => {
    const user = new User("pepe");
    const expense = new Expense(user, "Cena Montellano", 100);

    render(<UserDetail user={user} expenses={[expense]} close={() => {}} />);
    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });
});
