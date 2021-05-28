import React from "react";
import "./buttonStyle.scss";

const Button = () => {
  return (
    <button className="contactButton">
      <svg
        className="buttonSvg"
        width="47"
        height="34"
        viewBox="0 0 47 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.2143 0.5H3.78571C2.91429 0.5 2.07855 0.847677 1.46236 1.46655C0.846172 2.08542 0.5 2.92479 0.5 3.8V30.2C0.5 31.0752 0.846172 31.9146 1.46236 32.5335C2.07855 33.1523 2.91429 33.5 3.78571 33.5H43.2143C44.0857 33.5 44.9214 33.1523 45.5376 32.5335C46.1538 31.9146 46.5 31.0752 46.5 30.2V3.8C46.5 2.92479 46.1538 2.08542 45.5376 1.46655C44.9214 0.847677 44.0857 0.5 43.2143 0.5ZM39.6 3.8L23.5 14.987L7.4 3.8H39.6ZM3.78571 30.2V5.3015L22.5636 18.353C22.8386 18.5446 23.1653 18.6473 23.5 18.6473C23.8347 18.6473 24.1614 18.5446 24.4364 18.353L43.2143 5.3015V30.2H3.78571Z"
          fill="white"
        />
      </svg>
      <p className="contactbuttonText">Kontakt</p>
    </button>
  );
};

export default Button;
