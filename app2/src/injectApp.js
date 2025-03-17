import App from "./App";
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

export const inject = (parentElementId) =>
  render(<App />, document.getElementById(parentElementId));
export const unmount = (parentElementId) =>
  unmountComponentAtNode(document.getElementById(parentElementId));
