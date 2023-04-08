import { createContext } from "react";

const AuthContext = createContext({
  user: {},
  refreshArticles: false,
  setRefreshArticles: () => {},
  signIn: () => {},
  signOut: () => {},
  updatePreferences: () => {},
});

export default AuthContext;
