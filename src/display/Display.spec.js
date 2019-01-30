// Test away!
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";

import Display from "./display";

describe("<Display />", () => {
  test("displays closed if closed prop is true", () => {
    const { getByText } = render(<Display closed={true} />);

    getByText(/closed/i);
  });
});
