// Test away!
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./display";

describe("<Display />", () => {
  test("displays closed if 'closed' prop is true", () => {
    const { getByText } = render(<Display closed={true} />);
    getByText(/closed/i);
  });
  test("displays open if 'closed' prop is false", () => {
    const checkOpen = render(<Display closed={false} />).getByText;
    //commented out below doesnt work, renders on top of each other, false positives, etc...
    // const checkClosed = render(<Display closed={true} />).getByText;

    checkOpen(/open/i);
    // checkClosed(/closed/i);
  });
  test("displays locked if 'locked' prop is true", () => {
    const checkLocked = render(<Display locked={true} />).getByText;
    checkLocked(/locked/i);
  });
  test("displays unlocked if 'locked' prop is false", () => {
    const checkUnlocked = render(<Display />).getByText;
    checkUnlocked(/unlocked/i);
  });
  test("when locked, gate uses red-led class", () => {
    const locked = render(<Display locked={true} />).getByTestId("lock");
    expect(locked).toHaveClass("red-led");
  });
  test("when closed, door uses red-led class", () => {
    const closed = render(<Display closed={true} />).getByTestId("door");
    expect(closed).toHaveClass("red-led");
  });
  test("when unlocked, gate uses green-led class", () => {
    const unlocked = render(<Display locked={false} />).getByTestId("lock");
    expect(unlocked).toHaveClass("green-led");
  });
  test("when open, door uses green-led class", () => {
    const opened = render(<Display closed={false} />).getByTestId("door");
    expect(opened).toHaveClass("green-led");
  });
});
