import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../authorisation/firebase";

const Register = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const handleRegister = () => {
    const { email, password, firstName, lastName } = userInfo;
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, displayName);
    navigate("/");
  };

  return (
    <div className="register">
      <div className="form-image">
        <img src={"https://picsum.photos/1200/900"} alt="sample" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register</h1>
        <form id="register">
          <div className="mb-3">
            <label htmlFor="first-name" className="form-label display-4">
              First Name
            </label>
            <input
              type="first-name"
              className="form-control"
              id="first-name"
              name="firstName"
              placeholder="Enter your first name..."
              onChange={handleChange}
              value={userInfo.firstName || ""}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className="form-label display-4">
              Last Name
            </label>
            <input
              type="last-name"
              className="form-control"
              id="last-name"
              name="lastName"
              placeholder="Enter your last name..."
              onChange={handleChange}
              value={userInfo.lastName || ""}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label display-4">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter your email address..."
              onChange={handleChange}
              value={userInfo.email || ""}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label display-4">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="Enter your password address..."
              onChange={handleChange}
              value={userInfo.password || ""}
            />
          </div>
          <input
            type="button"
            className="btn btn-primary form-control"
            value="Register"
            onClick={handleRegister}
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
