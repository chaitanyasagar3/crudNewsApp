import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignInPage from "./SignInPage";
import { login } from "../../api/auth";

const mockUseAuth = jest.fn();

jest.mock("../../api/auth", () => ({
  login: jest.fn(),
}));

const mockNavigate = jest.fn((path, options) => {
  return { path, options };
});

jest.mock("react-router-dom", () => ({
  Link: (props) => (
    <a
      href="/"
      {...props}
      onClick={(e) => {
        e.preventDefault();
        mockNavigate(props.to, { replace: true });
      }}
    />
  ),
  useNavigate: () => mockNavigate,
  useLocation: () => ({ state: { from: "/" } }),
}));

jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  default: () => mockUseAuth(),
}));

describe("SignInPage", () => {
  beforeEach(() => {
    render(<SignInPage />);
  });

  test("renders the form and its elements", () => {
    expect(screen.getByText("Welcome To CRUDNews")).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Sign Up" })).toBeInTheDocument();
  });

  test("shows an error when login fails", async () => {
    const { login } = require("../../api/auth");
    login.mockRejectedValueOnce({ response: { status: 401 } });

    userEvent.type(screen.getByLabelText("Username"), "user1");
    userEvent.type(screen.getByLabelText("Password"), "Password1!");

    fireEvent.click(screen.getByRole("button", { name: "Sign In" }));

    expect(await screen.findByText("Unauthorized")).toBeInTheDocument();
  });

  test("calls the login function with the correct arguments when the sign-in button is clicked", () => {
    const { login } = require("../../api/auth");
    userEvent.type(screen.getByLabelText("Username"), "user1");
    userEvent.type(screen.getByLabelText("Password"), "Password1!");
  
    fireEvent.click(screen.getByRole("button", { name: "Sign In" }));
  
    expect(login).toHaveBeenCalledTimes(1);
    expect(login).toHaveBeenCalledWith("user1", "Password1!");
  });
  
  test("the sign in page is working properly", () => {
    render(<SignInPage />);
  });


  test("password input field changes its value correctly", () => {
    const { getByLabelText } = render(<SignInPage />);
    const passwordInput = getByLabelText("Password");
  
    fireEvent.change(passwordInput, { target: { value: "testpass" } });
    expect(passwordInput.value).toBe("testpass");
  });


  test("username input field changes its value correctly", () => {
    const { getByLabelText } = render(<SignInPage />);
    const usernameInput = getByLabelText("Username");
  
    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    expect(usernameInput.value).toBe("testuser");
  });

  test("shows an error when server does not respond", async () => {
    const { login } = require("../../api/auth");
    login.mockRejectedValueOnce({});
  
    userEvent.type(screen.getByLabelText("Username"), "user1");
    userEvent.type(screen.getByLabelText("Password"), "Password1!");
  
    fireEvent.click(screen.getByRole("button", { name: "Sign In" }));
  
    await waitFor(() =>
      expect(screen.getByText("No server Response")).toBeInTheDocument()
    );
  });

  test("shows an error when server returns status 400", async () => {
    const { login } = require("../../api/auth");
    login.mockRejectedValueOnce({ response: { status: 400 } });
  
    userEvent.type(screen.getByLabelText("Username"), "user1");
    userEvent.type(screen.getByLabelText("Password"), "Password1!");
  
    fireEvent.click(screen.getByRole("button", { name: "Sign In" }));
  
    await waitFor(() =>
      expect(screen.getByText("Username or password not found")).toBeInTheDocument()
    );
  });

  test("shows an error when server returns status  500", async () => {
    const { login } = require("../../api/auth");
    login.mockRejectedValueOnce({ response: { status: 500 } });
  
    userEvent.type(screen.getByLabelText("Username"), "user1");
    userEvent.type(screen.getByLabelText("Password"), "Password1!");
  
    fireEvent.click(screen.getByRole("button", { name: "Sign In" }));
  
    await waitFor(() =>
      expect(screen.getByText("Log in Failed")).toBeInTheDocument()
    );
  });
  
  test("does not submit form when other keys are pressed", () => {
    const { login } = require("../../api/auth");
    userEvent.type(screen.getByLabelText("Username"), "user1");
    userEvent.type(screen.getByLabelText("Password"), "Password1!");
  
    fireEvent.keyDown(screen.getByLabelText("Password"), { key: "Shift" });
  
    expect(login).toHaveBeenCalledTimes(0);
  });

  
  test("navigates to sign up page when the sign up button is clicked", () => {
    fireEvent.click(screen.getByRole("link", { name: "Sign Up" }));

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/sign-up", { replace: true });
  });

});
