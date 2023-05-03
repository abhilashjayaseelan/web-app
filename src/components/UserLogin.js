import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import firebase from "../firebase/config";

const UserLogin = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      <div className="login-container">
        <div className="login-row">
          <div className="image-div">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="login-image"
              alt="PhoneImage"
            />
          </div>
          <div className="login-form">
            <form onSubmit={handleLogin}>
              <div className="login-header">
                <h3>User Login</h3>
                <br />
              </div>

              {/* error message */}
              {props.loginErr && (
                <p className="err" style={{ color: "red" }}>
                  {props.loginErr}
                </p>
              )}

              {/* Email input */}
              <div className="email-error">
                <input
                  type="email"
                  name="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label className="form-label" htmlFor="form1Example13">
                  Email address
                </label>
              </div>

              {/* Password input */}
              <div className="password-error">
                <input
                  type="password"
                  name="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  required
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <label className="form-label" htmlFor="form1Example23">
                  Password
                </label>
              </div>

              <div className="signup-button">
                <Link to={"/signup"}>
                  <span>Create New Account ?</span>
                </Link>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
