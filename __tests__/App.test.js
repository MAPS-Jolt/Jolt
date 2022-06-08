import {
  render,
  screen,
  fireEvent,
  queryByTestId,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "React";
import App from "../client/App";
import Login from "../client/Components/Login";
import { unmountComponentAtNode } from "react-dom";
import renderer from "react-test-renderer";

/**
 * @jest-environment jsdom
 */

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("Baseline", () => {
  expect(true).not.toBe(false);
});

test("Renders the App Container", () => {
  render(<App />, container);
  const appMainDiv = screen.queryByTestId("appMainDiv");
  expect(appMainDiv).toBeTruthy();
});

test("Defaults to Login page", () => {
  render(<App />, container);
  expect(<Login />).toBeTruthy();
});

test("Renders App correctly per Snapshot", () => {
  const appTest = renderer.create(<App />).toJSON();
  expect(appTest).toMatchSnapshot();
});
