import { useRef, useState } from "react";
import projectsData from '../data/project.json'

function Project() {

  const [showAll, setShowAll] = useState(false);
  const projectRef = useRef(null);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 2);

  return (
    <section id="project" className="project" ref={projectRef}>
      <h2 className='project-title'>[ PROJECT ]</h2>

      <div className='container'>
        {visibleProjects.map((project) => (
          <div className='project-card' key={project.id}>
            <div className='project-img'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={project.title} />
              </a>
              <div className='project-skills'>
                {project.skills.map((skill, idx) => (
                  <span key={idx}>{skill}</span>
                ))}
              </div>
            </div>

            <div className='project-box'>
              <div className='project-info'>
                <h3>{project.title}</h3>
                <p>: {project.type}</p>
              </div>

              <a
                href={project.github}
                className="github-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/image/project/Ic_github.png" alt="github" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <button
        className='view-more'
        onClick={() => {
          setShowAll(!showAll);

          if (showAll) {
            projectRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        {showAll ? "View Less" : "View All More"}
        <span className="material-symbols-outlined">
          {showAll ? "North" : "South"}
        </span>
      </button>
    </section>
  );
}

export default Project;