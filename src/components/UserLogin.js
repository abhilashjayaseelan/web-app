import React from "react";
import { Link } from "react-router-dom";

const UserLogin = (props) => {
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
            <form>
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
                type="submit-button"
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
