import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Header = () => {
  const [btn_name, setBtn_name] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo Image" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
