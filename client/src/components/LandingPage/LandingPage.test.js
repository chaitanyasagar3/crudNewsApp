import React from "react";
import { render, screen } from "@testing-library/react";
import LandingPage from "./LandingPage";
import useAuth from "../../hooks/useAuth";

jest.mock("../../hooks/useAuth");

describe("LandingPage", () => {
  test("renders welcome message for guest user", () => {
    useAuth.mockReturnValue({ user: null });

    render(<LandingPage />);

    expect(screen.getByText(/Welcome, Guest!/i)).toBeInTheDocument();
    expect(screen.getByText(/This is your landing page./i)).toBeInTheDocument();
  });

  test("renders welcome message for authenticated user", () => {
    useAuth.mockReturnValue({ user: { username: "testuser" } });

    render(<LandingPage />);

    expect(screen.getByText(/Welcome, testuser!/i)).toBeInTheDocument();
    expect(screen.getByText(/This is your landing page./i)).toBeInTheDocument();
  });
});
