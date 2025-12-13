import "../styles/global.css"
export default function About() {
  return (
    <section id="about" data-aos="fade-up">
      <h2>About Me</h2>

      <p className="about-text">
        I am a frontend developer learning React and building clean,
        responsive web interfaces with modern tools.
      </p>

      <div className="about-info">
        <span>Beginner</span>
        <span>React Focused</span>
        <span>Pakistan</span>
      </div>
    </section>
  );
}
