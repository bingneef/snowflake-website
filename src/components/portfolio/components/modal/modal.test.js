import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, fireEvent, act } from "@testing-library/react";

import Modal from "./modal";

const defaultProps = {
  item: {
    tag: "tag",
    title: "title",
    customer: "customer",
    projectState: "Done",
    description: "Description",
    techniques: ["jest", "react"],
    image: false,
    callToAction: {
      type: "github",
      link: "https://www.github.com/bingneef/snowflake-website"
    }
  },
  closeModal: () => null
};

describe("Modal", () => {
  it("renders without error", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Modal {...defaultProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe("#handleKeyEvent", () => {
  it("closes the modal on escape", async () => {
    const closeModal = jest.fn();
    const { container } = render(
      <Modal {...defaultProps} closeModal={closeModal} />
    );

    act(() => {
      fireEvent.keyUp(container, { key: "Escape", keyCode: 27 });
    });

    expect(closeModal).toHaveBeenCalledTimes(1);
  });

  it("does not close the modal on another key", () => {
    const closeModal = jest.fn();
    const { container } = render(
      <Modal {...defaultProps} closeModal={closeModal} />
    );

    act(() => {
      fireEvent.keyUp(container, { key: "Enter", keyCode: 13 });
    });

    expect(closeModal).not.toHaveBeenCalled();
  });
});
