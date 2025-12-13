import React from "react";
import "../styles/global.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <p>© 2025 Mirza Jawad. Built with React.</p>

      <div className="footer-links">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;
