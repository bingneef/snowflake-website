import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Smartlook, { sendEvent } from "./smartlook";

describe("Smartlook", () => {
  describe("env = development", () => {
    beforeEach(() => {
      process.env.NODE_ENV = "development";
    });

    it("renders without error", () => {
      const div = document.createElement("div");

      ReactDOM.render(<Smartlook />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("matches the snapshot", () => {
      const component = renderer.create(<Smartlook />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("env = production", () => {
    beforeEach(() => {
      process.env.NODE_ENV = "production";
    });

    it("renders without error", () => {
      const div = document.createElement("div");

      ReactDOM.render(<Smartlook />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("matches the snapshot", () => {
      const component = renderer.create(<Smartlook />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe("#sendEvent", () => {
  it("logs if smartlook is not defined", () => {
    console.log = jest.fn();
    window.smartlook = undefined;

    sendEvent("TestEvent");

    expect(console.log).toHaveBeenCalledWith(
      "Not sending event: TestEvent, not in production environment"
    );
  });

  it("sends to smartlook if defined", () => {
    window.smartlook = jest.fn();

    sendEvent("TestEvent", { a: true });

    expect(window.smartlook).toHaveBeenCalledWith("track", "TestEvent", {
      a: true
    });
  });
});
