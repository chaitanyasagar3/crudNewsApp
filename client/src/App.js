import React from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { AuthProvider, RequiresAuth } from "./hoc/Authentication";

import Layout from "./components/Layout";
import Signup from "./components/Authentication/Signup";
import LandingPage from "./components/LandingPage/LandingPage";
import SignInPage from "./components/Authentication/SignInPage";



function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index  element={<LandingPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/sign-up" element={<Signup />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;

  // return <SignInPage username={username} onLogout={handleLogout} />;
  // if (loggedIn) {
  //   return <LandingPage username={username} onLogout={handleLogout} />;
  // } else {
  //   return <LandingPage username={username} onLogout={handleLogout} />;
  // }