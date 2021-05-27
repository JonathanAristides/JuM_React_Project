import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/JUMLogo-png.png";
import "./navbar.scss";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const extendElement = () => {
    if (window.innerWidth < 960) {
      dropdown ? setDropdown(false) : setDropdown(true);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-Logo">
        <img src={logo} alt="Logo" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li
          className="nav-item"
          onClick={extendElement}
          onMouseLeave={onMouseLeave}
          onMouseEnter={onMouseEnter}
        >
          <Link to="#" className="nav-links">
            Dienste
          </Link>
          {dropdown && <Dropdown CloseMobileMenu={closeMobileMenu} />}
        </li>
        <li className="nav-item">
          <Link to="/kontakt" className="nav-links" onClick={closeMobileMenu}>
            Kontakt
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/ueberuns" className="nav-links" onClick={closeMobileMenu}>
            Über uns
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
