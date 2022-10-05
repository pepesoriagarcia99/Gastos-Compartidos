import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import User from "../../../models/User";

describe("Header", () => {
  it("renders appropriately", () => {
    const user = new User("pepe");

    render(<Header user={user} userDetail={() => {}} />);

    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });
});
