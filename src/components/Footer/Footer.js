import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="bg-primary bg-opacity-75 text-white">
        <h4 className="text-center"> TechSchool</h4>
        <div className="text-center">
          <small>
            <i className="fas fa-map-marker-alt "></i> 11 Kamal Ataturk Avenue,
            Dhaka
          </small>
          <small>
            <i className="fas fa-envelope ps-3"></i> admin@techschool.com
          </small>
          <small>
            <i className="fas fa-phone-alt ps-3"></i> +880 234 567 21
          </small>
        </div>
        <div className="text-center">
          <small> ©2021 Power-Boosts. All rights reserved</small>
          <p>
            <i className="fab fa-facebook-f pe-2"></i>
            <i className="fab fa-instagram pe-2"></i>
            <i className="fab fa-twitter pe-2"></i>
            <i className="fab fa-google-plus-g pe-2"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
