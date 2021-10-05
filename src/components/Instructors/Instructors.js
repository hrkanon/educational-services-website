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
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-2 my-2">
        {instructors.map((instructor) => (
          <Instructor key={instructor.id} instructor={instructor}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
