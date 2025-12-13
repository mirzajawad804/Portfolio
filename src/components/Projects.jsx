import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import projectsData from "../data/projectsData";
import "../styles/global.css";

function Projects() {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>

      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        grabCursor={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 }
        }}
      >
        {projectsData.map(project => (
          <SwiperSlide key={project.id}>
            <div className="project-card">
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
