import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "../data/siteContent";
import ProjectVisual from "./ProjectVisual";
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
            <ProjectVisual project={project} />
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
              <div className="project-card__actions">
                <a
                  className="button button--primary"
                  href={project.internalUrl}
                  data-analytics-event="case_study_click"
                  data-analytics-label={project.name}
                  data-analytics-location="homepage project card"
                >
                  Read case study
                  <FaArrowRight aria-hidden="true" />
                </a>
                <a
                  className="text-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="outbound_click"
                  data-analytics-client={project.name}
                  data-analytics-label="View live site"
                  data-analytics-location="homepage project card"
                >
                  View live site
                  <FaArrowUpRightFromSquare aria-hidden="true" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
