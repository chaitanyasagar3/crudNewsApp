import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";
import { Alert } from "react-bootstrap";

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(127, 21, 21);
  padding: 100px;
  // background-color: black;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
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
  width: 150px;
  border-radius: 5px;
  border: none;
  background-color: gray;
  color: #fff;
  cursor: pointer;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    try {
      if (!username || !password) {
        throw new Error("Username and password are required.");
      }
      event.preventDefault();

      // Handle form submission here
      auth.signIn({ username: "CS" }, () => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate(from, { replace: true });
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <SignInWrapper>
        {error && (
          <Alert variant="danger" dismissible>
            {error}
          </Alert>
        )}
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
    </div>
  );
};

export default SignInPage;
