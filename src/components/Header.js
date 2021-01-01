import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div id="header-css">
      <Link id="return-link" to="/">Return</Link>
      <div id="header-title">Portfolio</div>
    </div>
  );
}

export default Header;
