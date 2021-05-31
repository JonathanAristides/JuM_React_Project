import React from "react";
import { useParams } from "react-router";
import ServicesSvg from "../../../assets/svg/underlines/ServicesSvg";
import Button from "../../Button/Button";
import { Services } from "../../Data/Services.json";
import "./servicesStyle.scss";

const ServicesPage = () => {
  const { title } = useParams();
  const currentService = Services.find((service) => service.title === title);

  return (
    <div className="servicesContainer">
      <div className="servicesText">
        <p className="servicesFirmName">JUNGBAUER & MODERINSKY FACILITY GMBH</p>
        <p className="servicesSlogan">
          Unsere
          <br />
          <span className="servicesUnderline">Dienstleistungen</span>
        </p>
      </div>

      <div className="servicesSvg">
        <ServicesSvg />
      </div>

      <div className="servicesServicesCard">
        <div className="servicesServicesCardImageAndTitleContainer">
          <img
            className="servicesServicesCardImage"
            src={currentService.image}
            alt=""
          />
          <h1 className="servicesServicesCardHeading">
            {currentService.title}
          </h1>
        </div>
        <div className="servicesDescriptionContainer">
          <p className="servicesDescriptionText">
            {currentService.description}
          </p>
        </div>
        <div className="servicesContactButtonContainer">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
