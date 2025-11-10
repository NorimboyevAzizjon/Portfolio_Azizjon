import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

function ProjectCard({ title, description, technologies, image, liveLink, githubLink }) {
  return (
    <motion.div 
      className="project-card"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-overlay">
          <div className="project-links">
            <a href={liveLink} className="project-link">
              <ExternalLink size={20} />
            </a>
            <a href={githubLink} className="project-link">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <div className="tech-stack">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard