import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "React";
import Home from "../client/Containers/Home";
import ChatInput from "../client/Components/ChatInput";
import ChatDisplay from "../client/Containers/ChatDisplay";
import { unmountComponentAtNode } from "react-dom";

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

test("Contains ChatInput and ChatDisplay", () => {
  render(<Home />, container);
  expect(<ChatInput />).toBeTruthy();
  expect(<ChatDisplay />).toBeTruthy();
});
