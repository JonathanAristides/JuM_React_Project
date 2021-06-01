import React from "react";
import AboutSvg from "../../../assets/svg/AboutSvg";
import "./aboutpageStyle.scss";

const AboutPage = () => {
  return (
    <div className="aboutContainer">
      <div className="aboutText">
        <p className="aboutFirmName">JUNGBAUER & MODERINSKY FACILITY GMBH</p>
        <p className="aboutSlogan">
          Wir sind für Sie im
          <br />
          <span className="aboutUnderline">Einsatz</span>
        </p>
      </div>
      <div className="aboutSvg">
        <AboutSvg />
      </div>
      {/* Space for About stuff */}
      <div className="AboutStuff"></div>
    </div>
  );
};

export default AboutPage;
