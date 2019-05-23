import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, fireEvent, cleanup } from "react-testing-library";
import * as fullStory from "../analytics/full-story";
import * as mixpanel from "../analytics/mixpanel";

// add custom jest matchers from jest-dom
import "jest-dom/extend-expect";

import Portfolio from "./portfolio";

describe("Portfolio", () => {
  beforeEach(cleanup);

  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Portfolio />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("matches the snapshot", () => {
    const { container } = render(<Portfolio />);
    expect(container).toMatchSnapshot();
  });

  it("sends analytics event on item click", () => {
    const { getByTestId } = render(<Portfolio />);
    mixpanel.sendEvent = jest.fn();
    fullStory.sendEvent = jest.fn();

    const item = getByTestId("portfolio-item-1");
    fireEvent.click(item);

    const payload = [
      "Portfolio OpenItem",
      {
        tag: item.getAttribute("data-item-tag")
      }
    ];
    expect(mixpanel.sendEvent).toHaveBeenCalledWith(...payload);
    expect(fullStory.sendEvent).toHaveBeenCalledWith(...payload);
  });

  it("sends analytics event on tab click", () => {
    const { getByTestId } = render(<Portfolio />);
    const tabs = ["serious", "tools", "fun"];

    for (let tab of tabs) {
      mixpanel.sendEvent = jest.fn();
      fullStory.sendEvent = jest.fn();

      const item = getByTestId(`tab-${tab}`);
      fireEvent.click(item);

      const payload = [
        "Portfolio OpenTab",
        {
          tab
        }
      ];
      expect(mixpanel.sendEvent).toHaveBeenCalledWith(...payload);
      expect(fullStory.sendEvent).toHaveBeenCalledWith(...payload);

      expect(item.getAttribute("class").includes("is-active"));
    }
  });

  it("does not crash when the tab has is not in the json", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Portfolio initialTab={"bogus"} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
