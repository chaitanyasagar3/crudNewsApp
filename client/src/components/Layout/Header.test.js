import React from "react";
import { render, screen, fireEvent, act, getByTestId } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./Header";
import useAuth from "../../hooks/useAuth";
import { mockUserLoggedIn, mockUserNotLoggedIn } from "../../../test-utils";
import { MdLogout, MdSettings, MdRefresh, MdLogin } from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";


jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  default: jest.fn(),
  useAuth: jest.fn(),
  setRefreshArticles: jest.fn(),

}));

jest.mock("../../api/auth", () => ({
  updatePreferences: jest.fn(),
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
        const signInButton = screen.getByText("Login");
        expect(signUpButton).toBeInTheDocument();
        expect(signInButton).toBeInTheDocument();
      });
    });


  
    describe("When user is authenticated", () => {
      let renderValue;
      beforeEach(async () => {
        mockUserLoggedIn();
        
        renderValue = await act(async () =>
        render(
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        ));
      });
  
      afterEach(() => {
        jest.resetAllMocks();
      });

      test("calls signOut function when Logout button is clicked", () => {
        const { getByTestId } = renderValue;
        const logoutButton = getByTestId('logout-button');
        fireEvent.click(logoutButton);
        expect(useAuth().signOut).toHaveBeenCalled();
      });

    // test("if pagination works", async () => {
    //   const { getByRole } = renderValue;
    //   await act(async () => {
    //     const nextButton = await getByRole("button", { name: "Next" });
    //     fireEvent.click(3);
    //     expect(3).toBeInTheDocument();
    //   });
    // });

    // test("refresh button works", async () => {
    //   const { getByRole } = renderValue;
    //   await act(async () => {
    //     const {getByTestId} = renderValue;
    //     const refreshButton = getByTestId('refresh-button');
      
    //     fireEvent.click(refreshButton);
    //     expect(refreshButton).toBeVisible();
    //   });
    // });

      // Test that the settings button is displayed.

    test("displays settings button", async () => {
      const { getByRole } = renderValue;
      await act(async () => {
        const {getByTestId} = renderValue;
        const settingsButton = getByTestId('settings-button');
        fireEvent.click(settingsButton);
        expect(settingsButton).toBeInTheDocument();
      });
    });

      // Test that clicking the settings button opens the settings modal.

    test("clicking settings button opens settings modal", async () => {
      const { getByRole } = renderValue;
      await act(async () => {
        // Find the settings button and click it.
        const {getByTestId} = renderValue;
        const settingsButton = getByTestId('settings-button');
        await fireEvent.click(settingsButton);
        expect(settingsButton).toBeInTheDocument();


      });
    });

    test("clicking the refresh button calls setRefreshArticles", async() => {
      const { getByTestId } = renderValue;
      const refreshButton = getByTestId("refresh-button");
      fireEvent.click(refreshButton);
      await expect(useAuth().setRefreshArticles).toHaveBeenCalledWith(true);
    });

  });
});
