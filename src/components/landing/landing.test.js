import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Landing from "./landing";

describe("Landing", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Landing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<Landing title="Landing" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
