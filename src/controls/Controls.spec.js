// Test away!
import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Controls from "./Controls";

describe("<Controls />", () => {
  test("locked button shows opposite state", () => {
    const locked = render(<Controls locked={true} />).getByTestId("lockbtn");
    expect(locked).toHaveTextContent(/unlock/i);
  });
  test("unlocked button shows opposite state", () => {
    const unlocked = render(<Controls locked={false} />).getByTestId("lockbtn");
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
