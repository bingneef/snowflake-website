import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, fireEvent, cleanup } from "@testing-library/react";

import MixPanel, { sendEvent } from "./mixpanel";

describe("MixPanel", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("env = development", () => {
    beforeEach(() => {
      process.env.NODE_ENV = "development";
    });

    it("renders without error", () => {
      const div = document.createElement("div");

      ReactDOM.render(<MixPanel />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("matches the snapshot", () => {
      const component = renderer.create(<MixPanel />);
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

      ReactDOM.render(<MixPanel />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("matches the snapshot", () => {
      const component = renderer.create(<MixPanel />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe("#sendEvent", () => {
  it("logs if mixpanel is not defined", () => {
    console.log = jest.fn();
    window.mixpanel = undefined;

    sendEvent("TestEvent");

    expect(console.log).toHaveBeenCalledWith(
      "Not sending event: TestEvent, not in production environment"
    );
  });

  it("sends to mixpanel if defined", () => {
    window.mixpanel = {
      track: jest.fn()
    };

    sendEvent("TestEvent", { a: true });

    expect(window.mixpanel.track).toHaveBeenCalledWith("TestEvent", {
      a: true
    });
  });
});
