import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Portfolio from "./portfolio";

describe("Portfolio", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Portfolio />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<Portfolio title="Portfolio" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
