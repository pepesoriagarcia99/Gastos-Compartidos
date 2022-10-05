/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";

import GenericDialog from "./GenericDialog";

jest.mock("./GenericDialog.module.css", () => ({}));
jest.mock("../../../atoms/Button/Button", () => jest.fn());

describe("Generic Dialog", () => {
  it("renders appropriately", () => {
    const title = "Name"
    render(<GenericDialog title={title} close={() => {}} content={<div></div>} />);

    expect(screen.getByText(title)).toBeTruthy();
  });
});
