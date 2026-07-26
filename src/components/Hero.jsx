import { FaArrowRight } from "react-icons/fa6";

const Hero = () => (
  <section className="portfolio-hero" id="top">
    <div className="hero__grid" aria-hidden="true" />
    <div className="container hero__inner">
      <div className="hero__copy">
        <p className="eyebrow">Web design for small businesses in Ontario</p>
        <h1>Websites built to earn trust—and turn visits into enquiries.</h1>
        <p className="hero__description">
          WebSmith Creations designs fast, mobile-friendly websites for small
          businesses that need to look credible, explain their value clearly,
          and make it easy for customers to take the next step.
        </p>
        <div className="hero__actions">
          <a
            className="button button--primary"
            href="#contact"
            data-analytics-event="cta_click"
            data-analytics-label="Start a project"
            data-analytics-location="homepage hero"
          >
            Start a project <FaArrowRight aria-hidden="true" />
          </a>
          <a className="button button--secondary" href="#work">
            View client work
          </a>
        </div>
      </div>
      <aside className="hero__note" aria-label="WebSmith Creations approach">
        <div className="hero__note-accent" />
        <p className="hero__note-label">Designed with purpose</p>
        <p>
          Your website should feel like a capable extension of your business:
          clear, considered and ready to help.
        </p>
        <span>Independent design & development</span>
      </aside>
    </div>
    <div className="container trust-row" aria-label="What you can expect">
      {[
        "Mobile-first",
        "Search-friendly foundations",
        "Built around your business",
        "Personal support",
      ].map((item) => (
        <div key={item}>
          <span aria-hidden="true">✓</span>
          {item}
        </div>
      ))}
    </div>
  </section>
);

export default Hero;
