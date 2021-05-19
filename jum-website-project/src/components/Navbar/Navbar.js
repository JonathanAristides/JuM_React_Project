import React from "react";
import Logo from "./Logo/Logo";
import "./navbarStyles.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logoSvg">
        <Logo />
      </div>

      <ul>
        <li>Dienstleistungen</li>
        <li>Kontakt</li>
        <li>Unser Team</li>
      </ul>
    </div>
  );
};

export default Navbar;
