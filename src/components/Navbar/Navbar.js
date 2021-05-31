import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/JUMLogo-png.png";
import "./navbar.scss";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  //active link detection (not nice but it works)
  let location = useLocation();
  useEffect(() => {
    let activeSite = location.pathname.toLowerCase();
    if (activeSite.includes("services")) {
      document.getElementById("dienste").style.color = "var(--mainColor)";
      document.getElementById("dienste").style.fontWeight = "600";

      document.getElementById("kontakt").style.color = "black";
      document.getElementById("kontakt").style.fontWeight = "400";
      document.getElementById("ueberuns").style.color = "black";
      document.getElementById("ueberuns").style.fontWeight = "400";
    } else if (activeSite.includes("kontakt")) {
      document.getElementById("kontakt").style.color = "var(--mainColor)";
      document.getElementById("kontakt").style.fontWeight = "600";

      document.getElementById("dienste").style.color = "black";
      document.getElementById("dienste").style.fontWeight = "400";
      document.getElementById("ueberuns").style.color = "black";
      document.getElementById("ueberuns").style.fontWeight = "400";
    } else if (activeSite.includes("ueberuns")) {
      document.getElementById("ueberuns").style.color = "var(--mainColor)";
      document.getElementById("ueberuns").style.fontWeight = "600";

      document.getElementById("dienste").style.color = "black";
      document.getElementById("dienste").style.fontWeight = "400";
      document.getElementById("kontakt").style.color = "black";
      document.getElementById("kontakt").style.fontWeight = "400";
    } else {
      document.getElementById("ueberuns").style.color = "black";
      document.getElementById("ueberuns").style.fontWeight = "400";
      document.getElementById("dienste").style.color = "black";
      document.getElementById("dienste").style.fontWeight = "400";
      document.getElementById("kontakt").style.color = "black";
      document.getElementById("kontakt").style.fontWeight = "400";
    }
  }, [location]);

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
      <Link id="home" to="/" className="navbar-Logo">
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
          <Link id="dienste" to="#" className="nav-links">
            Dienste
          </Link>
          {dropdown && <Dropdown CloseMobileMenu={closeMobileMenu} />}
        </li>
        <li className="nav-item">
          <Link
            id="kontakt"
            to="/kontakt"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Kontakt
          </Link>
        </li>

        <li className="nav-item">
          <Link
            id="ueberuns"
            to="/ueberuns"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Über uns
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
