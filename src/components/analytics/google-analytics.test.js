import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, fireEvent, cleanup } from "react-testing-library";

import GoogleAnalytics, { sendEvent } from "./google-analytics";

describe("GoogleAnalytics", () => {
  describe("env = development", () => {
    beforeEach(() => {
      process.env.NODE_ENV = "development";
    });

    it("renders without error", () => {
      const div = document.createElement("div");

      ReactDOM.render(<GoogleAnalytics />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("matches the snapshot", () => {
      const component = renderer.create(<GoogleAnalytics />);
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

      ReactDOM.render(<GoogleAnalytics />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("matches the snapshot", () => {
      const component = renderer.create(<GoogleAnalytics />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe("#sendEvent", () => {
  it("logs if dataLayer is not defined", () => {
    console.log = jest.fn();
    window.dataLayer = undefined;

    sendEvent("TestEvent");

    expect(console.log).toHaveBeenCalledWith(
      "Not sending event: TestEvent, not in production environment"
    );
  });

  it("sends to dataLayer if defined", () => {
    window.dataLayer = {
      push: jest.fn()
    };

    sendEvent("TestEvent", { a: true });

    expect(window.dataLayer.push).toHaveBeenCalledWith({
      event: "TestEvent",
      a: true
    });
  });
});
