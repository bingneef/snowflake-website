jest.mock("jump.js");

import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";

import Landing from "./landing";

import jump from "jump.js";
import * as fullStory from "../analytics/full-story";
import * as mixpanel from "../analytics/mixpanel";
import * as ga from "../analytics/google-analytics";

describe("Landing", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Landing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const component = renderer.create(<Landing />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("#navToPortfolio", () => {
  let component;
  beforeEach(() => {
    component = renderer.create(<Landing />);
  });

  it("calls sendEvents with Landing CTA", () => {
    fullStory.sendEvent = jest.fn();
    mixpanel.sendEvent = jest.fn();
    ga.sendEvent = jest.fn();

    const rootInstance = component.root;
    const $cta = rootInstance.findByProps({ "data-testid": "landing-cta" });
    $cta.props.onClick();

    expect(fullStory.sendEvent).toHaveBeenCalledWith("Landing CTA");
    expect(mixpanel.sendEvent).toHaveBeenCalledWith("Landing CTA");
    expect(ga.sendEvent).toHaveBeenCalledWith({
      eventCategory: "Landing",
      eventAction: "CTA"
    });
  });
});
