import React from "react";

const mockReact = React;

let componentName = "DynamicComponent";

export const __setComponentName = data => {
  componentName = data;
};

const DynamicComponent = () => ({ children, ...rest }) =>
  mockReact.createElement(componentName, rest, children);

export default DynamicComponent;
