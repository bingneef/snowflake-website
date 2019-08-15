jest.mock("jump.js");

import React from "react";
import ReactDOM from "react-dom";

import { render, fireEvent } from "@testing-library/react";

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
    const { container } = render(<Landing />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("#navToPortfolio", () => {
  it("calls sendEvents with Landing CTA", async () => {
    fullStory.sendEvent = jest.fn();
    mixpanel.sendEvent = jest.fn();
    ga.sendEvent = jest.fn();

    const { getByTestId } = render(<Landing />);
    const $cta = getByTestId("landing-cta");
    const resp = fireEvent.click($cta);

    expect(fullStory.sendEvent).toHaveBeenCalledWith("Landing CTA");
    expect(mixpanel.sendEvent).toHaveBeenCalledWith("Landing CTA");
    expect(ga.sendEvent).toHaveBeenCalledWith({
      eventCategory: "Landing",
      eventAction: "CTA"
    });
  });
});
