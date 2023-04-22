import React, { useState } from "react";
import "../../styles/SignInPage.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Alert } from "react-bootstrap";
import { login } from "../../api/auth";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/sign-up" } };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    if (!username || !password) {
      throw new Error("Username and password are required.");
    }
    event.preventDefault();

    try {
      const response = await login(username, password);
      // Handle form submission here

      const { user } = response?.data;
      auth.signIn(user, () => {
        // Send them back to the page they tried to visit when they were
        // redirected to the login page. Use { replace: true } so we don't create
        // another entry in the history stack for the login page.  This means that
        // when they get to the protected page and click the back button, they
        // won't end up back on the login page, which is also really nice for the
        // user experience.
        navigate("/", { replace: true });
      });
    } catch (error) {
      console.log(error);
      if (!error.response) {
        setError("No server Response");
      } else if (error.response?.status === 400) {
        setError("Username or password not found");
      } else if (error.response?.status === 401) {
        setError("Unauthorized");
      } else {
        setError("Log in Failed");
      }
    }
  };

  return (
    <div>
      <div className="signin-container">
        {error && (
          <Alert
            className="alert alert-danger mt-3"
            role="alert"
            variant="danger"
            dismissible
          >
            {error}
          </Alert>
        )}
        <h1>Welcome To CRUDNews</h1>
        <div className="signin-form">
          <form onSubmit={handleSubmit}>
            <div className="<form-group mb-4 d-flex flex-column align-items-center">
              <label
                htmlFor="username"
                style={{ color: "white", padding: "10px" }}
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                style={{ width: "300px", height: "50px" }}
              />
              <div
                className="<form-group mb-4 d-flex flex-column align-items-center"
                // style={{ width: "300px" }}
              >
                <label
                  htmlFor="password"
                  style={{ color: "white", padding: "10px" }}
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  style={{ width: "300px", height: "50px" }}
                />
                <div
                  className="form-group mb-4 d-flex flex-column align-items-center"
                  style={{ paddingTop: "30px" }}
                >
                  <button  label="button" type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
                <div className="form-group mb-4 d-flex flex-column align-items-center ">
                  <Link to="/sign-up" className="btn btn-primary">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
