import "../styles/global.css"
export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"];

  return (
    <section id="skills" data-aos="fade-up">
      <h2>Skills</h2>

      <div className="skills-row">
        {skills.map((skill, i) => (
          <span key={i} className="skill-pill">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
