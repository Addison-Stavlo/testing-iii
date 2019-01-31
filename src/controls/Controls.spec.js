// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Controls from "./Controls";

describe("<Controls />", () => {
  test("door toggle button should call passed fn", () => {
    //example use of basic mock function
    // google jest-mock
    const mockFn = jest.fn();
    const doorBtn = render(<Controls toggleClosed={mockFn} />).getByTestId(
      "doorbtn"
    );
    fireEvent.click(doorBtn);
    expect(mockFn).toHaveBeenCalledTimes(1);
    // therefore 'toggleClosed' is being called
  });
  test("lock btn disabled when door open", () => {
    const mockFn = jest.fn();
    const lockBtn = render(
      <Controls closed={false} toggleClosed={mockFn} />
    ).getByTestId("lockbtn");
    expect(lockBtn).toBeDisabled();
    fireEvent.click(lockBtn);
    expect(mockFn).not.toHaveBeenCalled();
  });
  test("lock button disabled when door open", () => {
    const lock = render(<Controls closed={false} />).getByTestId("lockbtn");
    expect(lock).toBeDisabled();
  });
  describe("buttons show proper titles", () => {
    test("locked button shows opposite state", () => {
      const locked = render(<Controls locked={true} />).getByTestId("lockbtn");
      expect(locked).toHaveTextContent(/unlock/i);
    });
    test("unlocked button shows opposite state", () => {
      const unlocked = render(<Controls locked={false} />).getByTestId(
        "lockbtn"
      );
      expect(unlocked).not.toHaveTextContent(/unlock/i);
    });
    test("opened button shows opposite state", () => {
      const open = render(<Controls closed={false} />).getByTestId("doorbtn");
      expect(open).toHaveTextContent(/close/i);
    });
    test("closed button shows opposite state", () => {
      const closed = render(<Controls closed={true} />).getByTestId("doorbtn");
      expect(closed).toHaveTextContent(/open/i);
    });
  });
});
