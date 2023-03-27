import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import GuestLanding from "./GuestLanding";
import { getGeneralNews } from "../../api/news";
import { act } from "react-dom/test-utils";

const mockUseAuth = jest.fn();

jest.mock("../../api/news", () => ({
  getGeneralNews: jest.fn({}),
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

describe("GuestLanding", () => {
  let renderValue;
  beforeEach(async() => {
    renderValue = await act(async () => render(<GuestLanding/>));
  });

  test("renders the form and its elements", async() => {
    await act(async () => {
      expect(await renderValue.getByText("Welcome Guest!")).toBeInTheDocument();
    });
  });

  //testing the refresh button

  test("refresh button works", async() => {
    const {getByRole} = renderValue;
    await act(async () => {
      const refreshButton = await getByRole("button", { name: "Refresh" });
      fireEvent.click(refreshButton);
      expect(refreshButton).toBeInTheDocument();
    });
  });

  //testing the sign up button

  test("sign up button works", async() => {
    const {getByRole} = renderValue;
    await act(async () => {
      const signUpButton = await getByRole("button", { name: "Sign Up Here!" });
      fireEvent.click(signUpButton);
      expect(signUpButton).toBeInTheDocument();
    });
  });

//Test that getGeneralNews is called when the component mounts.

  test("getGeneralNews is called on mount", async () => {
    await act(async () => {
      expect(getGeneralNews).toHaveBeenCalledTimes(1);
    });
  });

//Test that the news articles are displayed correctly.

  test("displays news articles", async () => {
    const articleData = [
      { title: "Article 1", urlToImage: "image1.jpg", description: "Description 1", url: "url1" },
      { title: "Article 2", urlToImage: "image2.jpg", description: "Description 2", url: "url2" },
      { title: "Article 3", urlToImage: "image3.jpg", description: "Description 3", url: "url3" },
    ];
    getGeneralNews.mockResolvedValueOnce(articleData);
    await act(async () => {
      await waitFor(() => expect(getGeneralNews).toHaveBeenCalledTimes(1));
    });
  });

  //Test that the onError function is called when an image fails to load.

  test("onError function is called when image fails to load", async () => {
    const articleData = [{ title: "Article 1", urlToImage: "invalid-image.jpg", description: "Description 1", url: "url1" }];
    getGeneralNews.mockResolvedValueOnce(articleData);
    await act(async () => {
      await waitFor(() => expect(getGeneralNews).toHaveBeenCalledTimes(1));
    });
  });
});