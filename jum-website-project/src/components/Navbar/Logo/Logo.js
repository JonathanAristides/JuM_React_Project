import React from "react";
import "./logoStyles.scss";
import { motion } from "framer-motion";

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};

const Logo = () => {
  return (
    <motion.div className="logo">
      <svg
        id="Ebene_1"
        data-name="Ebene 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 323.7 278.62"
      >
        <path
          className="svgLetters"
          d="M1100.37,332.71l-69.86,165.83L960.47,333v-.48l-35.41,0v.19h0V539.84q-1.37,14.29-9.31,24.18-9.62,11.93-29.24,11.94T857,563.5q-9.82-12.5-10.23-32.42l-35,0q0,35.55,20.46,56t54.3,20.45q33.48,0,53.86-20.18t20.34-53.74l-.14-127.78L1019,544.18h22.71l61-144.84V544.18h32.77V332.71Z"
          transform="translate(-811.74 -332.48)"
        />
        <text className="svgText" transform="translate(155.07 234.57)">
          Jungbauer
          <tspan x="0" y="29.67">
            &amp; Moderinsky
          </tspan>
        </text>
        <polyline
          className="svgLetters"
          points="146.26 27.52 146.26 27.52 147.26 27.52"
        />
      </svg>
    </motion.div>
  );
};

export default Logo;
