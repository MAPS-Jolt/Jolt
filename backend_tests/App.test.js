import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "React";
import App from "../client/App.jsx";

/**
 * @jest-environment jsdom
 */

test("renders a div", () => {
  render(<App />);
  const myDiv = screen.queryByRole("div");
  expect(myDiv).toBeInTheDocument;
});

test('renders "username"', () => {
  render(<App />);
  const username = screen.queryByText("username");
  expect(username).toBeInTheDocument;
});

test('renders "password"', () => {
  render(<App />);
  const password = screen.queryByText("password");
  expect(password).toBeInTheDocument;
});

test('renders "PersonIcon"', () => {
  render(<App />);
  const PersonIcon = screen.queryByTestId("PersonIcon");
  expect(PersonIcon).toBeInTheDocument;
});
test('renders "CheckBoxOutlineBlankIcon"', () => {
  render(<App />);
  const CheckBoxOutlineBlankIcon = screen.queryByTestId(
    "CheckBoxOutlineBlankIcon"
  );
  expect(CheckBoxOutlineBlankIcon).toBeInTheDocument;
});

test("renders at least one button", () => {
  render(<App />);
  const button = screen.queryByRole("button");
  expect(button).toBeInTheDocument;
});

test('renders something called the "sign in" button', () => {
  render(<App />);
  const button = screen.getByTestId("signInButton");
  expect(button).toBeInTheDocument;
});

test('the "Sign In" button is actually a button', () => {
  render(<App />);
  const signInButton = screen.getByTestId("signInButton");
  expect(signInButton).toBeInstanceOf(HTMLButtonElement);
});

test('Does NOT find the "Sign Up" button', () => {
  render(<App />);
  const signUpButtonArray = screen.queryAllByTestId("signUpButton");
  expect(signUpButtonArray).toEqual([]);
});
