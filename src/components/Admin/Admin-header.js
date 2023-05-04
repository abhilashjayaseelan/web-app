import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return <h2 style={{paddingLeft: '20px'}}> Admin Dashboard</h2>;
};

const AdminHeader = () => {
  return (
    <div>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              <Link to="">Dash</Link>
            </li>
            <li>
              <Link to="">Users</Link>
            </li>
            <li>
              <Link to="">Products</Link>
            </li>

            <li>
              <button className="logout-button">
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
