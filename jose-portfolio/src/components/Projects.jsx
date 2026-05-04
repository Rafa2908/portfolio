import projects from "../utils/projectsUtil.js";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="project-page">
      <div className="project-header">
        <h1>My Projects</h1>
        <p>A collection of things I've designed, built, and shipped.</p>
      </div>
      <div className="project-div">
        {projects.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => navigate(`/projects/${project.slug}`)}
          >
            <img src={project.preview} alt={project.name} />
            <div className="project-card-body">
              <div className="project-card-top">
                <h2>{project.name}</h2>
                <span className="project-arrow">→</span>
              </div>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-stack">
                {project.stack.map((s) => (
                  <i className={`icon-${s}`} key={s}></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
