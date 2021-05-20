import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="info">
        <p className="firmName">Jungbauer & Moderinsky Facilityservices GmbH</p>
        <p className="adress">Marchettigasse 1B, 1060 Wien</p>
      </div>
      <div className="coms">
        <p>Tel.: +43 (01) 5955 106</p>
        <p>Fax: +43 (01) 5954 918</p>
      </div>
      <div className="social">
        <a href="https://www.facebook.com/jungbauer.moderinsky">
          <svg
            width="66"
            height="67"
            viewBox="0 0 66 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 33.687C0 50.3421 11.9158 64.1916 27.5 67V42.8046H19.25V33.5H27.5V26.0546C27.5 17.6796 32.8158 13.0287 40.3343 13.0287C42.7157 13.0287 45.2843 13.4 47.6657 13.7713V22.3333H43.45C39.4157 22.3333 38.5 24.3796 38.5 26.987V33.5H47.3L45.8343 42.8046H38.5V67C54.0843 64.1916 66 50.3449 66 33.687C66 15.1588 51.15 0 33 0C14.85 0 0 15.1588 0 33.687Z"
              fill="white"
            />
          </svg>
        </a>
        <Link to="/kontakt">
          <svg
            width="68"
            height="49"
            viewBox="0 0 68 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M63.1429 0.5H4.85714C3.56895 0.5 2.33351 1.00571 1.42262 1.90589C0.511733 2.80606 0 4.02696 0 5.3V43.7C0 44.973 0.511733 46.1939 1.42262 47.0941C2.33351 47.9943 3.56895 48.5 4.85714 48.5H63.1429C64.4311 48.5 65.6665 47.9943 66.5774 47.0941C67.4883 46.1939 68 44.973 68 43.7V5.3C68 4.02696 67.4883 2.80606 66.5774 1.90589C65.6665 1.00571 64.4311 0.5 63.1429 0.5ZM57.8 5.3L34 21.572L10.2 5.3H57.8ZM4.85714 43.7V7.484L32.6157 26.468C33.0222 26.7467 33.5052 26.8961 34 26.8961C34.4948 26.8961 34.9778 26.7467 35.3843 26.468L63.1429 7.484V43.7H4.85714Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      <div className="data">
        {/* LINKS MISSING */}
        <p>Impressum</p>
        <p>Führungszertifikat</p>
        <p>Datenschutzerklärung</p>
      </div>
    </footer>
  );
};

export default Footer;
