import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ sarlavha, tavsif, rasm, texnologiyalar, githubHavolasi, jonliDemo }) => {
  return (
    <div 
      className={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(138, 43, 226, 0.4)';
        e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
      }}
    >
      <div className={styles.imageContainer}>
        <img 
          src={rasm} 
          alt={sarlavha} 
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.overlay}>
          {jonliDemo && (
            <a 
              href={jonliDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.overlayBtn}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
          {githubHavolasi && (
            <a 
              href={githubHavolasi} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.overlayBtn}
            >
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{sarlavha}</h3>
        <p className={styles.description}>{tavsif}</p>
        
        <div className={styles.techContainer}>
          {texnologiyalar.map((tex, index) => (
            <span key={index} className={styles.techTag}>
              {tex}
            </span>
          ))}
        </div>
        

      </div>
    </div>
  );
};

export default ProjectCard;