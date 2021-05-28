import React from "react";
import ContactSvg from "../../../assets/svg/ContactSvg";
import ContactSvg2 from "../../../assets/svg/ContactSvg2";
import "./contactStyle.scss";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactText">
        <p className="contactFirmName">JUNGBAUER & MODERINSKY FACILITY GMBH</p>
        <p className="contactSlogan">
          Ihre Zufriedenheit
          <br />
          <span className="contactUnderline">ist uns wichtig</span>
        </p>
      </div>

      <div className="contactSvg">
        <ContactSvg />
      </div>

      <div className="contactFormContainer">
        <div className="contactSvg2Container">
          <ContactSvg2 />
        </div>

        <div className="contactForm">
          <div className="contactFormText">
            Stellen Sie uns noch heute eine unverbindliche Anfrage unter:
          </div>
          <div className="contactFormInfo">
            <div className="contactFormButton">
              <a className="contactFormButtonLink" href="mailto:office@jum.at">
                office@jum.at
              </a>
            </div>
            <div className="contactFormButton">
              <a className="contactFormButtonLink" href="tel:+NUMBER">
                +43 (01) 5955 106
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
