import { services } from "../data/siteContent";
import SectionHeading from "./SectionHeading";

const ServicesContainer = () => (
  <section className="section section--ink" id="services">
    <div className="container">
      <SectionHeading
        eyebrow="Services"
        title="The practical website help your business needs."
        description="From a first professional website to ongoing improvements, the work stays focused on clarity, usability and dependable support."
      />
      <div className="services-grid">
        {services.map((service) => {
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
        Every website includes responsive design and search-friendly foundations
        as part of a solid build.
      </p>
    </div>
  </section>
);

export default ServicesContainer;
