import { services } from "../data/siteContent";
import Contact from "./Contact";
import Process from "./Process";
import RelatedCaseStudies from "./RelatedCaseStudies";
import SiteLayout from "./SiteLayout";

const HuronCountyPage = () => (
  <SiteLayout>
    <article className="subpage service-page" id="top">
      <header className="subpage-hero subpage-hero--service">
        <div className="container">
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li aria-current="page">Web design in Huron County</li>
            </ol>
          </nav>
          <p className="eyebrow">WebSmith Creations · Ontario</p>
          <h1>Web design for Huron County small businesses</h1>
          <p className="subpage-hero__lead">
            Professional, mobile-friendly websites built to help local
            businesses explain what they do, earn trust and make the next step
            clear.
          </p>
          <div className="hero__actions">
            <a
              className="button button--primary"
              href="#contact"
              data-analytics-event="cta_click"
              data-analytics-label="Start a project"
              data-analytics-location="Huron County hero"
            >
              Start a project
            </a>
            <a className="button button--secondary" href="#local-work">
              View client work
            </a>
          </div>
        </div>
      </header>

      <section className="section" aria-labelledby="local-business-title">
        <div className="container local-intro">
          <div>
            <p className="eyebrow">Built for local business</p>
            <h2 id="local-business-title">
              A clearer online presence for the people you serve.
            </h2>
          </div>
          <div>
            <p className="case-study-lead">
              WebSmith Creations helps small businesses in Huron County and
              across Ontario establish a professional online presence without
              the layers of a large agency.
            </p>
            <p>
              Whether you need a first website, a thoughtful redesign or
              dependable help after launch, the work stays grounded in your
              business, your customers and the information they need to move
              forward.
            </p>
          </div>
        </div>
      </section>

      <section
        className="section section--ink"
        aria-labelledby="local-services-title"
      >
        <div className="container">
          <p className="eyebrow">Website services</p>
          <h2 id="local-services-title">
            Practical support from first plan to ongoing care.
          </h2>
          <div className="services-grid services-grid--subpage">
            {services.slice(0, 3).map((service) => {
              const ServiceIcon = service.icon;
              return (
                <article className="service-card" key={service.title}>
                  <ServiceIcon aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
          <p className="services-note">
            Responsive design and search-friendly foundations are part of every
            website build, helping pages work well for customers and giving
            search engines clear, useful structure.
          </p>
        </div>
      </section>

      <Process />

      <div id="local-work">
        <RelatedCaseStudies title="Website work for Ontario small businesses" />
      </div>

      <section
        className="section section--tinted"
        aria-labelledby="personal-support-title"
      >
        <div className="container support-section">
          <div>
            <p className="eyebrow">Clear communication</p>
            <h2 id="personal-support-title">
              Work directly with the person building your website.
            </h2>
          </div>
          <div>
            <p className="case-study-lead">
              You do not need to translate your business through layers of
              account management.
            </p>
            <p>
              The same person who learns about your goals also plans, designs,
              develops and supports the finished site. That makes feedback more
              direct and gives you a dependable contact when questions come up.
            </p>
          </div>
        </div>
      </section>

      <Contact />
    </article>
  </SiteLayout>
);

export default HuronCountyPage;
