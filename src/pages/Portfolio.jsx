// Portfolio.jsx - TO'LIQ VERSIYA
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const [loyihalar] = useState([
    {
      id: 1,
      sarlavha: 'Rone E-commerce',
      tavsif: 'Zamonaviy va interaktiv elektron tijorat platformasi. Mahsulotlar katalogi, savat, to\'lov tizimi va foydalanuvchi paneli.',
      rasm: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 2,
      sarlavha: 'Restoran Topgich',
      tavsif: 'Xarita asosidagi restoran va mehmonxona topish ilovasi. Real vaqtda joylashuv, baholar va rezervatsiya qilish imkoniyati.',
      rasm: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Google Maps API', 'Firebase', 'SCSS', 'Axios'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 3,
      sarlavha: 'Vazifa Boshqaruvchi',
      tavsif: 'Kuchli vazifalar boshqaruvi ilovasi. Drag & drop, vazifa filtrlari, vaqt oralig\'i va progress monitoring.',
      rasm: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Redux', 'Express.js', 'MongoDB', 'DnD'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 4,
      sarlavha: 'Ob-havo Dashboardi',
      tavsif: 'Real vaqt ob-havo monitoring dashboardi. 5 kunlik prognoz, harorat grafiklari va shaharlarni solishtirish.',
      rasm: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Weather API', 'Chart.js', 'Axios', 'Tailwind'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 5,
      sarlavha: 'Ijtimoiy Tarmoq Ilovasi',
      tavsif: 'To\'liq xususiyatli ijtimoiy tarmoq ilovasi. Postlar, kommentariyalar, do\'stlar va xabar almashish.',
      rasm: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&auto=format&fit=crop',
      texnologiyalar: ['React Native', 'Firebase', 'Redux', 'Node.js', 'Expo'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'mobil'
    },
    {
      id: 6,
      sarlavha: 'Portfolio Shablon',
      tavsif: 'Responsive va zamonaviy portfolio vebsayt shabloni. Dark/light mode, animatsiyalar va SEO optimallashtirish.',
      rasm: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'CSS3', 'JavaScript', 'Framer Motion', 'GSAP'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 7,
      sarlavha: 'Kriptovalyuta Traker',
      tavsif: 'Real vaqt kriptovalyuta kuzatuvchi. Narxlar, grafiklar, portfel boshqaruvi va push-bildirishnomalar.',
      rasm: 'https://images.unsplash.com/photo-1620336655055-bd87c5d1d73f?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'CoinGecko API', 'Chart.js', 'Tailwind', 'WebSocket'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 8,
      sarlavha: 'Musiqa Pleyeri',
      tavsif: 'Zamonaviy interaktiv musiqa pleyeri. Pleylistlar, ovoz nazorati, qidiruv va favoritelar.',
      rasm: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Howler.js', 'Material-UI', 'Redux', 'Node.js'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 9,
      sarlavha: 'Onlayn Do\'kon',
      tavsif: 'To\'liq funksiyali onlayn do\'kon. Mahsulot filtrlari, sharhlar, chegirmalar va administrator paneli.',
      rasm: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Stripe API', 'MongoDB', 'Express', 'JWT'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 10,
      sarlavha: 'Blog Platformasi',
      tavsif: 'Modern blog platformasi. Maqolalar, kategoriyalar, izohlar va admin paneli bilan.',
      rasm: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop',
      texnologiyalar: ['Next.js', 'Sanity.io', 'Tailwind', 'Vercel', 'GraphQL'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 11,
      sarlavha: 'Fitnes Ilovasi',
      tavsif: 'Shaxsiy fitnes ilovasi. Mashg\'ulot rejalari, ovqatlanish kundaligi va progress monitoring.',
      rasm: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop',
      texnologiyalar: ['React Native', 'Firebase', 'HealthKit', 'Redux', 'Expo'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'mobil'
    },
    {
      id: 12,
      sarlavha: 'Video Konferensiya',
      tavsif: 'Real vaqt video konferensiya platformasi. Video/audio chat, ekran ulashish va chat xususiyatlari.',
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
    { id: 'hamma', nomi: 'Barcha Loyihalar', soni: loyihalar.length },
    { id: 'veb', nomi: 'Veb Dasturlash', soni: loyihalar.filter(l => l.toifa === 'veb').length },
    { id: 'mobil', nomi: 'Mobil Ilovalar', soni: loyihalar.filter(l => l.toifa === 'mobil').length },
    { id: 'react', nomi: 'React Loyihalari', soni: loyihalar.filter(l => l.texnologiyalar.some(t => t.includes('React'))).length }
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
    { raqam: loyihalar.length, yorliq: 'Jami Loyihalar', ikonka: 'fas fa-folder-open' },
    { raqam: filtrlanganLoyihalar().length, yorliq: 'Ko\'rsatilayotgan', ikonka: 'fas fa-eye' },
    { raqam: new Set(loyihalar.flatMap(l => l.texnologiyalar)).size, yorliq: 'Texnologiyalar', ikonka: 'fas fa-code' },
    { raqam: '100%', yorliq: 'Muvaffaqiyat Darajasi', ikonka: 'fas fa-trophy' }
  ];

  // Barcha texnologiyalarni olish
  const barchaTexnologiyalar = [...new Set(loyihalar.flatMap(l => l.texnologiyalar))];

  // Filter tugmalari uchun klass nomlarini aniqlash
  const getCategoryBtnClass = (toifaId) => {
    const isActive = filtr === toifaId && !(toifaId === 'hamma' && faqatReact);
    return `${styles.categoryBtn} ${isActive ? styles.active : ''}`;
  };

  return (
    <div className={`${styles.portfolioContainer} fade-in`} id="portfolio">
      <div className={styles.header}>
        <h1 className={styles.mainTitle}>
          PORTFOLIO
          <div className={styles.underline}></div>
        </h1>
        <p className={styles.tagline}>
          Turli dasturlash tillari va texnologiyalarda yaratgan ishlarimning namunalari. 
          Har bir loyiha o'zining noyob yechimi va dizayniga ega.
        </p>
      </div>

      {/* FILTR VA TOIFALAR */}
      <div className={styles.filtersContainer}>
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

        {filtr === 'hamma' && (
          <button 
            className={`${styles.reactFilter} ${faqatReact ? styles.active : ''}`}
            onClick={() => setFaqatReact(!faqatReact)}
            aria-label={faqatReact ? 'Barcha loyihalarni ko\'rish' : 'Faqat React loyihalarini ko\'rish'}
          >
            <i className={`fab fa-react ${faqatReact ? 'fa-spin' : ''}`}></i>
            {faqatReact ? 'Faqat React' : 'React loyihalar'}
          </button>
        )}
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
          <h3 className={styles.emptyStateTitle}>
            Bu toifada loyihalar topilmadi
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            Boshqa toifani tanlang yoki filterni o'zgartiring
          </p>
          <button
            className={styles.resetButton}
            onClick={() => {
              setFiltr('hamma');
              setFaqatReact(false);
            }}
          >
            <i className="fas fa-redo-alt"></i>
            Barcha loyihalarni ko'rish
          </button>
        </div>
      )}

      {/* TEXNOLOGIYALAR */}
      <div className={styles.technologiesSection}>
        <h2 className={styles.technologiesTitle}>
          <i className="fas fa-cogs" style={{ color: '#00CED1' }}></i>
          Ishlatilgan Texnologiyalar
        </h2>
        <p className={styles.technologiesSubtitle}>
          Loyihalarimda quyidagi zamonaviy texnologiyalardan foydalanganman
        </p>
        
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

              <i className={`${stat.ikonka} ${styles.statIcon}`}></i>

            <div className={styles.statNumber}>{stat.raqam}</div>
            <div className={styles.statLabel}>{stat.yorliq}</div>
          </div>
        ))}
      </div>

      {/* CALL TO ACTION */}
      <div className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>
          Loyiha hamkorligi uchun tayyorman!
        </h2>
        <p className={styles.ctaText}>
          Yangi va qiziqarli loyihalar uchun hamkorlik qilishga tayyorman. 
          Sizning g'oyangizni hayotga tatbiq etishda yordam beraman.
        </p>
        <a 
          href="#aloqa"
          className={styles.ctaButton}
        >
          <i className="fas fa-paper-plane"></i>
          Bog'lanish
        </a>
      </div>
    </div>
  );
};

export default Portfolio;