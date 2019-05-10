import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Home from "./home";

describe("Home", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<Home title="Home" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
