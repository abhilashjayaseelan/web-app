import React, { useState } from "react";
import { AdminRef } from "../../constants";
import { useDispatch } from "react-redux";
import { adminAuthAction } from "../../slices/AdminAuthSlice";

const AdminLogin = (props) => {
  const [adminPass, setAdminPass] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [adminError, setAdminError] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (adminPass === AdminRef.password && adminEmail === AdminRef.email) {
      dispatch(adminAuthAction.adminLogin());
    } else {
      setAdminError("Check your email or password");
    }
  };
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
            <form onSubmit={handleSubmit}>
              <div className="admin-form-text">
                <h3>Admin Login</h3>
                {/* error message */}
                <p className="err" style={{ color: "red" }}>
                  {adminError}
                </p>
                <br />
              </div>

              {/* Email input */}
              <div className="admin-form-email">
                <input
                  type="email"
                  name="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={adminEmail}
                  onChange={(e) => {
                    setAdminEmail(e.target.value);
                  }}
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
                  value={adminPass}
                  onChange={(e) => {
                    setAdminPass(e.target.value);
                  }}
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
