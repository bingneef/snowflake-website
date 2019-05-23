import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import CallToAction from "./call-to-action";

describe("CallToAction", () => {
  it("renders without error if not type is provided", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CallToAction />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without error for the different types", () => {
    const div = document.createElement("div");

    const types = ["github", "npm", "playstore", "url", "comingSoon"];
    for (let type of types) {
      ReactDOM.render(<CallToAction type={type} />, div);
      ReactDOM.unmountComponentAtNode(div);
    }
  });
});
