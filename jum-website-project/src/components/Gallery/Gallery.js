import React from "react";
import image1 from "../../assets/images/image1.jpg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Gallery = () => {
  return (
    <Splide>
      <SplideSlide>
        <img style={{ width: "100%" }} src={image1} alt="" />
      </SplideSlide>
      <SplideSlide>
        <img style={{ width: "100%" }} src={image1} alt="" />
      </SplideSlide>
      <SplideSlide>
        <img style={{ width: "100%" }} src={image1} alt="" />
      </SplideSlide>
      <SplideSlide>
        <img style={{ width: "100%" }} src={image1} alt="" />
      </SplideSlide>
      <SplideSlide>
        <img style={{ width: "100%" }} src={image1} alt="" />
      </SplideSlide>
    </Splide>
  );
};

export default Gallery;
