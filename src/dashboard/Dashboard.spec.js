// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  test("clicking 'close' button changes state", () => {
    const doorButton = render(<Dashboard />).getByTestId("doorbtn");
    expect(doorButton).toHaveTextContent(/close/i);
    fireEvent.click(doorButton);
    expect(doorButton).toHaveTextContent(/open/i);
  });
  test("clicking 'close' on control changes display", () => {
    const { getByTestId } = render(<Dashboard />);
    const button = getByTestId("doorbtn");
    const display = getByTestId("door");
    expect(display).toHaveTextContent(/open/i);
    fireEvent.click(button);
    expect(display).toHaveTextContent(/closed/i);
  });
});
