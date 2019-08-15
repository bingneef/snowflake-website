import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Vwo, { sendEvent } from "./vwo";

describe("Vwo", () => {
  describe("env = development", () => {
    beforeEach(() => {
      process.env.NODE_ENV = "development";
    });

    it("renders without error", () => {
      const div = document.createElement("div");

      ReactDOM.render(<Vwo />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("matches the snapshot", () => {
      const component = renderer.create(<Vwo />);
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

      ReactDOM.render(<Vwo />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("matches the snapshot", () => {
      const component = renderer.create(<Vwo />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe("#sendEvent", () => {
  it("logs if Vwo is not defined", () => {
    console.log = jest.fn();
    window.VWO = undefined;

    sendEvent("TestEvent");

    expect(console.log).toHaveBeenCalledWith(
      "Not sending event: TestEvent, not in production environment"
    );
  });

  it("sends to Vwo if defined", () => {
    window.VWO = {
      push: jest.fn()
    };

    sendEvent("TestEvent");

    expect(window.VWO).toHaveBeenCalledWith("push", ["track.TestEvent", 1]);
  });
});
