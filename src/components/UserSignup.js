import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../redux/SignupAction";
import { useNavigate } from "react-router-dom";

const UserSignup = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ email, password, userName, phone }));
    navigate("/login");
  };

  return (
    <>
      <div className="login-container">
        <div className="login-row">
          <div className="image-div">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="login-image"
              alt="PhoneImage"
            />
          </div>
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="login-header">
                <h3>User Signup</h3>
                <br />
              </div>

              {/* error message */}
              {props.loginErr && (
                <p className="err" style={{ color: "red" }}>
                  {props.loginErr}
                </p>
              )}

              {/* Name input */}
              <div className="email-error">
                <input
                  type="text"
                  name="name"
                  id="form1Example03"
                  className="form-control form-control-lg"
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  required
                />
                <label className="form-label">User Name</label>
              </div>

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
                <label className="form-label">Email address</label>
              </div>

              {/* Phone input */}
              <div className="password-error">
                <input
                  type="tel"
                  name="Phone"
                  id="form1Example3"
                  className="form-control form-control-lg"
                  required
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <label className="form-label">Phone</label>
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
                <label className="form-label">Password</label>
              </div>

              <div className="signup-button">
                <Link to={"/login"}>
                  <span>Already have an Account ?</span>
                </Link>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSignup;
