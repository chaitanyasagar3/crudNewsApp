import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GuestLanding from "./GuestLanding";
import { BrowserRouter } from "react-router-dom";
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
    renderValue = await act( async () => render(<GuestLanding/>));
  });

  test("renders the form and its elements", async() => {
      expect(await renderValue.getByText("Welcome Guest!")).toBeInTheDocument();
  });


});
