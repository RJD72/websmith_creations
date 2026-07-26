import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import ProjectVisual from "./ProjectVisual";
import RelatedCaseStudies from "./RelatedCaseStudies";
import SiteLayout from "./SiteLayout";

const CaseStudyPage = ({ caseStudy }) => (
  <SiteLayout>
    <article className="subpage" id="top">
      <header className="subpage-hero">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/#work">Case studies</a>
              </li>
              <li aria-current="page">{caseStudy.name}</li>
            </ol>
          </nav>
          <p className="eyebrow">Client case study</p>
          <h1>{caseStudy.name} website case study</h1>
          <p className="subpage-hero__lead">{caseStudy.headline}</p>
          <p className="subpage-hero__type">{caseStudy.type}</p>
        </div>
      </header>

      <div className="container case-study-visual">
        <ProjectVisual
          project={caseStudy}
          loading="eager"
          className="browser-frame--large"
        />
      </div>

      <section
        className="section case-study-overview"
        aria-labelledby="project-overview-title"
      >
        <div className="container case-study-overview__grid">
          <div>
            <p className="eyebrow">Project overview</p>
            <h2 id="project-overview-title">A website built around clarity.</h2>
          </div>
          <div>
            <p className="case-study-lead">{caseStudy.overview}</p>
            <p>{caseStudy.result}</p>
            <a
              className="button button--secondary"
              href={caseStudy.url}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-event="outbound_click"
              data-analytics-client={caseStudy.name}
              data-analytics-label="View live website"
              data-analytics-location="case study overview"
            >
              View live website
              <FaArrowUpRightFromSquare aria-hidden="true" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="section section--tinted"
        aria-labelledby="project-needs-title"
      >
        <div className="container case-study-details">
          <div>
            <p className="eyebrow">What it needed to accomplish</p>
            <h2 id="project-needs-title">
              Make the important information easier to use.
            </h2>
            <p>{caseStudy.needsIntro}</p>
          </div>
          <ul className="case-study-checklist">
            {caseStudy.needs.map((need) => (
              <li key={need}>{need}</li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section case-study-approach"
        aria-labelledby="project-approach-title"
      >
        <div className="container case-study-details">
          <div>
            <p className="eyebrow">Design and development approach</p>
            <h2 id="project-approach-title">
              Decisions grounded in the visitor’s next step.
            </h2>
          </div>
          <div>
            {caseStudy.approach.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section section--ink"
        aria-labelledby="project-features-title"
      >
        <div className="container case-study-features">
          <div>
            <p className="eyebrow">Key features</p>
            <h2 id="project-features-title">What the finished site includes.</h2>
          </div>
          <ul>
            {caseStudy.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <div>
            <h3>Technology</h3>
            <div
              className="tag-list tag-list--dark"
              aria-label={`${caseStudy.name} technologies`}
            >
              {caseStudy.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {caseStudy.testimonial ? (
        <section
          className="section case-study-testimonial"
          aria-labelledby="client-feedback-title"
        >
          <div className="container">
            <p className="eyebrow">Client feedback</p>
            <h2 id="client-feedback-title">In the client’s words.</h2>
            <figure className="testimonial-card testimonial-card--featured">
              <blockquote>
                <p>“{caseStudy.testimonial.quote}”</p>
              </blockquote>
              <figcaption>
                <strong>{caseStudy.testimonial.name}</strong>
                <span>{caseStudy.testimonial.title}</span>
              </figcaption>
            </figure>
          </div>
        </section>
      ) : null}

      <RelatedCaseStudies currentSlug={caseStudy.slug} />

      <section className="section case-study-cta" aria-labelledby="case-cta-title">
        <div className="container case-study-cta__inner">
          <div>
            <p className="eyebrow">Your project</p>
            <h2 id="case-cta-title">
              Need a website that makes your business easier to understand?
            </h2>
          </div>
          <a
            className="button button--primary"
            href="/#contact"
            data-analytics-event="cta_click"
            data-analytics-label="Start a project"
            data-analytics-location={`${caseStudy.name} case study`}
          >
            Start a project
          </a>
        </div>
      </section>
    </article>
  </SiteLayout>
);

export default CaseStudyPage;
