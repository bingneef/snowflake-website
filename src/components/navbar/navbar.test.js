import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Navbar from "./navbar";

describe("Navbar", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Navbar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<Navbar />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
