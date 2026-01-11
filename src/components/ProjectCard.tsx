import React, { useState, ReactElement } from 'react';
import { useLanguage } from '../useLanguage';
import styles from './ProjectCard.module.css';
import { FaExternalLinkAlt, FaGithub, FaCode, FaReact, FaNodeJs, FaJs, FaCss3Alt, FaPlayCircle } from 'react-icons/fa';
// Texnologiya nomi => icon mapping
const techIconMap: Record<'React' | 'Node' | 'JS' | 'CSS' | 'Redux', ReactElement> = {
  'React': <FaReact color="#61DBFB" />,
  'Node': <FaNodeJs color="#3C873A" />,
  'JS': <FaJs color="#F7DF1E" />,
  'CSS': <FaCss3Alt color="#264de4" />,
  'Redux': <FaCode color="#764abc" />,
};

interface ProjectCardProps {
  sarlavha: string;
  tavsif: string;
  rasm?: string;
  texnologiyalar: string[];
  githubHavolasi?: string;
  jonliDemo?: string;
}

const ProjectCard = ({
  sarlavha,
  tavsif,
  rasm,
  texnologiyalar,
  githubHavolasi,
  jonliDemo,
}: ProjectCardProps) => {
  const { t } = useLanguage();
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
                <FaExternalLinkAlt />
                <span className={styles.btnLabel}>{t('demo')}</span>
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
                <FaGithub />
                <span className={styles.btnLabel}>{t('code')}</span>
              </a>
            )}
          </div>
        </div>
        
        <div className={`${styles.techBadges} ${isHovered ? styles.visible : ''}`}>
          {texnologiyalar.slice(0, 3).map((tex, index) => (
            <span key={index} className={styles.techBadge}>
              {(() => {
                const foundKey = Object.keys(techIconMap).find(key => tex.includes(key));
                return foundKey ? techIconMap[foundKey as keyof typeof techIconMap] : <FaCode />;
              })()} {tex}
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
            <FaCode />
            <span>{t('webApp')}</span>
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
                {(() => {
                  const foundKey = Object.keys(techIconMap).find(key => tex.includes(key));
                  return foundKey ? techIconMap[foundKey as keyof typeof techIconMap] : <FaCode />;
                })()}
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
                <FaPlayCircle />
                {t('demo')}
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
                <FaGithub />
                {t('code')}
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

