import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data.slice(0, 4)));
  }, []);

  return (
    <div className="container my-2">
      <div className="course-container row row-cols-1 row-cols-md-2 g-3">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
