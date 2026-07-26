import { projects } from "../data/siteContent";

const RelatedCaseStudies = ({
  currentSlug,
  title = "Explore more client work",
}) => {
  const relatedProjects = projects.filter(
    (project) => project.slug !== currentSlug
  );

  return (
    <section className="section related-work" aria-labelledby="related-work-title">
      <div className="container">
        <p className="eyebrow">More client work</p>
        <h2 id="related-work-title">{title}</h2>
        <div className="related-work__grid">
          {relatedProjects.map((project) => (
            <article className="related-work__card" key={project.slug}>
              <p>{project.type}</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a
                className="text-link"
                href={project.internalUrl}
                data-analytics-event="case_study_click"
                data-analytics-label={project.name}
                data-analytics-location="related work"
              >
                Read case study
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedCaseStudies;
