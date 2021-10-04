import React from "react";
import "./Service.css";

const Service = (props) => {
  const { course, instructor, price, image, rating, reviews } = props.service;
  return (
    <div>
      <div className="col border service-card">
        <div className="d-flex align-items-center">
          <div className="inst-img">
            <img className="rounded-pill" src={image} alt="" />
          </div>
          <div className="ps-2">
            <h6>Course Name: {course}</h6>
            <h6>by {instructor}</h6>
            <h6>{rating} stars</h6>
            <h6>{reviews} reviews</h6>
            <h4>${price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
