import React from "react";
import "../styles/global.css"
function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Let’s Talk</h2>

      <p>Have an idea or project? Let’s build it together.</p>

      <a href="mailto:jawad@email.com" className="contact-btn">
        Send Email
      </a>
    </section>
  );
}

export default Contact;
