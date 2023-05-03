import { LOGO_URL } from "../urls";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import firebase from "../firebase/config";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={LOGO_URL} />
    </a>
  );
};

const Header = () => {
  const user = useSelector((state) => state?.user.user);
  const navigate = useNavigate();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li>
            {user ? (
              <span>{`Hi  ${user}`}</span>
            ) : (
              <button className="login-button">
                <Link to={"/login"}>
                  <span>Login</span>
                </Link>
              </button>
            )}
          </li>
          {user && (
            <li>
              <button
                className="logout-button"
                onClick={() => {
                  firebase.auth().signOut();
                  navigate("/");
                }}
              >
                <span>Logout</span>
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
