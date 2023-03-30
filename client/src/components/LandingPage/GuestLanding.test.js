import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  act,
} from "@testing-library/react";
import GuestLanding from "./GuestLanding";
import { getGeneralNews } from "../../api/news";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

jest.mock("../../api/news", () => ({
  getGeneralNews: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("GuestLanding", () => {
  let renderValue;

  beforeEach(async () => {
    getGeneralNews.mockResolvedValueOnce([
      {
        title: "Article 1",
        urlToImage: "image1.jpg",
        description: "Description 1",
        url: "url1",
      },
      {
        title: "Article 2",
        urlToImage: "image2.jpg",
        description: "Description 2",
        url: "url2",
      },
    ]);
    useNavigate.mockReturnValue(jest.fn());
    renderValue = await act(async () =>
      render(
        <Router>
          <GuestLanding />
        </Router>
      )
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the form and its elements", async () => {
    await act(async () => {
      expect(await renderValue.getByText("Welcome Guest!")).toBeInTheDocument();
    });
  });

  test("refresh button works", async () => {
    const { getByRole } = renderValue;
    await act(async () => {
      const refreshButton = await getByRole("button", { name: "Refresh" });
      fireEvent.click(refreshButton);
      expect(refreshButton).toBeInTheDocument();
    });
  });

  test("sign up button works", async () => {
    const { getByRole } = renderValue;
    await act(async () => {
      const signUpButton = await getByRole("button", { name: "Sign Up Here!" });
      fireEvent.click(signUpButton);
      expect(signUpButton).toBeInTheDocument();
    });
  });
  test("displays bottom tab bar with navlinks", async () => {
    await act(async () => {
      expect(await renderValue.getByText("General")).toBeInTheDocument();
      expect(await renderValue.getByText("Business")).toBeInTheDocument();
      expect(await renderValue.getByText("Entertainment")).toBeInTheDocument();
      expect(await renderValue.getByText("Health")).toBeInTheDocument();
      expect(await renderValue.getByText("Science")).toBeInTheDocument();
      expect(await renderValue.getByText("Sports")).toBeInTheDocument();
      expect(await renderValue.getByText("Technology")).toBeInTheDocument();
    });
  });

  test("getGeneralNews is called on mount", async () => {
    await act(async () => {
      await waitFor(() => expect(getGeneralNews).toHaveBeenCalledTimes(1));
    });
  });
  test("displays news articles", async () => {
    const articleData = [
      {
        title: "Article 1",
        urlToImage: "image1.jpg",
        description: "Description 1",
        url: "url1",
      },
      {
        title: "Article 2",
        urlToImage: "image2.jpg",
        description: "Description 2",
        url: "url2",
      },
      {
        title: "Article 3",
        urlToImage: "image3.jpg",
        description: "Description 3",
        url: "url3",
      },
    ];
    getGeneralNews.mockResolvedValueOnce(articleData);
    await act(async () => {
      await waitFor(() => expect(getGeneralNews).toHaveBeenCalledTimes(1));
    });
  });

  test("onError function is called when image fails to load", async () => {
    getGeneralNews.mockResolvedValueOnce([
      {
        title: "Article 1",
        urlToImage: "invalid-image.jpg",
        description: "Description 1",
        url: "url1",
      },
    ]);

    await act(async () => {
      await waitFor(() => expect(getGeneralNews).toHaveBeenCalledTimes(1));
      const brokenImage = screen.getByAltText("Article 1");
      fireEvent.error(brokenImage);
    });
  });

  test("navigates to the selected category", async () => {
    await act(async () => {
      await waitFor(() => expect(getGeneralNews).toHaveBeenCalledTimes(1));
      const navigate = useNavigate();
      const businessTab = screen.getByRole("link", { name: /business/i });
      fireEvent.click(businessTab);
      expect(navigate).toHaveBeenCalledWith("/business", { replace: true });
    });
  });
});
