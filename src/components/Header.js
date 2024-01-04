import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btn_name, setBtn_name] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo Image" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {useOnlineStatus() ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() =>
                btn_name === "Login"
                  ? setBtn_name("Logout")
                  : setBtn_name("Login")
              }
            >
              {btn_name}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
