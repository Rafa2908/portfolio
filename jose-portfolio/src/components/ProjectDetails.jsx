import { useParams, useNavigate } from "react-router-dom";
import projects from "../utils/projectsUtil.js";
import "../components/ProjectDetails.css";

const ProjectDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === name);

  if (!project) {
    return (
      <div className="pd-not-found">
        <h2>Project not found.</h2>
        <button onClick={() => navigate("/projects")}>
          ← Back to Projects
        </button>
      </div>
    );
  }

  console.log(project.preview);

  return (
    <div className="pd-container">
      {/* BACK */}
      <button className="pd-back-btn" onClick={() => navigate("/projects")}>
        ← Back to Projects
      </button>

      {/* HERO */}
      <div className="pd-hero">
        <h1 className="pd-title">{project.name}</h1>
        <p className="pd-description">{project.description}</p>
      </div>

      {/* PREVIEW */}
      <div className="pd-preview">
        <img src={project.preview} alt={project.name} />
      </div>

      {/* STACK */}
      <div className="pd-stack-section">
        <h3 className="pd-section-label">
          <span className="pd-icon">🛠</span> Tech Stack
        </h3>
        <div className="pd-stack-badges">
          {project.stack.map((s) => (
            <span className="pd-badge" key={s}>
              <i className={`icon-${s}`}></i>
            </span>
          ))}
        </div>
      </div>

      {/* PROBLEM + WHAT I BUILT */}
      <div className="pd-two-col">
        <div className="pd-section-box">
          <h3 className="pd-section-label">
            <span className="pd-icon">🔍</span> The Problem
          </h3>
          <p>{project.problem}</p>
        </div>
        <div className="pd-section-box">
          <h3 className="pd-section-label">
            <span className="pd-icon">⚙️</span> What I Built
          </h3>
          <p>{project.whatIBuilt}</p>
        </div>
      </div>

      {/* CHALLENGES */}
      <div className="pd-section-box pd-full">
        <h3 className="pd-section-label">
          <span className="pd-icon">💡</span> Challenges & Learnings
        </h3>
        <p>{project.challenges}</p>
      </div>

      {/* CTA */}
      <div className="pd-cta">
        <a
          className="pd-btn pd-btn-primary"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          <span>⬡</span> GitHub Repo
        </a>
        <button className="pd-btn" onClick={() => navigate("/projects")}>
          ← Back to Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
