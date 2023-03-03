import React from "react";
// import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "../../styles/LandingPage.css";

// export async function loadNews() {
//   const news = await fetchNews();
//   return { news };
// }

function LandingPage(props) {
  // const { news } = useLoaderData();
  let auth = useAuth();

  return (
    <>
      <div className="WelcomeMessage">
        {auth.user ? (
          <h1>Welcome, {auth.user.username}!</h1>
        ) : (
          <h1>Welcome, Guest!</h1>
        )}
        <p>This is your landing page.</p>
      </div>
    </>
  );
}

export default LandingPage;
