import React from 'react';

const ProjectCard = ({ title, description, image, technologies, githubLink, liveDemo }) => {
  const styles = {
    card: {
      backgroundColor: '#fff',
      borderRadius: '15px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #f1f1f1'
    },
    imageContainer: {
      position: 'relative',
      overflow: 'hidden',
      height: '250px'
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(52, 152, 219, 0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      gap: '20px'
    },
    overlayBtn: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#3498db',
      fontSize: '20px',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    content: {
      padding: '25px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    title: {
      fontSize: '22px',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '10px'
    },
    description: {
      fontSize: '14px',
      color: '#7f8c8d',
      marginBottom: '15px',
      lineHeight: '1.5',
      flex: 1
    },
    techContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '20px'
    },
    techBadge: {
      padding: '5px 12px',
      backgroundColor: '#e3f2fd',
      color: '#1976d2',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '500'
    },
    buttons: {
      display: 'flex',
      gap: '10px',
      marginTop: 'auto'
    },
    demoBtn: {
      padding: '10px 20px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '600',
      transition: 'background-color 0.3s ease',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    },
    codeBtn: {
      padding: '10px 20px',
      backgroundColor: '#f8f9fa',
      color: '#495057',
      border: '1px solid #e9ecef',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px'
    }
  };

  return (
    <div 
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-10px)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        const overlay = e.currentTarget.querySelector('.project-overlay');
        if (overlay) overlay.style.opacity = '1';
        const image = e.currentTarget.querySelector('.project-image');
        if (image) image.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        const overlay = e.currentTarget.querySelector('.project-overlay');
        if (overlay) overlay.style.opacity = '0';
        const image = e.currentTarget.querySelector('.project-image');
        if (image) image.style.transform = 'scale(1)';
      }}
    >
      <div style={styles.imageContainer}>
        <img 
          src={image} 
          alt={title} 
          className="project-image"
          style={styles.image}
        />
        <div className="project-overlay" style={styles.overlay}>
          {liveDemo && (
            <a 
              href={liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.overlayBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.backgroundColor = '#2c3e50';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.color = '#3498db';
              }}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.overlayBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.backgroundColor = '#2c3e50';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = '#fff';
                e.currentTarget.style.color = '#3498db';
              }}
            >
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
      
      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        
        <div style={styles.techContainer}>
          {technologies.map((tech, index) => (
            <span key={index} style={styles.techBadge}>
              {tech}
            </span>
          ))}
        </div>
        
        <div style={styles.buttons}>
          {liveDemo && (
            <a 
              href={liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.demoBtn}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2980b9'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3498db'}
            >
              <i className="fas fa-external-link-alt"></i>
              Live Demo
            </a>
          )}
          
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.codeBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#e9ecef';
                e.currentTarget.style.borderColor = '#dee2e6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.borderColor = '#e9ecef';
              }}
            >
              <i className="fab fa-github"></i>
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;