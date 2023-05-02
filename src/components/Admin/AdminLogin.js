import React from "react";

const AdminLogin = (props) => {
  return (
    <>
      <div className="admin-login-container">
        <div className="admin-login-row">
          <div className="admin-login-img">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="PhoneImage"
            />
          </div>
          <div className="admin-login-form">
            <form>
              <div className="admin-form-text">
                <h3>Admin Login</h3>
                <br />
              </div>

              {/* error message */}
              {props.adminErr && (
                <p className="err" style={{ color: "red" }}>
                  {props.adminErr}
                </p>
              )}

              {/* Email input */}
              <div className="admin-form-email">
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
              <div className="admin-form-password">
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

              {/* Submit button */}
              <button type="submit" className="admin-form-button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
