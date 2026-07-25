import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "../data/siteContent";
import SectionHeading from "./SectionHeading";

const Projects = () => (
  <section className="section" id="work">
    <div className="container">
      <SectionHeading
        eyebrow="Selected client work"
        title="Real websites for real Ontario businesses."
        description="Each project starts with the same question: what does a potential customer need to see, understand or do next?"
      />
      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <div className="browser-frame">
              <div className="browser-frame__bar" aria-hidden="true">
                <span />
                <span />
                <span />
                <div>{project.url.replace(/^https?:\/\/(www\.)?/, "")}</div>
              </div>
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  width={project.imageWidth}
                  height={project.imageHeight}
                  loading="lazy"
                />
              ) : (
                <div
                  className="project-placeholder"
                  role="img"
                  aria-label="DP Music Therapy project image placeholder"
                >
                  <div className="project-placeholder__mark" aria-hidden="true">
                    dp
                  </div>
                  <div>
                    <strong>DP Music Therapy</strong>
                    <span>Project image coming soon</span>
                  </div>
                </div>
              )}
            </div>
            <div className="project-card__content">
              <p className="project-card__type">{project.type}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div
                className="tag-list"
                aria-label={`${project.name} technologies`}
              >
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              <a
                className="text-link"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View live site
                <FaArrowUpRightFromSquare aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
