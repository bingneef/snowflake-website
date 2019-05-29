import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, fireEvent, cleanup } from "react-testing-library";

import Experiment from "./experiment";

describe("Experiment", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Experiment id={"test"} variants={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<Experiment id={"test"} variants={[]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("defaults to the first variant", () => {
    const { container } = render(
      <Experiment id={"test"} variants={[<div />, <span />]} />
    );
    expect(container.firstChild.nodeName).toEqual("DIV");
  });
});
