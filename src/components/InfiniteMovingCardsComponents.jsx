import { testimonials } from "../data/siteContent";
import SectionHeading from "./SectionHeading";

const InfiniteMovingCardsComponent = () => (
  <section className="section" id="testimonials">
    <div className="container">
      <SectionHeading
        eyebrow="Client feedback"
        title="Kind words from businesses I’ve worked with."
      />
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <figure className="testimonial-card" key={testimonial.name}>
            <blockquote>
              <p>“{testimonial.quote}”</p>
            </blockquote>
            <figcaption>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default InfiniteMovingCardsComponent;
