
import "./SelfIntroduction.css";

function SelfIntroduction() {
  const skills = [
    "Java",
    "JavaScript",
    "React.js",
    "HTML",
    "CSS",
    "Spring Boot",
    "Spring MVC",
    "MySQL",
    "REST APIs",
    "Git",
    "GitLab",
  ];

  return (
    <main className="profile-container">
      <section className="hero-section">
        <p className="welcome-text">HELLO, WELCOME TO MY PROFILE!</p>
        <h1>
          I'm <span>Rutuja Kupade</span>
        </h1>
        <h2>Java Full Stack Developer</h2>
        <p className="hero-description">
          I am a Software Engineer with experience in enterprise
          application development. I enjoy building web applications,
          solving problems, and learning new technologies.
        </p>
        <a href="#about" className="hero-button">
          Discover More
        </a>
        <div className="code-decoration">{"</>"}</div>
      </section>

      <section className="cards-grid" id="about">
        <article className="profile-card personal-card">
          <h3>👩‍💻 Personal Information</h3>
          <p><strong>Name:</strong> Rutuja Kupade</p>
          <p><strong>Role:</strong> Java Full Stack Developer</p>
          <p><strong>Location:</strong> Pune, India</p>
        </article>

        <article className="profile-card education-card">
          <h3>🎓 Education</h3>
          <h4>B.Tech in Computer Science and Engineering</h4>
          <p>SVERI's College of Engineering, Pandharpur</p>
          <p>2020 – 2024</p>
          <p><strong>CGPA:</strong> 9.66</p>
        </article>

        <article className="profile-card skills-card" id="skills">
          <h3>⚡ Technical Skills</h3>
          <div className="skills-list">
            {skills.map((skill) => (
              <span className="skill-tag" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </article>

        <article className="profile-card experience-card" id="experience">
          <h3>💼 Experience</h3>
          <h4>Software Engineer</h4>
          <p className="company-name">ACME Infovision</p>
          <p>September 2024 – June 2026</p>
          <ul>
            <li>Worked on enterprise ERP applications.</li>
            <li>Developed and maintained application modules.</li>
            <li>Worked with Java, Spring, and REST APIs.</li>
            <li>Used SQL and MySQL for database operations.</li>
          </ul>
          <p className="current-role">
            Currently training in Java Full Stack Development.
          </p>
        </article>

        <article className="profile-card hobbies-card">
          <h3>🎨 Hobbies & Interests</h3>
          <div className="hobbies-list">
            <div className="hobby-item">
              <span>📚</span>
              <p>Reading</p>
            </div>
            <div className="hobby-item">
              <span>🎵</span>
              <p>Listening to Music</p>
            </div>
            <div className="hobby-item">
              <span>💻</span>
              <p>Coding</p>
            </div>
            <div className="hobby-item">
              <span>🌱</span>
              <p>Learning</p>
            </div>
          </div>
        </article>

        <article className="profile-card goal-card">
          <h3>🚀 Career Goal</h3>
          <p>
            My goal is to become a skilled Full Stack Developer,
            build scalable applications, strengthen my problem-solving
            skills, and contribute to innovative projects.
          </p>
          <p className="quote">"Keep Learning, Keep Growing!"</p>
        </article>
      </section>

      <footer className="profile-footer">
        Designed with ❤️ using React
      </footer>
    </main>
  );
}

export default SelfIntroduction;
