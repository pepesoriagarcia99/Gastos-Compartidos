/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import User from "../../../../models/User";
import Expense from "../../../../models/Expense";
import UserDetail from "./UserDetail";

jest.mock("./UserDetail.module.css", () => ({}));

jest.mock("../GenericDialog/GenericDialog", () => jest.fn());
jest.mock("../../../atoms/Avatar/Avatar", () => jest.fn());
jest.mock("../../../atoms/Button/Button", () => jest.fn());

describe("User Detail", () => {
  it("renders appropriately", () => {
    const user = new User("pepe");
    const expense = new Expense(user, "Cena Montellano", 100);

    render(<UserDetail user={user} expenses={[expense]} close={() => {}} />);
  });
});
