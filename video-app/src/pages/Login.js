import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../authorisation/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});
  const [err, setErr] = useState({});

  const handleChange = (e) =>
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });

  const handleSignIn = () => {
    try {
      SignIn(userInfo?.email, userInfo?.password)
        .then((r) => {
          setErr(r);
          navigate("/");
        })
        .catch((e) => setErr(e));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="register-form">
        <h1 className="form-title display-3">Login</h1>
        <form id="login">
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
              value={userInfo?.password || ""}
            />
          </div>
          <input
            type="button"
            className="btn btn-primary form-control"
            value="Login"
            onClick={handleSignIn}
          />
        </form>
        {err && <div className="error-message">{err.errorMessage}</div>}
      </div>
      <div className="form-image">
        <img src={"https://picsum.photos/1200/900"} alt="sample" />
      </div>
    </div>
  );
};

export default Login;
