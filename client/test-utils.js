import useAuth from "./src/hooks/useAuth";

export const mockUserLoggedIn = () => {
  useAuth.mockReturnValue({
    user: {
      username: "test1",
      preferences: {
        general: "true",
        business: "false",
        entertainment: "false",
        health: "false",
        science: "false",
        sports: "false",
        technology: "false",
      },
    },
    setRefreshArticles: jest.fn(),
    refresh: jest.fn(),
    signOut: jest.fn(),
    signIn: jest.fn(),
    updatePreferences: jest.fn(),
  });
};

export const mockUserNotLoggedIn = () => {
  useAuth.mockReturnValue({
    user: null,
    setRefreshArticles: jest.fn(),
    refresh: jest.fn(),
    signOut: jest.fn(),
    signIn: jest.fn(),
    updatePreferences: jest.fn(),
  });
};
