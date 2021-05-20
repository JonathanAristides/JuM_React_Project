import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./dropdown.scss";

const Dropdown = ({ CloseMobileMenu }) => {
  const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={CloseMobileMenu}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {MenuItems.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={item.className}
              to={item.path}
              onClick={() => {
                setClick(false);
              }}
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
