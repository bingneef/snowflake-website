import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import { render, fireEvent, cleanup } from "react-testing-library";

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
  it("closes the modal on escape", () => {
    const closeModal = jest.fn();
    const { container } = render(
      <Modal {...defaultProps} closeModal={closeModal} />
    );

    fireEvent(
      container,
      new KeyboardEvent("keyup", {
        key: "Escape",
        keyCode: 27,
        which: 27,
        bubbles: true
      })
    );

    expect(closeModal).toHaveBeenCalledTimes(1);
  });
  it("does not close the modal on another key", () => {
    const closeModal = jest.fn();
    const { container } = render(<Modal item={{}} closeModal={closeModal} />);

    fireEvent(
      container,
      new KeyboardEvent("keyup", {
        key: "Enter",
        keyCode: 13,
        which: 13,
        bubbles: true
      })
    );

    expect(closeModal).not.toHaveBeenCalled();
  });
});
