import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GuestLanding from "./GuestLanding";

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

describe ("GuestLanding", () => {
    beforeEach(() => {
        render(<GuestLanding />);
    });
    
    test("renders the form and its elements", () => {
        expect(screen.getByText("Welcome To CRUDNews")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Sign In" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument();
    });
    
    test("shows an error when login fails", async () => {
        const { login } = require("../../api/auth");
        login.mockRejectedValueOnce({ response: { status: 401 } });
    
        userEvent.type(screen.getByLabelText("Username"), "user1");
        userEvent.type(screen.getByLabelText("Password"), "Password1!");
    
        fireEvent.click(screen.getByRole("button", { name: "Sign In" }));
    
        expect(await screen.findByText("Unauthorized")).toBeInTheDocument();
    });
});
