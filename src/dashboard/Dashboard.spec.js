// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { StateMock } from "@react-mock/state";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  test("clicking 'close' button changes state", () => {
    //assumes initial state false/false
    //try @react-mock/state
    //from https://react-testing-examples.com/
    const renderDashboard = ({ closed }) =>
      render(
        <StateMock state={{ closed }}>
          <Dashboard />
        </StateMock>
      );
    const doorButton = renderDashboard({ closed: false }).getByTestId(
      "doorbtn"
    );
    // const doorButton = render(<Dashboard />).getByTestId("doorbtn");
    expect(doorButton).toHaveTextContent(/close/i);
    fireEvent.click(doorButton);
    expect(doorButton).toHaveTextContent(/open/i);
  });
  test("clicking 'close' on control changes display", () => {
    //assumes initial state false/false
    const { getByTestId } = render(<Dashboard />);
    const button = getByTestId("doorbtn");
    const display = getByTestId("door");
    expect(display).toHaveTextContent(/open/i);
    fireEvent.click(button);
    expect(display).toHaveTextContent(/closed/i);
  });
});
