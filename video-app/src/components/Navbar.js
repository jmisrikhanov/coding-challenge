import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { LogOut } from "../authorisation/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "white" }}>
            React Video App
          </Link>
          <div className="buttons">
            {currentUser ? (
              <h3>{currentUser.displayName}</h3>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/")}
              >
                Login
              </button>
            )}

            {currentUser ? (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => LogOut()}
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                className="ms-2 btn btn-outline-light"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
