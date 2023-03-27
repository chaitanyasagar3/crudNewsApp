import useAuth from "./src/hooks/useAuth";

export const mockUserLoggedIn = () => {
  useAuth.mockReturnValue({
    user: {
      username: "test1",
    },
    signOut: jest.fn(),
    signIn: jest.fn(),
    updatePreferences: jest.fn(),
  });
};

export const mockUserNotLoggedIn = () => {
  useAuth.mockReturnValue({
    user: null,
    signOut: jest.fn(),
    signIn: jest.fn(),
    updatePreferences: jest.fn(),
  });
};
