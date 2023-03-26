import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import UserLanding from "./UserLanding";
import { getGeneralNews } from "../../api/news";
import { act } from "react-dom/test-utils";
import AuthProvider from "../../hoc/Authentication/AuthProvider";


jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  default: () => ({user: { username: "test1" }}),
  useAuth: jest.fn(() => ({
    user:{ username: "test1" }
  })),
}));

jest.mock("../../api/news", () => ({
  getGeneralNews: jest.fn(),

}));

jest.mock("../../api/auth", () => ({
    updatePreferences: jest.fn(),
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

describe("UserLanding", () => {
  let renderValue;
  beforeEach(async () => {
    // const auth = useAuth();
    await act(async () => {
      renderValue = render(<UserLanding/>, { wrapper: AuthProvider });
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test that getGeneralNews is called when the component mounts.
  test("getGeneralNews is called on mount", async () => {
    expect(getGeneralNews).toHaveBeenCalledTimes(1);
  });

  // Test that the refresh button works.

  test("refreshes news articles on click of refresh button", async () => {
    // Mock the response from getGeneralNews.
    const articles = [    {      title: "Article 1",      urlToImage: "image1.jpg",      source: { name: "Source 1" },      description: "Description 1",      url: "article1.com",    },  ];
    getGeneralNews.mockResolvedValueOnce(articles);
  
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

  //Test that the welcome message includes the user's username.
  test("displays welcome message with username", async () => {
    // Render the component.
    const {getByRole} = renderValue;
    // Wait for the articles to be fetched.
    await act(async() => {
      expect(screen.getByText(`Welcome test1!`)).toBeInTheDocument();
    });
  });


  //Test that the refresh button is displayed.

  test("refresh button works", async() => {
    const {getByRole} = renderValue;
    await act(async () => {
      const refreshButton = await getByRole("button", { name: "Refresh" });
      fireEvent.click(refreshButton);
      expect(refreshButton).toBeInTheDocument();
    });
  });
    
  
  //Test that the settings button is displayed.

  test("displays settings button", async () => {
    const {getByRole} = renderValue;
    // Wait for the articles to be fetched.
    await act(async()=>{
        const settingsButton = await getByRole("button", { name: "Settings" });
        fireEvent.click(settingsButton);
        expect(settingsButton).toBeInTheDocument();
    }
    );
  });

  
  //Test that clicking the settings button opens the settings modal.

  test("clicking settings button opens settings modal", async () => {
    const {getByRole} = renderValue;
    // Wait for the articles to be fetched.
    await act(async()=>{
    // Find the settings button and click it.
    const settingsButton = await getByRole("button", { name: "Settings" });
    settingsButton.click();
    // Expect the settings modal to be displayed.
    expect(screen.getByText("Settings")).toBeInTheDocument();
  });
});

});
