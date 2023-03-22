/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";

import Index from "../pages/index.js";

test("Should match Snapshot", () => {
  const { asFragment } = render(<Index />);

  expect(asFragment()).toMatchSnapshot();
});
