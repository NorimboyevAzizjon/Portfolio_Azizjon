// Portfolio.jsx - TO'LIQ VERSIYA
import React, { useState } from 'react';
import SeoHelmet from '../components/SeoHelmet';
import { useLanguage } from '../useLanguage';
import ProjectCard from '../components/ProjectCard.jsx';
import styles from './Portfolio.module.css';


const Portfolio = () => {
  const { t } = useLanguage();
  const description = t('portfolioTechTitle') + ' | ' + t('portfolioCtaText');
  const [loyihalar] = useState([
    {
      id: 1,
      sarlavha: t('project1_title'),
      tavsif: t('project1_desc'),
      rasm: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 2,
      sarlavha: t('project2_title'),
      tavsif: t('project2_desc'),
      rasm: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Google Maps API', 'Firebase', 'SCSS', 'Axios'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 3,
      sarlavha: t('project3_title'),
      tavsif: t('project3_desc'),
      rasm: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Redux', 'Express.js', 'MongoDB', 'DnD'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 4,
      sarlavha: t('project4_title'),
      tavsif: t('project4_desc'),
      rasm: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Weather API', 'Chart.js', 'Axios', 'Tailwind'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 5,
      sarlavha: t('project5_title'),
      tavsif: t('project5_desc'),
      rasm: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&auto=format&fit=crop',
      texnologiyalar: ['React Native', 'Firebase', 'Redux', 'Node.js', 'Expo'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'mobil'
    },
    {
      id: 6,
      sarlavha: t('project6_title'),
      tavsif: t('project6_desc'),
      rasm: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'CSS3', 'JavaScript', 'Framer Motion', 'GSAP'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 7,
      sarlavha: t('project7_title'),
      tavsif: t('project7_desc'),
      rasm: 'https://images.unsplash.com/photo-1620336655055-bd87c5d1d73f?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'CoinGecko API', 'Chart.js', 'Tailwind', 'WebSocket'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 8,
      sarlavha: t('project8_title'),
      tavsif: t('project8_desc'),
      rasm: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Howler.js', 'Material-UI', 'Redux', 'Node.js'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 9,
      sarlavha: t('project9_title'),
      tavsif: t('project9_desc'),
      rasm: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Stripe API', 'MongoDB', 'Express', 'JWT'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 10,
      sarlavha: t('project10_title'),
      tavsif: t('project10_desc'),
      rasm: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop',
      texnologiyalar: ['Next.js', 'Sanity.io', 'Tailwind', 'Vercel', 'GraphQL'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 11,
      sarlavha: t('project11_title'),
      tavsif: t('project11_desc'),
      rasm: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop',
      texnologiyalar: ['React Native', 'Firebase', 'HealthKit', 'Redux', 'Expo'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'mobil'
    },
    {
      id: 12,
      sarlavha: t('project12_title'),
      tavsif: t('project12_desc'),
      rasm: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'WebRTC', 'Socket.io', 'Node.js', 'WebSocket'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    }
  ]);

  const [filtr, setFiltr] = useState('hamma');
  const [faqatReact, setFaqatReact] = useState(false);

  const toifalar = [
    { id: 'hamma', nomi: t('portfolioAll'), soni: loyihalar.length },
    { id: 'veb', nomi: t('portfolioWeb'), soni: loyihalar.filter(l => l.toifa === 'veb').length },
    { id: 'mobil', nomi: t('portfolioMobile'), soni: loyihalar.filter(l => l.toifa === 'mobil').length },
    { id: 'react', nomi: t('portfolioReact'), soni: loyihalar.filter(l => l.texnologiyalar.some(tex => tex.includes('React'))).length }
  ];

  const filtrlanganLoyihalar = () => {
    if (filtr === 'hamma') {
      if (faqatReact) {
        return loyihalar.filter(loyiha => loyiha.texnologiyalar.some(tex => tex.includes('React')));
      }
      return loyihalar;
    } else if (filtr === 'react') {
      return loyihalar.filter(loyiha => loyiha.texnologiyalar.some(tex => tex.includes('React')));
    } else {
      return loyihalar.filter(loyiha => loyiha.toifa === filtr);
    }
  };

  const statistika = [
    { raqam: loyihalar.length, yorliq: t('portfolioStatsTotal'), ikonka: 'fas fa-folder-open' },
    { raqam: filtrlanganLoyihalar().length, yorliq: t('portfolioStatsShowing'), ikonka: 'fas fa-eye' },
    { raqam: new Set(loyihalar.flatMap(l => l.texnologiyalar)).size, yorliq: t('portfolioStatsTech'), ikonka: 'fas fa-code' },
    { raqam: '100%', yorliq: t('portfolioStatsSuccess'), ikonka: 'fas fa-trophy' }
  ];

  // Barcha texnologiyalarni olish
  const barchaTexnologiyalar = [...new Set(loyihalar.flatMap(l => l.texnologiyalar))];

  // Filter tugmalari uchun klass nomlarini aniqlash
  const getCategoryBtnClass = (toifaId) => {
    const isActive = filtr === toifaId && !(toifaId === 'hamma' && faqatReact);
    return `${styles.categoryBtn} ${isActive ? styles.active : ''}`;
  };

  return (
    <>
      <SeoHelmet
        title={t('portfolioTitle') + ' | Portfolio'}
        description={description}
        keywords="Azizjon Norimboyev, Portfolio, Web Developer, React, Projects, Uzbekistan"
        ogUrl={typeof window !== 'undefined' ? window.location.href : ''}
      />

      <div className={`${styles.portfolioContainer} fade-in`} id="portfolio" aria-label="Portfolio sahifasi">
      <div className={styles.header}>
        <h1 className={styles.mainTitle} aria-label="Portfolio sarlavhasi">
          {t('portfolioTitle')}
          <div className={styles.underline}></div>
        </h1>

      </div>

      {/* FILTR VA TOIFALAR */}
      <div className={styles.filtersContainer} aria-label="Portfolio filtr va toifalar">
        <div className={styles.categoriesContainer}>
          {toifalar.map((toifa) => (
            <button
              key={toifa.id}
              className={getCategoryBtnClass(toifa.id)}
              onClick={() => {
                setFiltr(toifa.id);
                if (toifa.id !== 'react') {
                  setFaqatReact(false);
                }
              }}
              aria-label={`${toifa.nomi} loyihalarini ko'rish`}
            >
              {toifa.nomi}
              <span className={styles.count}>{toifa.soni}</span>
            </button>
          ))}
        </div>

        {/* React loyihalar tugmasi olib tashlandi */}
      </div>

      {/* LOYIHALAR QATORI */}
      <div className={styles.projectsGrid}>
        {filtrlanganLoyihalar().map((loyiha) => (
          <ProjectCard
            key={loyiha.id}
            sarlavha={loyiha.sarlavha}
            tavsif={loyiha.tavsif}
            rasm={loyiha.rasm}
            texnologiyalar={loyiha.texnologiyalar}
            githubHavolasi={loyiha.githubHavolasi}
            jonliDemo={loyiha.jonliDemo}
          />
        ))}
      </div>

      {/* BO'SH HOLAT */}
      {filtrlanganLoyihalar().length === 0 && (
        <div className={styles.emptyState}>
          <h3 className={styles.emptyStateTitle}>{t('portfolioNoProjects')}</h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>{t('portfolioNoProjectsDesc')}</p>
          <button
            className={styles.resetButton}
            onClick={() => {
              setFiltr('hamma');
              setFaqatReact(false);
            }}
          >
            <i className="fas fa-redo-alt"></i>
            {t('portfolioShowAll')}
          </button>
        </div>
      )}

      {/* TEXNOLOGIYALAR */}
      <div className={styles.technologiesSection}>
        <h2 className={styles.technologiesTitle}>
          <i className="fas fa-cogs" style={{ color: '#00CED1' }}></i>
          {t('portfolioTechTitle')}
        </h2>
        
        
        <div className={styles.technologiesContainer}>
          {barchaTexnologiyalar.map((tex, index) => (
            <div 
              key={index} 
              className={styles.technologyTag}
            >
              {tex.includes('React') && <i className="fab fa-react"></i>}
              {tex.includes('Node') && <i className="fab fa-node-js"></i>}
              {tex.includes('MongoDB') && <i className="fas fa-database"></i>}
              {tex.includes('Firebase') && <i className="fas fa-fire"></i>}
              {tex.includes('JavaScript') && <i className="fab fa-js"></i>}
              {tex.includes('CSS') && <i className="fab fa-css3-alt"></i>}
              {tex.includes('Express') && <i className="fas fa-server"></i>}
              {tex.includes('Redux') && <i className="fas fa-code-branch"></i>}
              {tex.includes('Tailwind') && <i className="fas fa-wind"></i>}
              {tex.includes('GraphQL') && <i className="fas fa-project-diagram"></i>}
              {!tex.includes('React') && !tex.includes('Node') && !tex.includes('MongoDB') && 
               !tex.includes('Firebase') && !tex.includes('JavaScript') && !tex.includes('CSS') &&
               !tex.includes('Express') && !tex.includes('Redux') && !tex.includes('Tailwind') &&
               !tex.includes('GraphQL') && <i className="fas fa-code"></i>}
              {tex}
            </div>
          ))}
        </div>
      </div>

      {/* STATISTIKA */}
      <div className={styles.statsContainer}>
        {statistika.map((stat, index) => (
          <div 
            key={index}
            className={styles.statCard}
          >
            <i className={`${stat.ikonka} ${styles.statIcon}`}></i>


            <div className={styles.statNumber}>{stat.raqam}</div>
            <div className={styles.statLabel}>{stat.yorliq}</div>
          </div>
        ))}
      </div>

      {/* CALL TO ACTION */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>{t('portfolioCtaTitle')}</h2>
        <p className={styles.ctaText}>{t('portfolioCtaText')}</p>
        <a 
          href="#aloqa"
          className={styles.ctaButton}
        >
          <i className="fas fa-paper-plane"></i>
          {t('portfolioContactBtn')}
        </a>
      </div>
    </div>
  </> 
  );
};

export default Portfolio;