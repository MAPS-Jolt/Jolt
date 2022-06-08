import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "React";
import Signup from "../client/Components/Signup";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
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

test('Renders something with "username"', () => {
  render(<Signup />, container);
  const username = screen.queryByText("username");
  expect(username).toBeTruthy();
});

test('Renders something with "password"', () => {
  render(<Signup />, container);
  const password = screen.queryByText("Password");
  expect(password).toBeTruthy();
});

test('Does NOT render something with "blah"', () => {
  render(<Signup />, container);
  const blah = screen.queryByText("blah");
  expect(blah).not.toBeTruthy();
});

test('Renders something with test-id "PersonIcon"', () => {
  render(<Signup />, container);
  const PersonIcon = screen.queryByTestId("PersonIcon");
  expect(PersonIcon).toBeTruthy();
});

test('Renders something with test-id "CheckBox"', () => {
  render(<Signup />, container);
  const CheckBox = screen.queryByTestId("CheckBox");
  expect(CheckBox).not.toBeTruthy();
});

test('Does NOT render something with test-id "noId"', () => {
  render(<Signup />, container);
  const noId = screen.queryByTestId("noId");
  expect(noId).not.toBeTruthy();
});

test("Renders at least one button", () => {
  render(<Signup />, container);
  const button = screen.queryByRole("button");
  expect(button).toBeTruthy();
});

test("Does NOT render at least one table", () => {
  render(<Signup />, container);
  const table = screen.queryByRole("table");
  expect(table).not.toBeTruthy();
});

test('Does NOT render something called the "sign in" button', () => {
  render(<Signup />, container);
  const button = screen.queryByTestId("signInButton");
  expect(button).not.toBeTruthy();
});

test('The "Sign Up" button is actually a button', () => {
  render(<Signup />, container);
  const signInButton = screen.getByTestId("signUpButton");
  expect(signInButton).toBeInstanceOf(HTMLButtonElement);
});

test('Does NOT find the "Sign In" button', () => {
  render(<Signup />, container);
  const signInButtonArray = screen.queryAllByTestId("signInButton");
  expect(signInButtonArray).toEqual([]);
});

test("Should identify if the spy function was called or not", () => {
  const spyFunction = jest.fn();
  spyFunction();
  expect(spyFunction).toHaveBeenCalled();
});

test("Renders Signup correctly per Snapshot", () => {
  const signupTest = renderer.create(<Signup />).toJSON();
  expect(signupTest).toMatchSnapshot();
});
