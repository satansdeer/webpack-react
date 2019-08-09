import React from "react";
import { App } from "./App";
import {
  render,
} from "@testing-library/react";

describe("App", () => {
  it("renders correctly", () => {
    const {queryByText} = render(<App/>);
    const someValue = "foo";
    debugger;
    const bar = someValue;
    expect(queryByText("Hello React")).toBeTruthy();
  });
});
