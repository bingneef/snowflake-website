import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import RippleButton from "./ripple-button";

describe("RippleButton", () => {
  const defaultProps = {
    onClick: () => null
  };
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<RippleButton {...defaultProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<RippleButton {...defaultProps} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
