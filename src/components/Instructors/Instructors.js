import React, { useEffect, useState } from "react";
import "./Instructors.css";
import Instructor from "../Instructor/Instructor";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div>
      <div className="container my-2 instructors-container">
        <div className="row row-cols-1 row-cols-md-3 g-2">
          {instructors.map((instructor) => (
            <Instructor instructor={instructor}></Instructor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
