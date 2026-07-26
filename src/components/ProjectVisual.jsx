const ProjectVisual = ({ project, loading = "lazy", className = "" }) => (
  <div className={`browser-frame ${className}`.trim()}>
    <div className="browser-frame__bar" aria-hidden="true">
      <span />
      <span />
      <span />
      <div>{project.url.replace(/^https?:\/\/(www\.)?/, "")}</div>
    </div>
    <img
      src={project.image}
      alt={project.imageAlt}
      width={project.imageWidth}
      height={project.imageHeight}
      loading={loading}
    />
  </div>
);

export default ProjectVisual;
