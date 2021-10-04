import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-primary bg-opacity-75 ">
      <div className=" header container d-flex justify-content-between align-items-center">
        <div>
          <h3 className="text-white">TechSchool</h3>
        </div>
        <div>
          <NavLink
            className="text-decoration-none text-white p-3"
            to="/home"
            activeStyle={{ fontWeight: "bold" }}
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            className="text-decoration-none text-white p-3"
            to="/services"
            activeStyle={{ fontWeight: "bold" }}
          >
            {" "}
            Services
          </NavLink>
          <NavLink
            className="text-decoration-none text-white p-3"
            to="/instructors"
            activeStyle={{ fontWeight: "bold" }}
          >
            {" "}
            Instructors
          </NavLink>
          <NavLink
            className="text-decoration-none text-white p-3"
            to="/about"
            activeStyle={{ fontWeight: "bold" }}
          >
            {" "}
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
