import React from "react";
import "./Instructor.css";

const Instructor = (props) => {
  const { instructor, image, rating, reviews, profession } = props.instructor;
  return (
    <div className=" col instructor-card shadow px-2 bg-body rounded">
      <div className="d-flex align-items-center">
        <div className="text-center">
          <img className="rounded-pill w-75" src={image} alt="" />
        </div>
        <div>
          <h5 className="card-title">{instructor}</h5>
          <div className="card-body">
            <small>{profession}</small>
            <p>
              <i className="fas fa-trophy"></i> {rating} stars <br />{" "}
              <i className="fas fa-users"></i> {reviews} reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
