import React from "react";
import useWindowDimensions from "../WindowDimensions/getWindowDimensions";
import "./galleryStyle.scss";
import { Services } from "../Data/Services.json";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  // console.log(useWindowDimensions());

  return (
    <Splide
      options={{
        type: "loop",
        rewind: true,
        waitForTransition: false,
        perPage: 1,
        perMove: 1,
        focus: "center",
      }}
    >
      {Services.map((item) => {
        return (
          <SplideSlide className="sliderCardContainer" key={item.id}>
            <Link className="cardLink" to={`/Services/${item.title}`}>
              <div className="slideCardContainer">
                <div className="servicesCard">
                  {" "}
                  <img
                    className="galleryImageTop"
                    src={`${item.image}`}
                    alt="..."
                  />
                  <div className="galleryCardTitle">{item.title}</div>
                  <div className="galleryCardText">{item.shortDescription}</div>
                </div>
              </div>
            </Link>
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default Gallery;
