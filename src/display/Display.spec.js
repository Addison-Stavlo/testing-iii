// Test away!
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";

import Display from "./display";

describe("<Display />", () => {
  test("displays closed if 'closed' prop is true, open otherwise", () => {
    const { getByText } = render(<Display closed={true} />);
    const checkOpen = render(<Display />).getByText;

    getByText(/closed/i);
    checkOpen(/open/i);
  });

  test("displays locked if 'locked' prop is true, unlocked otherwise", () => {
    const checkLocked = render(<Display locked={true} />).getByText;
    const checkUnlocked = render(<Display />).getByText;

    checkLocked(/locked/i);
    checkUnlocked(/unlocked/i);
  });

  test("when locked or closed use 'red-led' class", () => {
    //one feature/expected behaviour/assumption per test

    const locked = render(<Display locked={true} closed={false} />).getByTestId(
      "lock"
    );
    const closed = render(<Display locked={false} closed={true} />).getByTestId(
      "lock"
    );
    const lockedAndClosed = render(
      <Display locked={true} closed={true} />
    ).getByTestId("lock");

    //as many assertions as needed to prove correctness
    expect(locked).toHaveClass("red-led");
    expect(closed).toHaveClass("red-led");
    expect(lockedAndClosed).toHaveClass("red-led");
  });

  test("when unlocked and open use 'green-led' class", () => {
    const open = render(<Display locked={false} closed={false} />).getByTestId(
      "door"
    );

    expect(open).toHaveClass("green-led");
  });
});
