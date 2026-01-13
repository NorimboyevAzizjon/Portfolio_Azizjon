// Portfolio.jsx - TO'LIQ VERSIYA
import React, { useState } from 'react';
import SeoHelmet from '../components/SeoHelmet';
import { useLanguage } from '../useLanguage';
import ProjectCard from '../components/ProjectCard.jsx';
import styles from './Portfolio.module.css';


const Portfolio = () => {
  const { t } = useLanguage();
  const description = t('portfolioTechTitle') + ' | ' + t('portfolioCtaText');
  // Texnologiya nomlari translation key sifatida massivda saqlanadi
  const [loyihalar] = useState([
    {
      id: 1,
      sarlavha: 'Online Portfolio',
      tavsif: 'Shaxsiy portfolio sayti: React, Vite, Framer Motion, ko‘p tilli va SEO optimizatsiyalangan.',
      rasm: 'https://raw.githubusercontent.com/NorimboyevAzizjon/Portfolio_Azizjon/main/public/manifest.json',
      texnologiyalar: ['React', 'Vite', 'Framer Motion', 'CSS Modules'],
      githubHavolasi: 'https://github.com/NorimboyevAzizjon/Portfolio_Azizjon',
      jonliDemo: 'https://azizjon-portfolio.vercel.app/',
      toifa: 'veb'
    },
    {
      id: 2,
      sarlavha: 'To-Do App',
      tavsif: 'Oddiy va qulay vazifalar ro‘yxati ilovasi. CRUD, localStorage, responsive dizayn.',
      rasm: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'CSS3', 'JavaScript'],
      githubHavolasi: 'https://github.com/NorimboyevAzizjon/todo-react',
      jonliDemo: 'https://todo-azizjon.netlify.app/',
      toifa: 'veb'
    },
    {
      id: 3,
      sarlavha: 'Weather App',
      tavsif: 'Ob-havo maʼlumotlari uchun API integratsiyali, zamonaviy interfeysli ilova.',
      rasm: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Weather API', 'Chart.js', 'Axios', 'Tailwind'],
      githubHavolasi: 'https://github.com/NorimboyevAzizjon/weather-app',
      jonliDemo: 'https://weather-azizjon.netlify.app/',
      toifa: 'veb'
    },
    {
      id: 4,
      sarlavha: 'Chat App',
      tavsif: 'Real-time chat ilovasi: Socket.io, Node.js, React va responsive dizayn.',
      rasm: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Node.js', 'Socket.io', 'CSS3'],
      githubHavolasi: 'https://github.com/NorimboyevAzizjon/chat-app',
      jonliDemo: 'https://chat-azizjon.netlify.app/',
      toifa: 'veb'
    },
    {
      id: 5,
      sarlavha: 'E-commerce Platform',
      tavsif: 'Onlayn do‘kon: mahsulotlar, savat, to‘lov va admin panel.',
      rasm: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Redux', 'Node.js', 'MongoDB', 'Express'],
      githubHavolasi: 'https://github.com/NorimboyevAzizjon/ecommerce-app',
      jonliDemo: 'https://ecommerce-azizjon.netlify.app/',
      toifa: 'veb'
    },
    {
      id: 6,
      sarlavha: 'Blog Platform',
      tavsif: 'Markdown asosida blog, foydalanuvchi autentifikatsiyasi va sharhlar.',
      rasm: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop',
      texnologiyalar: ['Next.js', 'Sanity.io', 'Tailwind', 'Vercel'],
      githubHavolasi: 'https://github.com/NorimboyevAzizjon/blog-platform',
      jonliDemo: 'https://blog-azizjon.vercel.app/',
      toifa: 'veb'
    },
    {
      id: 7,
      sarlavha: 'Task Manager',
      tavsif: 'Jamoaviy task management: drag & drop, deadline, progress tracking.',
      rasm: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Redux', 'DnD', 'Node.js'],
      githubHavolasi: 'https://github.com/NorimboyevAzizjon/task-manager',
      jonliDemo: 'https://task-azizjon.netlify.app/',
      toifa: 'veb'
    },
    {
      id: 8,
      sarlavha: 'Finance Tracker',
      tavsif: 'Shaxsiy moliya va xarajatlarni boshqarish uchun zamonaviy ilova.',
      rasm: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Chart.js', 'Firebase'],
      githubHavolasi: 'https://github.com/NorimboyevAzizjon/finance-tracker',
      jonliDemo: 'https://finance-azizjon.netlify.app/',
      toifa: 'veb'
    },
    {
      id: 9,
      sarlavha: 'Movie Search',
      tavsif: 'OMDb API asosida filmlar qidiruvi va saqlash.',
      rasm: 'https://images.unsplash.com/photo-1467987506553-8f3916508521?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'OMDb API', 'CSS3'],
      githubHavolasi: 'https://github.com/NorimboyevAzizjon/movie-search',
      jonliDemo: 'https://movie-azizjon.netlify.app/',
      toifa: 'veb'
    },
    {
      id: 10,
      sarlavha: 'Quiz App',
      tavsif: 'Savollar va testlar uchun interaktiv quiz platforma.',
      rasm: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Redux', 'CSS3'],
      githubHavolasi: 'https://github.com/NorimboyevAzizjon/quiz-app',
      jonliDemo: 'https://quiz-azizjon.netlify.app/',
      toifa: 'veb'
    },
    {
      id: 11,
      sarlavha: 'Notes App',
      tavsif: 'Oddiy va tezkor eslatmalar ilovasi, localStorage bilan.',
      rasm: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'CSS3', 'JavaScript'],
      githubHavolasi: 'https://github.com/NorimboyevAzizjon/notes-app',
      jonliDemo: 'https://notes-azizjon.netlify.app/',
      toifa: 'veb'
    },
    {
      id: 12,
      sarlavha: 'Portfolio Gallery',
      tavsif: 'Rasmlar va dizayn ishlarining galereyasi, lightbox bilan.',
      rasm: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Lightbox', 'CSS3'],
      githubHavolasi: 'https://github.com/NorimboyevAzizjon/portfolio-gallery',
      jonliDemo: 'https://gallery-azizjon.netlify.app/',
      toifa: 'veb'
    }
    // ... boshqa loyihalar ham shu tarzda to‘ldiriladi ...
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

  // Barcha texnologiyalarni olish va tarjima qilish
  // Texnologiya tarjimalari har doim tanlangan tilga mos olinadi
  let techTranslations = {};
  try {
    const lang = t('lang');
    techTranslations = require(`../locales/${lang}.js`)[`portfolioTechnologies_${lang}`] || {};
  } catch (e) {
    techTranslations = {};
  }
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
              {/* Icon rendering as before */}
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
              {/* Use translation if available */}
              {techTranslations[tex] || tex}
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