import { createContext } from "react";

const AuthContext = createContext({
  user: {},
  signIn: () => {},
  signOut: () => {},
  updatePreferences: () => {},
});

export default AuthContext;
