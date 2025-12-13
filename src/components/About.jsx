import React from "react";
import "../styles/global.css";
import aboutImg from "../assets/images/about-me.jpg"; // apni image path yahan dal do

function About() {
  return (
    <section id="about" data-aos="fade-up">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        <div className="about-image" data-aos="zoom-in">
          <img src={aboutImg} alt="About Me" />
        </div>

        <div className="about-content" data-aos="fade-left">
          <p className="about-text">
            I am a passionate learner of web development. I love creating modern and
            responsive websites. Currently learning React and improving my
            JavaScript skills.
          </p>

          <div className="about-info">
            <span>Beginner</span>
            <span>React Enthusiast</span>
            <span>Based in Pakistan</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
