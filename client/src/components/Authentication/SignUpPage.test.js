import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpPage from "./SignUpPage";

jest.mock("../../api/auth", () => ({
  signup: jest.fn(),
}));

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

describe("SignUpPage", () => {
  beforeEach(() => {
    render(<SignUpPage />);
  });

  test("renders the form and its elements", () => {
    expect(screen.getByText("Welcome To CRUDNews")).toBeInTheDocument();
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Cancel" })).toBeInTheDocument();
  });

  // Add more test cases here
  test("submits the form successfully", async () => {
    const { signup } = require("../../api/auth");
    signup.mockResolvedValueOnce({ data: { id: "1", username: "user1" } });

    userEvent.type(screen.getByLabelText("Username"), "user1");
    userEvent.type(screen.getByLabelText("Password"), "Password1!");
    userEvent.type(screen.getByLabelText("Confirm Password"), "Password1!");

    fireEvent.click(screen.getByRole("button", { name: "Sign Up" }));

    await waitFor(() => expect(signup).toHaveBeenCalledTimes(1));
    expect(signup).toHaveBeenCalledWith("user1", "Password1!");
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/login", { replace: true });
  });

  test("shows an error when passwords do not match", async () => {
    userEvent.type(screen.getByLabelText("Username"), "user1");
    userEvent.type(screen.getByLabelText("Password"), "Password1!");
    userEvent.type(screen.getByLabelText("Confirm Password"), "Password2!");

    fireEvent.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(
      await screen.findByText("Passwords do not match")
    ).toBeInTheDocument();
  });

  test("shows an error when the password is invalid", async () => {
    userEvent.type(screen.getByLabelText("Username"), "user1");
    userEvent.type(screen.getByLabelText("Password"), "password");
    userEvent.type(screen.getByLabelText("Confirm Password"), "password");

    fireEvent.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(
      await screen.findByText(
        "Password must contain at least one uppercase letter"
      )
    ).toBeInTheDocument();
  });

  test("show error when password and confirmed password isnt same", async () => {
    userEvent.type(screen.getByLabelText("Username"), "user1");
    userEvent.type(screen.getByLabelText("Password"), "Password1!");
    userEvent.type(screen.getByLabelText("Confirm Password"), "Password2!");

    fireEvent.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(
      await screen.findByText("Passwords do not match")
    ).toBeInTheDocument();
  });

  test("shows an error when confirmed password is invalid", async () => {
    userEvent.type(screen.getByLabelText("Username"), "user1");
    userEvent.type(screen.getByLabelText("Password"), "Password1!");
    userEvent.type(screen.getByLabelText("Confirm Password"), "password");

    fireEvent.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(
      await screen.findByText(
        "Passwords do not match"
      )
    ).toBeInTheDocument();
  });

  test("navigates back to login page when the cancel button is clicked", () => {
    fireEvent.click(screen.getByRole("button", { name: "Cancel" }));

    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });

 
});
