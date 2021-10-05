import React from "react";
import "./Instructor.css";

const Instructor = (props) => {
  const { instructor, image, rating, reviews, profession } = props.instructor;
  return (
    <div>
      <div className="col shadow p-2 bg-body instructor-card">
        <div className="d-flex align-items-center p-3">
          <div className="instructor-img">
            <img className="rounded-pill" src={image} alt="" />
          </div>
          <div className="ps-2">
            <h5 className="fw-bold">{instructor}</h5>
            <div>
              <small>{profession}</small>
              <p>
                <i className="fas fa-trophy"></i> {rating} stars <br />{" "}
                <i className="fas fa-users"></i> {reviews} reviews
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
