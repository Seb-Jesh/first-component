import React from "react";
import { Link } from "react-router-dom";

import paysmartLogo from "./images/paysmartLogo.jpg";

const Header = () => {
  return (
    <header className="Header">
      <img src={paysmartLogo} alt="PaySmart Logo"></img>
      <h1>PAYSMART PAYMENT PORTAL</h1>
      <Link className="link" to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link className="link" to="/mtn">
        MTN Normal
      </Link>
      |{" "}
      <Link className="link" to="/mtnmifi">
        MTN Mifi
      </Link>
      |{" "}
      <Link className="link" to="/mtnrouter">
        MTN Router
      </Link>
      |{" "}
      <Link className="link" to="/airtel">
        Airtel
      </Link>
    </header>
  );
};

export default Header;
