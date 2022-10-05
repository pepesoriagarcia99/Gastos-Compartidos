/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import User from "../../../models/User";

jest.mock("./Header.module.css", () => ({}));
jest.mock("../../atoms/Avatar/Avatar", () => jest.fn());

describe("Header", () => {
  it("renders appropriately", () => {
    const user = new User("pepe");
      const appName = "Shared expenses";

    render(<Header user={user} userDetail={() => {}} />);

    expect(screen.getByText(appName)).toBeTruthy();
  });
});
