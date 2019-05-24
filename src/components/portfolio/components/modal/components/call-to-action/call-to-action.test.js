import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import CallToAction from "./call-to-action";

describe("CallToAction", () => {
  it("renders without error if not type is provided", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CallToAction label="Some label" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without error if wrong type is provided", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CallToAction label="Some label" type="bogus" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders without error for the different types", () => {
    const div = document.createElement("div");

    const types = [
      "github",
      "npm",
      "playstore",
      "appstore",
      "url",
      "comingSoon"
    ];
    for (let type of types) {
      ReactDOM.render(<CallToAction type={type} label="Some label" />, div);
      ReactDOM.unmountComponentAtNode(div);
    }
  });
});
