import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Avatar from "./Avatar";
import User from "../../../models/User";
import { AvatarSize } from "../../../interfaces/Avatar.interface";

jest.mock("./Avatar.module.css", () => ({ detail: "", xs: "" }));

describe("Avatar", () => {
  it("renders appropriately", () => {
    const user = new User("pepe");

    render(<Avatar user={user} size={AvatarSize.xs} />);
    expect(screen.getByAltText(user.name)).toBeTruthy(); 
  });
});
