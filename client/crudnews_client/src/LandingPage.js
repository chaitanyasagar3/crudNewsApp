import React from "react";
import styled from "styled-components";

const LandingScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeMessage = styled.div`
  text-align: center;
  padding-top: 150px;
`;

const UserInfo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  p {
    margin-right: 10px;
  }
`;

function LandingPage(props) {
  const { username, onLogout } = props;

  console.log(username);

  return (
    <LandingScreenWrapper>
      <WelcomeMessage>
        <h1>Welcome, {username}!</h1>
        <p>This is your landing page.</p>
      </WelcomeMessage>
      <UserInfo>
        <p>Logged in as {username}</p>
        <button onClick={onLogout}>Logout</button>
      </UserInfo>
    </LandingScreenWrapper>
  );
}

export default LandingPage;
