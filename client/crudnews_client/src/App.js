// import React, { useState } from "react";
// import styled from "styled-components";
// import { Routes, Route, Link } from "react-router-dom";
// import SignInPage from "./SignInPage";
// import LandingPage from "./LandingPage";

// const AppWrapper = styled.div`
//   height: 100%;
// `;

// const LogoutButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   padding: 10px;
//   border-radius: 5px;
//   border: none;
//   background-color: #0077ff;
//   color: #fff;
//   cursor: pointer;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
// `;

// const App = () => {
//   const [authenticated, setAuthenticated] = useState(false);
//   const [username, setUsername] = useState("");

//   const handleLogin = (username) => {
//     setUsername(username);
//     setAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setAuthenticated(false);
//     setUsername("");
//   };

//   return (
//     <AppWrapper>
//       <Routes>
//         <Route path="/" element={<SignInPage onLogin={handleLogin} />} />
//         <Route
//           path="/landing-page"
//           element={<LandingPage username={username} onLogout={handleLogout} />}
//         />
//       </Routes>
//       {authenticated && (
//         <LogoutButton onClick={handleLogout}>
//           <Link to="/">Log Out</Link>
//         </LogoutButton>
//       )}
//     </AppWrapper>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import styled from "styled-components";
// import { Routes, Route, Link, useHistory } from "react-router-dom";
// import SignInPage from "./SignInPage";
// import LandingPage from "./LandingPage";

// const AppWrapper = styled.div`
//   height: 100%;
// `;

// const LogoutButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 10px;
//   padding: 10px;
//   border-radius: 5px;
//   border: none;
//   background-color: #0077ff;
//   color: #fff;
//   cursor: pointer;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
// `;

// const App = () => {
//   const [authenticated, setAuthenticated] = useState(false);
//   const [username, setUsername] = useState("");

//   const handleLogin = (username) => {
//     setUsername(username);
//     setAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setAuthenticated(false);
//     setUsername("");
//   };

//   return (
//     <AppWrapper>
//       <Routes>
//         <Route path="/" element={<SignInPage onLogin={handleLogin} />} />
//         <Route
//           path="/landing-screen"
//           element={<LandingPage username={username} onLogout={handleLogout} />}
//         />
//       </Routes>
//       {authenticated && (
//         <LogoutButton onClick={handleLogout}>
//           <Link to="/">Log Out</Link>
//         </LogoutButton>
//       )}
//     </AppWrapper>
//   );
// };

// export default App;

import React, { useState } from "react";
import LandingPage from "./LandingPage";
import SignInPage from "./SignInPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
  return <SignInPage username={username} onLogout={handleLogout} />;
  // if (loggedIn) {
  //   return <LandingPage username={username} onLogout={handleLogout} />;
  // } else {
  //   return <LandingPage username={username} onLogout={handleLogout} />;
  // }
}

export default App;
