import React, { useState } from "react";
import LandingScreen from "./LandingScreen";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("Rini Joseph");

  const handleLogin = (username) => {
    setLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
  };

  if (loggedIn) {
    return <LandingScreen username={username} onLogout={handleLogout} />;
  } else {
    return <LandingScreen username={username} onLogout={handleLogout} />;
  }
}

export default App;
