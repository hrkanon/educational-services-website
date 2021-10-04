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
        <div className="row mt-4">
          <div className="col-md-4">
            <div class="card text-white bg-info about-card">
              <div class="card-body">
                <h5 class="card-title">Work with us</h5>
                <p class="card-text">
                  At Udemy, we’re all learners and instructors. We live out our
                  values every day to create a culture that is diverse,
                  inclusive, and committed to helping employees thrive.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card text-white bg-warning about-card">
              <div class="card-body">
                <h5 class="card-title">See our research</h5>
                <p class="card-text">
                  We’re committed to changing the future of learning for the
                  better. Dig into our original research to learn about the
                  forces that are shaping the modern workplace.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card text-white bg-success about-card">
              <div class="card-body">
                <h5 class="card-title">Read our blog</h5>
                <p class="card-text">
                  Want to know what we’ve been up to lately? Check out the Udemy
                  blog to get the scoop on the latest news, ideas and projects,
                  and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
