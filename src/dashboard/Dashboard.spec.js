// Test away
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { StateMock } from "@react-mock/state";

import Dashboard from "./Dashboard";

describe("<Dashboard />/Integration", () => {
  //define render function for passing initial state
  const renderDashboard = ({ closed, locked }) =>
    render(
      <StateMock state={{ closed, locked }}>
        <Dashboard />
      </StateMock>
    );
  describe("button text changes appropriately", () => {
    test("lock toggle", () => {
      //setup
      const initState = {
        closed: true,
        locked: false
      };
      //run SUT
      const lockButton = renderDashboard(initState).getByTestId("lockbtn");
      //assert
      expect(lockButton).not.toHaveTextContent(/unlock/i);
      fireEvent.click(lockButton);
      expect(lockButton).toHaveTextContent(/unlock/i);
      fireEvent.click(lockButton);
      expect(lockButton).not.toHaveTextContent(/unlock/i);
    });
    test("door toggle", () => {
      //setup
      const initState = {
        closed: true,
        locked: false
      };
      //run SUT
      const doorButton = renderDashboard(initState).getByTestId("doorbtn");
      //assert
      expect(doorButton).toHaveTextContent(/open/i);
      fireEvent.click(doorButton);
      expect(doorButton).toHaveTextContent(/close/i);
      fireEvent.click(doorButton);
      expect(doorButton).toHaveTextContent(/open/i);
    });
  });
  describe("display text changes from control inputs", () => {
    test("door toggle", () => {
      //setup
      const initState = {
        closed: false,
        locked: false
      };
      //run SUT
      const { getByTestId } = renderDashboard(initState);
      const button = getByTestId("doorbtn");
      const display = getByTestId("door");
      //assert
      expect(display).toHaveTextContent(/open/i);
      fireEvent.click(button);
      expect(display).toHaveTextContent(/closed/i);
      fireEvent.click(button);
      expect(display).toHaveTextContent(/open/i);
    });
    test("lock toggle", () => {
      //setup
      const initState = {
        closed: true,
        locked: false
      };
      //run SUT
      const { getByTestId } = renderDashboard(initState);
      const button = getByTestId("lockbtn");
      const display = getByTestId("lock");
      //assert
      expect(display).toHaveTextContent(/unlocked/i);
      fireEvent.click(button);
      expect(display).not.toHaveTextContent(/unlocked/i);
      fireEvent.click(button);
      expect(display).toHaveTextContent(/unlocked/i);
    });
  });
  describe("limits", () => {
    test("cannot open locked door", () => {
      //setup
      const initState = {
        closed: true,
        locked: true
      };
      //run SUT
      const { getByTestId } = renderDashboard(initState);
      const button = getByTestId("doorbtn");
      const display = getByTestId("door");
      //assert
      fireEvent.click(button);
      expect(button).toHaveTextContent(/open/i);
      expect(display).toHaveTextContent(/closed/i);
    });
    test("cannot lock opened door", () => {
      const initState = {
        closed: false,
        locked: false
      };

      const { getByTestId } = renderDashboard(initState);
      const button = getByTestId("lockbtn");
      const display = getByTestId("lock");

      fireEvent.click(button);
      expect(display).toHaveTextContent(/unlocked/i);
    });
  });
});
