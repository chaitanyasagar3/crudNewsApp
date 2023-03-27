import React from "react";
// import { useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import GuestLanding from "./GuestLanding";
import UserLanding from "./UserLanding";

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
      <div className="LandingPage">
        {auth.user ? (
          <UserLanding />
        ) : (
          <GuestLanding  />
        )}
      </div>
    </>
  );
}

export default LandingPage;
