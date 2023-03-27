import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import useAuth from "../../hooks/useAuth";
import { mockUserLoggedIn, mockUserNotLoggedIn } from "../../../test-utils";

jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  default: jest.fn(),
  useAuth: jest.fn(),
}));

describe("Header", () => {
    describe("When user is not authenticated", () => {
      beforeEach(() => {
        mockUserNotLoggedIn();
        render(
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        );
      });
  
      afterEach(() => {
        jest.resetAllMocks();
      });
  
      test("renders the logo and app name", () => {
        const logo = screen.getByAltText("logo");
        const appName = screen.getByText("CRUDNEWSAPP");
        expect(logo).toBeInTheDocument();
        expect(appName).toBeInTheDocument();
      });
  
      test("displays Sign Up and Sign In buttons if user is not authenticated", () => {
        const signUpButton = screen.getByText("Sign Up");
        const signInButton = screen.getByText("Sign In");
        expect(signUpButton).toBeInTheDocument();
        expect(signInButton).toBeInTheDocument();
      });
    });
  
    describe("When user is authenticated", () => {
      beforeEach(() => {
        mockUserLoggedIn();
        render(
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        );
      });
  
      afterEach(() => {
        jest.resetAllMocks();
      });

      test("displays username and Logout button if user is authenticated", () => {
        const loggedInAs = screen.getByText("Logged in as test1");
        const logoutButton = screen.getByText("Logout");
        expect(loggedInAs).toBeInTheDocument();
        expect(logoutButton).toBeInTheDocument();
      });
  
      test("calls signOut function when Logout button is clicked", () => {
        const logoutButton = screen.getByText("Logout");
        fireEvent.click(logoutButton);
        expect(useAuth().signOut).toHaveBeenCalled();
      });
    });
  });
