import React, { useState, useEffect } from "react";
import "../styles/global.css";
import "../styles/Navbar.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Initialize AOS for navbar only
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  // Track window width and auto-close sidebar if resized to desktop
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 600) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <nav className="navbar" data-aos="fade-down">
        <h3 className="brand-name">Jawad.</h3>

        {/* Desktop Links */}
        {windowWidth > 600 ? (
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        ) : (
          <div
            className={`burger ${isOpen ? "toggle" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </nav>

      {/* Sidebar overlay */}
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <div className="sidebar" onClick={(e) => e.stopPropagation()}>
          <ul>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
