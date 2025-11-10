function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tech-stack">
        {technologies.map(tech => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Loyihani ko'rish
      </a>
    </div>
  )
}

export default ProjectCard