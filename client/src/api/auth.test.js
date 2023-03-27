// Import the functions to be tested
import { login, signup, updatePreferences } from "./auth";
import axios from "./axios";

// Mock the axios module
jest.mock("./axios", () => ({
  post: jest.fn(),
}));

describe("Auth functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Test the login function
  describe("login", () => {
    it("should make a POST request to /login with the correct data", async () => {
      const username = "testuser";
      const password = "testpass";
      const expectedResponse = { data: { user: { accessToken: "token" } } };
      axios.post.mockResolvedValueOnce({ data: expectedResponse });
      const response = await login(username, password);
      expect(axios.post).toHaveBeenCalledWith(
        "/login",
        { username, password },
        { headers: { "Content-Type": "application/JSON" } }
      );
      expect(response).toEqual(expectedResponse);
    });
  });

  // Test the signup function
  describe("signup", () => {
    it("should make a POST request to /add-user with the correct data", async () => {
      const username = "testuser";
      const password = "testpass";
      const expectedResponse = { success: true };
      axios.post.mockResolvedValueOnce({ data: expectedResponse });
      const response = await signup(username, password);
      expect(axios.post).toHaveBeenCalledWith(
        "/add-user",
        { username, password },
        { headers: { "Content-Type": "application/JSON" } }
      );

      expect(response).toEqual(expectedResponse);
    });
  });

  // Test the updatePreferences function
  describe("updatePreferences", () => {
    it("should make a POST request to /update-preferences with the correct data", async () => {
      const userId = "123";
      const preferences = { theme: "dark", language: "en" };
      const expectedResponse = { success: true };
      axios.post.mockResolvedValueOnce({ data: expectedResponse });
      const response = await updatePreferences(userId, preferences);
      expect(axios.post).toHaveBeenCalledWith(
        "/update-preferences",
        { userId, preferences },
        { headers: { "Content-Type": "application/JSON" } }
      );
      expect(response).toEqual(expectedResponse);
    });
  });
});
