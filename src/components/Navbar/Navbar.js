import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/JUMLogo-png.png";
import "./navbar.scss";
import Dropdown from "./Dropdown";
import useWindowDimensions from "../WindowDimensions/getWindowDimensions";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  //active link detection (not nice but it works)
  let location = useLocation();
  let currentWidth = useWindowDimensions().width;

  useEffect(() => {
    let activeSite = location.pathname.toLowerCase();
    const services = document.getElementById("dienste");
    const contact = document.getElementById("kontakt");
    const about = document.getElementById("ueberuns");
    if (currentWidth < 960) {
      contact.style.color = "white";
      contact.style.fontWeight = "400";

      services.style.color = "white";
      services.style.fontWeight = "400";
      about.style.color = "white";
      about.style.fontWeight = "400";
    } else {
      if (activeSite.includes("services")) {
        services.style.color = "var(--mainColor)";
        services.style.fontWeight = "600";

        contact.style.color = "black";
        contact.style.fontWeight = "400";
        about.style.color = "black";
        about.style.fontWeight = "400";
      } else if (activeSite.includes("kontakt")) {
        contact.style.color = "var(--mainColor)";
        contact.style.fontWeight = "600";

        services.style.color = "black";
        services.style.fontWeight = "400";
        about.style.color = "black";
        about.style.fontWeight = "400";
      } else if (activeSite.includes("ueberuns")) {
        about.style.color = "var(--mainColor)";
        about.style.fontWeight = "600";

        services.style.color = "black";
        services.style.fontWeight = "400";
        contact.style.color = "black";
        contact.style.fontWeight = "400";
      } else {
        about.style.color = "black";
        about.style.fontWeight = "400";
        services.style.color = "black";
        services.style.fontWeight = "400";
        contact.style.color = "black";
        contact.style.fontWeight = "400";
      }
    }
  }, [location, currentWidth]);

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
