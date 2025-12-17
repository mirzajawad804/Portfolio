import React from "react";
import "../styles/global.css";
import { FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" data-aos="fade-up">
      <p>© 2025 Mirza Jawad. Built with React.</p>

      <div className="footer-links">
        <a href="https://github.com/mirzajawad804" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.instagram.com/mirza_jawad_ali_kami?igsh=MTN6Ynd5ZWV3bHVuNw==" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </a>
      </div>
    </footer>
  );
}

export default Footer;
