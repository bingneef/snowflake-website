import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { render, fireEvent, cleanup } from "react-testing-library";

// add custom jest matchers from jest-dom
import "jest-dom/extend-expect";

import TabItem from "./tab-item";

describe("TabItem", () => {
  const defaultProps = {
    openTab: () => null,
    tag: "item",
    active: true,
    label: "Label",
    icon: faHeart
  };

  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TabItem {...defaultProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("calls openTab with tag on click", () => {
    const openTab = jest.fn();
    const { getByTestId } = render(
      <TabItem {...defaultProps} openTab={openTab} />
    );

    const item = getByTestId("tab-item");
    fireEvent.click(item);

    expect(openTab).toHaveBeenCalledWith("item");
  });
});
