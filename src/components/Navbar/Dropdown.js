import React, { useState } from "react";
import { Services } from "../Data/Services.json";
import { Link } from "react-router-dom";

const Dropdown = ({ CloseMobileMenu }) => {
  const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);

  return (
    <ul
      onClick={CloseMobileMenu}
      className={click ? "dropdown-menu clicked" : "dropdown-menu"}
    >
      {Services.map((item, index) => {
        return (
          <li key={index}>
            <Link
              className={item.className}
              to={`/Services/${item.title}`}
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
