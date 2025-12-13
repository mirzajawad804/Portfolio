import React from "react";
import profileImage from "../assets/images/profile.png"
import "../styles/global.css"
function Hero() {
  return (
    <section className="hero">
      <p className="floating-text">Frontend Developer</p>

      <h1 data-aos="fade-up">Mirza Jawad</h1>

      <p className="subtitle" data-aos="fade-up" data-aos-delay="200">
        I create clean web apps and learn new tech every day.
      </p>

      <button data-aos="zoom-in" data-aos-delay="400">
        View Projects
      </button>

      <img
        data-aos="fade-up"
        data-aos-delay="600"
        src={profileImage}
        alt="profile"
        className="hero-img"
      />
    </section>
  );
}

export default Hero;
