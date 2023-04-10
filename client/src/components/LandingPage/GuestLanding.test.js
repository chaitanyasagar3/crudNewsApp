import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  screen,
  act,
} from "@testing-library/react";
import GuestLanding from "./GuestLanding";
import { getNewsByCategory } from "../../api/news";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../../api/news", () => ({
  getNewsByCategory: jest.fn(),
}));

describe("GuestLanding", () => {
  let renderValue;

  beforeEach(async () => {
    getNewsByCategory.mockResolvedValueOnce([
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

  // ... other test cases ...

  test("getNewsByCategory is called on mount", async () => {
    await act(async () => {
      await waitFor(() => expect(getNewsByCategory).toHaveBeenCalledTimes(1));
      expect(getNewsByCategory).toHaveBeenCalledWith("general");
    });
  });

  // test("renders the form and its elements", async () => {
  //   await act(async () => {
  //     expect(await renderValue.getByText("CRUDNEWSAPP")).toBeInTheDocument();
  //   });
  // });



  // test("sign up button works", async () => {
  //   const { getByRole } = renderValue;
  //   await act(async () => {
  //     const signUpButton = await getByRole("button", { name: "Sign Up Here!" });
  //     fireEvent.click(signUpButton);
  //     expect(signUpButton).toBeInTheDocument();
  //   });
  // });

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


});
