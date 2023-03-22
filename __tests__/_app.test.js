/* eslint-env jest */

import React from "react";
import { render } from "@testing-library/react";

import MyApp from "../pages/_app.js";

test("Should match Snapshot", () => {
  const { asFragment } = render(<MyApp />);

  expect(asFragment()).toMatchSnapshot();
});
