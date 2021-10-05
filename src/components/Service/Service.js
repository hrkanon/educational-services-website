import React from "react";
import "./Service.css";

const Service = (props) => {
  const { instructor, image } = props.service;
  const { courseOne, courseTwo, courseThree } = props.service.popularCourses;
  return (
    <div>
      <div className="col shadow p-2 bg-body service-card">
        <div className="d-flex align-items-center">
          <div className="inst-img">
            <img className="rounded-pill" src={image} alt="" />
          </div>
          <div className="ps-2">
            <h6 className="fw-bold"> Courses by {instructor}</h6>
            <div className="courses">
              <li>
                <a href="/">{courseOne}</a>
              </li>
              <li>
                <a href="/">{courseTwo}</a>
              </li>
              <li>
                <a href="/">{courseThree}</a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
