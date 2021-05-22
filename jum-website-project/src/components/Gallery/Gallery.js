import React from "react";
import useWindowDimensions from "../WindowDimensions/getWindowDimensions";
import image1 from "../../assets/images/image1.jpg";
import "./galleryStyle.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  // console.log(useWindowDimensions());
  return useWindowDimensions().width < 960 ? (
    <Splide
      options={{
        type: "loop",
        rewind: true,
        waitForTransition: false,
        perPage: 1,
        gap: "0rem",
        perMove: 1,
        focus: "center",
      }}
    >
      <SplideSlide className="soos">
        <Link className="cardLink" to="#">
          <div className="slideCardContainer">
            <div className="servicesCard">
              {" "}
              <img className="galleryImageTop" src={image1} alt="" />
              <div className="galleryCardTitle">Baumeister</div>
              <div className="galleryCardText">
                Wir koordinieren alle am Bau mitwirkenden Unternehmen
              </div>
            </div>
          </div>
        </Link>
      </SplideSlide>
    </Splide>
  ) : (
    <div>Swag</div>
  );
};

export default Gallery;
