import React, { useState } from "react";
import img from "../../assests/news.png";
import "../../styles/Signup.css";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const passwordError = validatePassword(formData.password);
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else if (passwordError) {
      setErrorMessage(passwordError);
    } else {
      // handle form submission here
      console.log("Form submitted");
    }
  };
  const validatePassword = (password) => {
    if (password.includes(" ")) {
      return "Password cannot contain spaces";
    }
    if (password.length < 8) {
      return "Password must be at least 8 characters long";
    }
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!/[^a-zA-Z]/.test(password)) {
      return "Password must contain at least one non-letter character";
    }
    return null;
  };
  const handleFormClick = () => {
    setErrorMessage("");
  };
  return (
    <div
      className="signup-container d-flex justify-content-center"
      onClick={handleFormClick}
    >
      <form onSubmit={handleSubmit} className="signup-form">
        <div
          className="<form-group mb-4 d-flex flex-column align-items-center"
          // style={{ width: "100%" }}
        >
          <label htmlFor="username" style={{ color: "white" }}>
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            style={{ width: "300px", height: "50px" }}
          />
        </div>
        <div
          className="<form-group mb-4 d-flex flex-column align-items-center"
          // style={{ width: "300px" }}
        >
          <label htmlFor="password" style={{ color: "white" }}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            style={{ width: "300px", height: "50px" }}
          />
        </div>
        <div
          className="<form-group mb-4 d-flex flex-column align-items-center"
          // style={{ width: "300px" }}
        >
          <label htmlFor="confirmPassword" style={{ color: "white" }}>
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
            style={{ width: "300px", height: "50px" }}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        {errorMessage && (
          <div className="alert alert-danger mt-3" role="alert">
            {errorMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default SignUpPage;

// import React from "react";

// const Signup = () => {
//   return <div>Signup page</div>;
// };

// export default Signup;
