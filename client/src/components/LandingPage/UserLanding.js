import React from "react";
import useAuth from "../../hooks/useAuth";

const UserLanding = () => {
  let auth = useAuth();
  return (
    <div>
      <h1>Welcome {auth.user.username}!</h1>
    </div>
  );
};

export default UserLanding;
