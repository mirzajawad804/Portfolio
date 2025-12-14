import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import projectsData from "../data/projectsData";

import "../styles/global.css";

function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: false,   // animate every time you scroll
    });
  }, []);

  return (
    <section id="projects" data-aos="fade-up">
      <h2 className="section-title">Projects</h2>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        grabCursor={true}
        breakpoints={{
          1024: { slidesPerView: 4, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 10 },
          0: { slidesPerView: 1, spaceBetween: 5 }
        }}
      >
        {projectsData.map((project, index) => (
          <SwiperSlide key={project.id}>
            <div
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={index * 100} // stagger animation
            >
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-buttons">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer">See Code</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;
