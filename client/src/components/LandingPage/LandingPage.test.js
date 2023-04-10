import React from "react";
import { getByTestId, render ,screen} from "@testing-library/react";
import LandingPage from "./LandingPage";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../../config/AuthContext";
import { act } from "react-dom/test-utils";
import { mockUserLoggedIn, mockUserNotLoggedIn } from "../../../test-utils";


jest.mock("../../hooks/useAuth", () => ({
  __esModule: true,
  default: jest.fn(),
  useAuth: jest.fn(),
}));
jest.mock("../../api/news", () => ({
  getGeneralNews: jest.fn(),
}));

jest.mock("../../api/auth", () => ({
  updatePreferences: jest.fn(),
}));

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

describe("LandingPage", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test("should render GuestLanding when user is not authenticated", async() => {
    mockUserNotLoggedIn()
    let renderValue;
    await act(async () => {
        renderValue = render(<LandingPage/>, { wrapper: AuthProvider });
      });
      await act(async() => {
        expect(screen.getByTestId("guest-landing")).toBeInTheDocument();
      });
  });

  test("should render UserLanding when user is authenticated", async() => {
    mockUserLoggedIn()
    let renderValue;
    await act(async () => {
        renderValue = render(<LandingPage/>, { wrapper: AuthProvider });
      });

    await act(async() => {
        // expect(screen.getByText(`Welcome test1!`)).toBeInTheDocument();
        expect(screen.getByTestId("user-landing")).toBeInTheDocument();
      });
  });

});
