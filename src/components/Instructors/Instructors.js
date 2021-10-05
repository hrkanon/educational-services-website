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
      <div className="my-5 w-75 mx-auto">
        <h1 className="text-center mb-4">
          <span className="text-danger">Register</span> and Become an Instructor
        </h1>
        <div className="row shadow p-2 bg-body rounded">
          <div className="col-md-6">
            <form className="row g-3 py-5">
              <div className="border-end border-danger p-5">
                <div>
                  <label for="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="col-12">
                  <label for="inputAddress2" className="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                  <label for="inputState" className="form-label">
                    State
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label for="inputZip" className="form-label">
                    Zip
                  </label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      I agree with the <a href="/">terms and conditions</a>
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6 my-auto p-5">
            <h1>
              <span className="text-danger">Join us!</span> We are <br /> more
              than a School!!
            </h1>
            <p>
              At TechSchool, we’re all learners and instructors. We live out our
              values every day to create a culture that is diverse, inclusive,
              and committed to helping employees thrive.We’re committed to
              changing the future of learning for the better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
