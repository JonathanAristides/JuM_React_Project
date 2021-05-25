import React from "react";
import { useParams } from "react-router";

const Services = () => {
  const { title } = useParams();

  return (
    <div className="servicesContainer">
      <h2>{title} Page</h2>
    </div>
  );
};

export default Services;
