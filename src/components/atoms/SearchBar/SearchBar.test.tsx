import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from "./SearchBar";

jest.mock("./SearchBar.module.css", () => ({}));

jest.mock(
  "../Button/Button",
  () =>
    ({ icon, handler }: { icon: string; handler: Function }) =>
      <button onClick={() => handler()}>{icon}</button>
);

describe("SearchBar", () => {
  it("renders appropriately", () => {
    render(<SearchBar searchAction={jest.fn()} />);

    const input = screen.getByLabelText("search");
    expect(input).toBeTruthy();
  });

  test("It should not allow letters to be inputted", async () => {
    render(<SearchBar searchAction={jest.fn()} />);
    const input = screen.getByLabelText("search");

    fireEvent.change(input, { target: { value: "Good Day" } });
    await waitFor(() => {
      expect(input).toHaveDisplayValue("Good Day");
   });
  });
});
