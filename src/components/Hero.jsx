import React from "react";
import profileImage from "../assets/images/profile.png";
import "../styles/global.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-text" data-aos="fade-right">
          <p className="floating-text">Frontend Developer</p>
          <h1>Mirza Jawad</h1>
          <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
            I create clean web apps and learn new tech every day.
          </p>
          <button
            data-aos="zoom-in"
            data-aos-delay="400"
            onClick={() => {
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects
          </button>
        </div>

        <div className="hero-image" data-aos="fade-left">
          <img src={profileImage} alt="profile" className="hero-img" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
