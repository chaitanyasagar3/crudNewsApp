import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Signup.css";
import { signup } from "../../api/auth";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const passwordError = validatePassword(formData.password, formData.confirmPassword);
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
    } else if (passwordError) {
      setErrorMessage(passwordError);
    } else {
      // handle form submission here
      try {
        const response = await signup(formData.username, formData.password);
        const user = response;
        if (user) {
          window.alert("User created successfully");
          navigate("/login", { replace: true });
        }
        //navigate("/login");
      } catch (error) {
        if (error.response?.status === 409) {
          setErrorMessage("Username already exists");
        }
        else if (error.response?.status === 400) {
          setErrorMessage("Unable to connect to server");
        }
        else{
          setErrorMessage("Sign up failed");
        }
      }
      console.log("Form submitted");
    }
    
    
  };

  const handleCancel = () => {
    navigate("/login");
  };

  const validatePassword = (password,confirmPassword) => {
    if (password.includes(" ") || confirmPassword.includes(" ")) {
      return "Password cannot contain spaces";
    }
    if ((password.length < 8) || (confirmPassword.length < 8)) {
      return "Password must be at least 8 characters long";
    }
    if ((!/[A-Z]/.test(password))||(!/[A-Z]/.test(confirmPassword))) {
      return "Password must contain at least one uppercase letter";
    }
    if ((!/[a-z]/.test(password))||(!/[a-z]/.test(confirmPassword))) {
      return "Password must contain at least one lowercase letter";
    }
    if ((!/[^a-zA-Z]/.test(password))||(!/[^a-zA-Z]/.test(confirmPassword))) {
      return "Password must contain at least one non-letter character";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match";
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
        <h1>Welcome To CRUDNews</h1>
        <div
          className="<form-group mb-4 d-flex flex-column align-items-center"
          // style={{ width: "100%" }}
        >
          <label htmlFor="username" style={{ color: "white", padding: "10px" }}>
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Username"
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
          <label htmlFor="password" style={{ color: "white", padding: "10px" }}>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
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
          <label
            htmlFor="confirmPassword"
            style={{ color: "white", padding: "10px" }}
          >
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
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
        <div
          className="d-flex justify-content-center"
          style={{ paddingTop: "20px" }}
        >
          <button onClick={handleCancel} className="btn btn-primary">
            Cancel
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
