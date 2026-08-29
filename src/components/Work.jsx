import projects from '../data/projects.json'
import { ArrowUpRight } from './Icons'

export default function Work() {
  return (
    <section id="work" className="section work-section">
      <div className="container">
        <p className="section-label">01 / Work</p>
        <h2 className="work-heading">Selected Projects</h2>

        <div className="work-list">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="work-card"
            >
              <span className="work-number">{project.number}</span>

              <div className="work-body">
                <div className="work-title-row">
                  <h3>{project.title}</h3>
                  <span className="tag">{project.tag}</span>
                </div>
                <p className="work-description">{project.description}</p>
                <div className="work-stack">
                  {project.stack.map((s) => (
                    <span key={s} className="stack-chip">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="work-meta">
                <span className="work-year">{project.year}</span>
                <span className="work-link">
                  Visit Site <ArrowUpRight />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
