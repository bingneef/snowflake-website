import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, fireEvent, cleanup } from "@testing-library/react";

import FullStory, { sendEvent } from "./full-story";

describe("FullStory", () => {
  describe("env = development", () => {
    beforeEach(() => {
      process.env.NODE_ENV = "development";
    });

    it("renders without error", () => {
      const div = document.createElement("div");

      ReactDOM.render(<FullStory />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("matches the snapshot", () => {
      const component = renderer.create(<FullStory />);
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

      ReactDOM.render(<FullStory />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it("matches the snapshot", () => {
      const component = renderer.create(<FullStory />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe("#sendEvent", () => {
  it("logs if FS is not defined", () => {
    console.log = jest.fn();
    window.FS = undefined;

    sendEvent("TestEvent");

    expect(console.log).toHaveBeenCalledWith(
      "Not sending event: TestEvent, not in production environment"
    );
  });

  it("sends to FS if defined", () => {
    window.FS = {
      event: jest.fn()
    };

    sendEvent("TestEvent", { a: true });

    expect(window.FS.event).toHaveBeenCalledWith("TestEvent", { a: true });
  });
});
