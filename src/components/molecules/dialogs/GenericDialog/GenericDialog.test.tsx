import React from "react";
import { render, screen } from "@testing-library/react";

import GenericDialog from "./GenericDialog";


describe("Generic Dialog", () => {
  it("renders appropriately", () => {
    render(<GenericDialog title="Name" close={() => {}} content={<div></div>} />);
    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });
});
