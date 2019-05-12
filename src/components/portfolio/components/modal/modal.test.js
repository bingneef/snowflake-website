import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Modal from "./modal";

describe("Modal", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Modal item={{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
