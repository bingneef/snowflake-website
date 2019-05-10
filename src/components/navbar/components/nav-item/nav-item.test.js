import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import NavItem from "./nav-item";

describe("NavItem", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<NavItem />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<NavItem title="NavItem" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
