import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import { Title, Subtitle } from "./typography";

describe("Title", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Title />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("Subtitle", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Subtitle />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
