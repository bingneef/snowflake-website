import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import About from "./about";

describe("About", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<About />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<About title="About" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
