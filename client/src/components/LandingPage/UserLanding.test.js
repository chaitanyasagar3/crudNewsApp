import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import UserLanding from "./UserLanding";
import { getNewsByCategory } from "../../api/news";
import { getNewsByUserPreferences } from "../../api/news";
import { act } from "react-dom/test-utils";
import AuthProvider from "../../hoc/Authentication/AuthProvider";
import useAuth from "../../hooks/useAuth";
import { mockUserLoggedIn } from "../../../test-utils";

jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  default: () => ({
    user: {
      username: "test1",
      preferences: {
        general: "true",
        business: "false",
        entertainment: "true",
        health: "false",
        science: "false",
        sports: "false",
        technology: "false",
      },
    },
  }),
  useAuth: jest.fn(() => ({
    user: {
      username: "test1",
      preferences: {
        general: "true",
        business: "false",
        entertainment: "true",
        health: "false",
        science: "false",
        sports: "false",
        technology: "false",
      },
    },
  })),
}));

jest.mock("../../api/news", () => ({
  getNewsByCategory: jest.fn(),
  getNewsByUserPreferences: jest.fn(),
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
    getNewsByCategory.mockResolvedValueOnce([
      {
        title: "Article 1",
        urlToImage: "image1.jpg",
        source: { name: "Source 1" },
        description: "Description 1",
        url: "article1.com",
      },
      {
        title: "Article 2",
        urlToImage: "image2.jpg",
        source: { name: "Source 2" },
        description: "Description 2",
        url: "article2.com",
      },
    ]);

    await act(async () => {
      renderValue = render(<UserLanding />, { wrapper: AuthProvider });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test that getNewsByCategory is called when the component mounts.
  test("getNewsByUserPreference is called on mount", async () => {
    await act(async () => {
      
      await waitFor(() =>
        expect(getNewsByUserPreferences).toHaveBeenCalledTimes(1)
      );
      expect(getNewsByUserPreferences).toHaveBeenCalledWith(
        {"preferences": {"business": "false", "entertainment": "true", "general": "true", "health": "false", "science": "false", "sports": "false", "technology": "false"}, "username": "test1"}
      );
    });
  });

  test("clicking on tab nav links changes active category and fetches news", async () => {
    const { getByText } = renderValue;

    // Click on "Business" tab
    fireEvent.click(getByText("Business"));
    await waitFor(() =>
      expect(getNewsByCategory).toHaveBeenCalledWith("business")
    );

    // Click on "Entertainment" tab
    fireEvent.click(getByText("Entertainment"));
    await waitFor(() =>
      expect(getNewsByCategory).toHaveBeenCalledWith("entertainment")
    );

    // Click on "Health" tab
    fireEvent.click(getByText("Health"));
    await waitFor(() =>
      expect(getNewsByCategory).toHaveBeenCalledWith("health")
    );

    // Click on "Science" tab
    fireEvent.click(getByText("Science"));
    await waitFor(() =>
      expect(getNewsByCategory).toHaveBeenCalledWith("science")
    );

    // Click on "Sports" tab
    fireEvent.click(getByText("Sports"));
    await waitFor(() =>
      expect(getNewsByCategory).toHaveBeenCalledWith("sports")
    );

    // Click on "Technology" tab
    fireEvent.click(getByText("Technology"));
    await waitFor(() =>
      expect(getNewsByCategory).toHaveBeenCalledWith("technology")
    );
  });

  // Test that the refresh button works.
  // test("refreshes news articles on click of refresh button", async () => {
  //   // Mock the response from getNewsByCategory.
  //   const articles = [
  //     {
  //       title: "Article 1",
  //       urlToImage: "image1.jpg",
  //       source: { name: "Source 1" },
  //       description: "Description 1",
  //       url: "article1.com",
  //     },
  //   ];
  //   getNewsByCategory("general").mockResolvedValueOnce(articles);
  // });

  //   // Click the refresh button.
  //   const refreshButton = screen.getByText("Refresh");

  //   await act(async () => {
  //     refreshButton.click();
  //   });

  //   // Wait for the articles to be updated.
  //   await waitFor(() => {
  //     expect(screen.getByText(articles[0].title)).toBeInTheDocument();
  //   });
  // });

  // Test that the welcome message includes the user's username.
  // test("displays welcome message with username", async () => {
  //   const { getByRole } = renderValue;
  //   await act(async () => {
  //     expect(screen.getByText(`Welcome test1!`)).toBeInTheDocument();
  //   });
  // });
});
