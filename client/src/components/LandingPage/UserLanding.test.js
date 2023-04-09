import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import UserLanding from "./UserLanding";
import { getNewsByCategory } from "../../api/news";
import { act } from "react-dom/test-utils";
import AuthProvider from "../../hoc/Authentication/AuthProvider";

jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  default: () => ({ user: { username: "test1" } }),
  useAuth: jest.fn(() => ({
    user: { username: "test1" },
  })),
}));

jest.mock("../../api/news", () => ({
  getNewsByCategory: jest.fn(),
}));

jest.mock("../../api/auth", () => ({
  updatePreferences: jest.fn(),
}));

const mockNavigate = jest.fn((path, options) => {
  return { path, options };
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  NavLink: jest.fn(({ children, onClick, ...props }) => (
    <a
      href="/"
      {...props}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  )),
}));

describe("UserLanding", () => {
  let renderValue;
  beforeEach(async () => {
    await act(async () => {
      renderValue = render(<UserLanding />, { wrapper: AuthProvider });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test that getNewsByCategory is called when the component mounts.
  test("getNewsByCategory is called on mount", async () => {
    expect(getNewsByCategory).toHaveBeenCalledTimes(1);
  });

  // Test that the refresh button works.
  test("refreshes news articles on click of refresh button", async () => {
    // Mock the response from getNewsByCategory.
    const articles = [
      {
        title: "Article 1",
        urlToImage: "image1.jpg",
        source: { name: "Source 1" },
        description: "Description 1",
        url: "article1.com",
      },
    ];
    getNewsByCategory.mockResolvedValueOnce(articles);

    // Click the refresh button.
    const refreshButton = screen.getByText("Refresh");

    await act(async () => {
      refreshButton.click();
    });

    // Wait for the articles to be updated.
    await waitFor(() => {
      expect(screen.getByText(articles[0].title)).toBeInTheDocument();
    });
  });

  // Test that the welcome message includes the user's username.
  // test("displays welcome message with username", async () => {
  //   const { getByRole } = renderValue;
  //   await act(async () => {
  //     expect(screen.getByText(`Welcome test1!`)).toBeInTheDocument();
  //   });
  // });

});
