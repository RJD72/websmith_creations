const SectionHeading = ({ eyebrow, title, description, align = "left" }) => (
  <div className={`section-heading section-heading--${align}`}>
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {description ? (
      <p className="section-heading__description">{description}</p>
    ) : null}
  </div>
);

export default SectionHeading;
