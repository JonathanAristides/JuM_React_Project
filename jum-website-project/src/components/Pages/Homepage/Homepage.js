import React from "react";
import Button from "../../Button/Button";
import Gallery from "../../Gallery/Gallery";
import "./homepageStyle.scss";

const Homepage = () => {
  return (
    <div className="homepageContainer">
      <div className="homeText">
        <p className="firmNameMain">
          JUNGBAUER & MODERINSKY <br /> FACILITY GMBH
        </p>
        <p className="slogan">
          Wir bürgen für Qualität und <br /> Zuverlässigkeit
        </p>
        <div className="button">
          <Button />
        </div>
      </div>
      <div className="homeslider">
        <Gallery />
      </div>
    </div>
  );
};

export default Homepage;
