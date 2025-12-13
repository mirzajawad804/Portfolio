import React from "react";
import "../styles/global.css";
function About() {
  return (
    <section id="about" data-aos="fade-up">
      <h2>About Me</h2>

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
    </section>
  );
}

export default About;
