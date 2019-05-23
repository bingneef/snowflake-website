import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Tabs from "./tabs";

describe("Tabs", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
