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
  it("logs if gtag is not defined", () => {
    console.log = jest.fn();
    window.gtag = undefined;

    sendEvent({ eventCategory: "TestEvent", eventAction: "Sending Event" });

    expect(console.log).toHaveBeenCalledWith(
      "Not sending event: TestEvent:Sending Event, not in production environment"
    );
  });

  it("sends to gtag if defined", () => {
    window.gtag = jest.fn();

    sendEvent({
      eventCategory: "TestEvent",
      eventAction: "Sending Event",
      eventLabel: "Event label",
      eventValue: "EventValue"
    });

    expect(window.gtag).toHaveBeenCalledWith("event", "Sending Event", {
      eventCategory: "TestEvent",
      eventLabel: "Event label",
      eventValue: "EventValue"
    });
  });
});
