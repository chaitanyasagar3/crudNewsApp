import React, { useState } from "react";
import styled from "styled-components";

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputField = styled.input`
  margin: 20px;
  padding: 20px;
  width: 300px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const SubmitButton = styled.button`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #0077ff;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <SignInWrapper>
      <Title>Sign In</Title>
      <Form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </SignInWrapper>
  );
};

export default SignInPage;
