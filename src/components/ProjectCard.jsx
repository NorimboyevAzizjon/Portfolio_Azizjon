import React, { useState } from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ 
  sarlavha, 
  tavsif, 
  rasm, 
  texnologiyalar, 
  githubHavolasi, 
  jonliDemo 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <article 
      className={`${styles.card} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={`${sarlavha} loyihasi`}
    >
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img 
            src={rasm} 
            alt={sarlavha} 
            className={`${styles.image} ${imageLoaded ? styles.loaded : ''}`}
            loading="lazy"
            decoding="async"
            onLoad={handleImageLoad}
          />
          <div className={styles.imageSkeleton}></div>
        </div>
        
        <div className={`${styles.overlay} ${isHovered ? styles.visible : ''}`}>
          <div className={styles.overlayContent}>
            {jonliDemo && (
              <a 
                href={jonliDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.overlayBtn}
                aria-label={`${sarlavha} loyihasining jonli demosini ko'rish`}
              >
                <i className="fas fa-external-link-alt"></i>
                <span className={styles.btnLabel}>Demo</span>
              </a>
            )}
            {githubHavolasi && (
              <a 
                href={githubHavolasi} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.overlayBtn}
                aria-label={`${sarlavha} loyihasining GitHub kodini ko'rish`}
              >
                <i className="fab fa-github"></i>
                <span className={styles.btnLabel}>Kod</span>
              </a>
            )}
          </div>
        </div>
        
        <div className={`${styles.techBadges} ${isHovered ? styles.visible : ''}`}>
          {texnologiyalar.slice(0, 3).map((tex, index) => (
            <span key={index} className={styles.techBadge}>
              {tex}
            </span>
          ))}
          {texnologiyalar.length > 3 && (
            <span className={styles.techMore}>
              +{texnologiyalar.length - 3}
            </span>
          )}
        </div>
      </div>
      
      <div className={styles.content}>
        <header className={styles.header}>
          <h3 className={styles.title}>{sarlavha}</h3>
          <div className={styles.projectType}>
            <i className="fas fa-code"></i>
            <span>Web Dastur</span>
          </div>
        </header>
        
        <p className={styles.description}>{tavsif}</p>
        
        <div className={styles.footer}>
          <div className={styles.techContainer}>
            {texnologiyalar.slice(0, 4).map((tex, index) => (
              <span 
                key={index} 
                className={styles.techTag}
                title={tex}
              >
                {tex.includes('React') && <i className="fab fa-react"></i>}
                {tex.includes('Node') && <i className="fab fa-node-js"></i>}
                {tex.includes('JS') && <i className="fab fa-js"></i>}
                {tex.includes('CSS') && <i className="fab fa-css3-alt"></i>}
                {!tex.includes('React') && !tex.includes('Node') && 
                 !tex.includes('JS') && !tex.includes('CSS') && 
                 <i className="fas fa-code"></i>}
                <span className={styles.techName}>{tex}</span>
              </span>
            ))}
          </div>
          
          <div className={styles.actionButtons}>
            {jonliDemo && (
              <a 
                href={jonliDemo} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.demoBtn}
                aria-label={`${sarlavha} loyihasining jonli demosini ochish`}
              >
                <i className="fas fa-play-circle"></i>
                Demo
              </a>
            )}
            {githubHavolasi && (
              <a 
                href={githubHavolasi} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.codeBtn}
                aria-label={`${sarlavha} loyihasining GitHub repositorysini ochish`}
              >
                <i className="fab fa-github"></i>
                Kod
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className={styles.cardHoverEffect}></div>
    </article>
  );
};

export default ProjectCard;