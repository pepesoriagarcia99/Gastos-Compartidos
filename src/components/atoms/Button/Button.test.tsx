import React from "react";
import { render, screen } from "@testing-library/react";

import Button from "./Button";
import userEvent from "@testing-library/user-event";

jest.mock("./Button.module.css", () => ({ }));

describe("Button", () => {
  it("renders appropriately", () => {
    render(<Button text="Click me" handler={jest.fn()} />);

    expect(screen.getByText("Click me")).toBeTruthy();
  });

  it("button checks disabled", () => {
    const onClick = jest.fn();
    render(<Button disabled={true} text="Click me" handler={onClick} />);

    expect(screen.getByText('Click me').getAttribute("disabled")).toBeDefined();
  });

  it("click on disabled button", () => {
    const onClick = jest.fn();
    render(<Button disabled={true} text="Click me" handler={onClick} />);

    userEvent.click(screen.getByText('Click me'));
    expect(onClick).not.toHaveBeenCalled();
  });
});
