import React from "react";
import Button from "../../Button/Button";
import Gallery from "../../Gallery/Gallery";
import HomepageSvg from "../../../assets/svg/HomepageSvg";
import "./homepageStyle.scss";

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <div className="homeText">
        <p className="firmNameMain">JUNGBAUER & MODERINSKY FACILITY GMBH</p>
        <p className="slogan">
          Wir bürgen für Qualität und
          <br />
          <span className="homeUnderline">Zuverlässigkeit</span>
        </p>
        <div className="homebutton">
          <Button />
        </div>
      </div>

      <div className="homepageSvg">
        <HomepageSvg />
      </div>

      <div className="homeslider">
        <Gallery />
      </div>
    </div>
  );
};

export default Homepage;
