// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  test("clicking 'lock' button changes text content", () => {
    const doorButton = render(<Dashboard />).getByTestId("doorbtn");
    expect(doorButton).toHaveTextContent(/close/i);
    fireEvent.click(doorButton);
    expect(doorButton).toHaveTextContent(/open/i);
  });
});
