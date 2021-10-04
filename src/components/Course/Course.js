import React from "react";
import "./Course.css";

const Course = (props) => {
  const { course, instructor, profession, price, image } = props.course;
  const { courseOne, courseTwo, courseThree } = props.course.popularCourses;
  console.log(props.course);
  return (
    <div>
      <div className="col course-card shadow px-2 bg-body rounded">
        <div className=" d-flex align-items-center">
          <div>
            <img
              className="card-photo rounded-pill"
              src={image}
              alt="..."
            ></img>
          </div>
          <div className="card-body">
            <h5 className="card-title">{course}</h5>
            <p className="card-text">
              by {instructor} <br /> {profession}
            </p>
            <small>
              {" "}
              Popular Courses:
              <li>{courseOne}</li>
              <li>{courseTwo}</li>
              <li>{courseThree}</li>
            </small>
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="text-danger">${price}</h2>
              <button className="btn bg-primary bg opacity-75 text-white">
                {" "}
                <i className="fas fa-shopping-cart"></i>Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
