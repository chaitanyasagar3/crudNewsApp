import React, { useMemo, useState, useCallback, useEffect } from "react";
import { clearFromStorage, getFromStorage, setToStorage } from "../../utils";
import { USER_LOCAL_STORAGE_KEY } from "../../constants";
import AuthContext from "../../config/AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [appLoaded, setAppLoaded] = useState(false);
  const [refreshArticles, setRefreshArticles] = useState(false);

  useEffect(() => {
    setUser(getFromStorage(USER_LOCAL_STORAGE_KEY) || null);
    setAppLoaded(true);
  }, []);

  const signIn = useCallback(async (loggedInUser, callback) => {
    setUser(loggedInUser);
    setToStorage(USER_LOCAL_STORAGE_KEY, loggedInUser);
    callback();
  }, []);

  const signOut = useCallback(async (callback) => {
    setUser();
    clearFromStorage(USER_LOCAL_STORAGE_KEY);
    callback();
  }, []);

  const updatePreferences = useCallback(async (preferences) => {
    
    const updatedUser = { ...getFromStorage(USER_LOCAL_STORAGE_KEY), preferences };
    setUser(updatedUser);
    setToStorage(USER_LOCAL_STORAGE_KEY, updatedUser);
     
  },[]);


  const authValues = useMemo(
    () => ({ user, signIn, signOut , updatePreferences, refreshArticles, setRefreshArticles}),
    [user, signIn, signOut, updatePreferences, refreshArticles, setRefreshArticles]
  );

  return (
    <AuthContext.Provider value={authValues}>
      {appLoaded ? children : <>Loading</>}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
