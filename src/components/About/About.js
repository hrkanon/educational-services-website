import React from "react";
import "./About.css";
import img from "../Images/aboutPic.jpeg";
const About = () => {
  return (
    <div>
      <div className="about container">
        <div className="d-flex justify-content-around align-items-center mt-3">
          <div>
            <h1>
              We Share <br /> Knowledge <br /> with the world !
            </h1>
          </div>
          <div>
            <img className="w-75" src={img} alt="" />
          </div>
        </div>
        <div className="row mt-3 g-2">
          <div className="col-md-4">
            <div className="card text-white bg-info about-card">
              <div className="card-body">
                <h5 className="card-title">Work with us</h5>
                <p className="card-text">
                  At TechSchool, we’re all learners and instructors. We live out
                  our values every day to create a culture that is diverse,
                  inclusive, and committed to helping employees thrive.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-warning about-card">
              <div className="card-body">
                <h5 className="card-title">See our research</h5>
                <p className="card-text">
                  We’re committed to changing the future of learning for the
                  better. Dig into our original research to learn about the
                  forces that are shaping the modern workplace.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-white bg-success about-card">
              <div className="card-body">
                <h5 className="card-title">Read our blog</h5>
                <p className="card-text">
                  Want to know what we’ve been up to lately? Check out the Udemy
                  blog to get the scoop on the latest news, ideas and projects,
                  and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="heighligts-area my-3">
        <div className="container">
          <div className="row text-white text-center">
            <div className="col-md-3">
              <h2>49+</h2>
              <h2>Teachers</h2>
            </div>
            <div className="col-md-3">
              <h2>30k +</h2>
              <h2>Students</h2>
            </div>
            <div className="col-md-3">
              <h2>30+</h2>
              <h2>Courses</h2>
            </div>
            <div className="col-md-3">
              <h2>23+ </h2>
              <h2>Countries</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
