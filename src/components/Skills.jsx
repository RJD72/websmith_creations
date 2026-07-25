import { skillGroups } from "../data/siteContent";
import SectionHeading from "./SectionHeading";

const Skills = () => (
  <section className="section skills-section" id="skills">
    <div className="container">
      <SectionHeading
        eyebrow="Tools of the trade"
        title="Modern technology, chosen to fit the work."
        description="The technology matters, but only when it helps create a reliable, maintainable experience for your business and customers."
      />
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
