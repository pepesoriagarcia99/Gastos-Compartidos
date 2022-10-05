/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import CreateExpense from "./CreateExpense";
import User from "../../../../models/User";

jest.mock("../../../../css/modules/Form.module.css", () => ({}));

jest.mock("../GenericDialog/GenericDialog", () => jest.fn());
jest.mock("../../../atoms/Button/Button", () => jest.fn());

describe("Create Expenses", () => {
  it("renders appropriately", () => {
    render(
      <CreateExpense
        friends={[] as Array<User>}
        close={() => {}}
        submit={() => {}}
      />
    );
  });
});
