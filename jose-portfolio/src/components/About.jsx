import "../components/About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* HERO */}
      <div className="about-hero">
        <div className="about-avatar">
          <img src="/jose-profile-pic.png" alt="" />
        </div>
        <div className="about-hero-text">
          <h1 className="about-name">Jose Calderon</h1>
          <p className="about-role">
            Full-Stack Software Engineer · CS Student @ Kean University
          </p>
          <p className="about-tagline">
            I believe great software carries the complexity so users don't have
            to.
          </p>
          <a className="about-cv-btn" href="/Jose_Calderon_CV.pdf" download>
            ⬇ Download CV
          </a>
        </div>
      </div>

      {/* ABOUT ME */}
      <div className="about-section-box">
        <h3 className="about-section-label">
          <span>👤</span> About Me
        </h3>
        <p>
          I'm a Computer Science student at Kean University with a strong GPA
          and a passion for building full-stack web applications that solve real
          problems. My focus is on backend engineering — designing systems that
          are clean, scalable, and purposeful. I care deeply about user
          experience and believe the best software is the kind that gets out of
          the user's way.
        </p>
      </div>

      {/* TWO COL — Education + Experience */}
      <div className="about-two-col">
        <div className="about-section-box">
          <h3 className="about-section-label">
            <span>🎓</span> Education
          </h3>
          <div className="about-item">
            <span className="about-item-title">B.S. Computer Science</span>
            <span className="about-item-sub">
              Kean University · 2024 – Present
            </span>
            <span className="about-item-detail">
              Strong GPA · Coursework in OS, DB Design, Algorithms, Data
              Structures, OOP, System Design, Computer Networks, Software
              Engineering
            </span>
          </div>
        </div>

        <div className="about-section-box">
          <h3 className="about-section-label">
            <span>💼</span> Experience
          </h3>
          <div className="about-item">
            <span className="about-item-title">Backend Engineer — Buylo</span>
            <span className="about-item-sub">Team Project · 2024</span>
            <span className="about-item-detail">
              Led backend development for a full-stack e-commerce platform.
              Built JWT auth, cart logic, order transactions, and admin CRUD
              endpoints using Node.js, Express, and PostgreSQL.
            </span>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="about-section-box">
        <h3 className="about-section-label">
          <span>🛠</span> Skills
        </h3>
        <div className="about-skills-grid">
          <div className="about-skill-group">
            <span className="about-skill-category">Frontend</span>
            <div className="about-badges">
              {["React", "HTML", "CSS", "Bootstrap"].map((s) => (
                <span className="about-badge" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="about-skill-group">
            <span className="about-skill-category">Backend</span>
            <div className="about-badges">
              {["Node.js", "Express", "Flask", "PHP"].map((s) => (
                <span className="about-badge" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="about-skill-group">
            <span className="about-skill-category">Databases</span>
            <div className="about-badges">
              {["PostgreSQL", "MySQL", "ERD Design"].map((s) => (
                <span className="about-badge" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="about-skill-group">
            <span className="about-skill-category">Tools</span>
            <div className="about-badges">
              {["Git", "GitHub", "Render", "Postman"].map((s) => (
                <span className="about-badge" key={s}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PHILOSOPHY */}
      <div className="about-section-box about-philosophy">
        <h3 className="about-section-label">
          <span>💭</span> Engineering Philosophy
        </h3>
        <p>
          Systems should carry the responsibility for constraints — not users.
          When a workflow feels broken, the right fix is to address the root
          cause, not normalize the workaround. I bring that mindset to every
          project I build.
        </p>
      </div>
    </div>
  );
};

export default About;
