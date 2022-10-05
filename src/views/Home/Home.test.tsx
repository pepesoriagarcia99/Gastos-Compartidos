import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

jest.mock("./Home.module.css", () => ({}));
jest.mock("../../components/molecules/Header/Header", () => jest.fn());
jest.mock("../../components/organisms/ExpensesList/ExpensesList", () =>
  jest.fn()
);
jest.mock(
  "../../components/molecules/dialogs/CreateExpense/CreateExpense",
  () => jest.fn()
);
jest.mock("../../components/molecules/dialogs/UserDetail/UserDetail", () =>
  jest.fn()
);
jest.mock("../../components/atoms/Button/Button", () => jest.fn());
jest.mock("../../components/atoms/SearchBar/SearchBar", () => jest.fn());

jest.mock("../../services/Expenses.service", () => ({
  getExpenses: () => ({
    then: () => [],
    catch: () => ({}),
  }),
}));

describe("Home", () => {
  it("renders appropriately", () => {
    render(<Home />);
    expect(screen.getByText("You still have no expenses")).toBeTruthy();
  });
});
