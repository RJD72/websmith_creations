import { processSteps } from "../data/siteContent";
import SectionHeading from "./SectionHeading";

const Process = () => (
  <section className="section section--tinted" id="process">
    <div className="container">
      <SectionHeading
        eyebrow="How we’ll work"
        title="A straightforward path from idea to launch."
        description="You’ll always know what we’re working on, what comes next and where your input is most useful."
      />
      <ol className="process-grid">
        {processSteps.map((step, index) => (
          <li className="process-card" key={step.title}>
            <span className="process-card__number" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Process;
