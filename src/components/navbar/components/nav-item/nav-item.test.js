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
    const component = renderer.create(<NavItem />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches the snapshot on inverse", () => {
    const component = renderer.create(<NavItem inverse={true} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("matches the snapshot on active", () => {
    const component = renderer.create(<NavItem active={true} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
