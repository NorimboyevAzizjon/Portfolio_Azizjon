import React from 'react';
import './About.module.css';

const About = () => {
  // Mahoratlar ro'yxati - Har biriga havola qo'shildi
  const mahoratlar = [
    { 
      nomi: 'HTML5', 
      foiz: 95, 
      rang: '#E44D26', 
      izoh: 'Semantik HTML, SEO optimallashtirish',
      icon: 'fab fa-html5',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    { 
      nomi: 'CSS3', 
      foiz: 90, 
      rang: '#264DE4', 
      izoh: 'Flexbox, Grid, Animatsiyalar',
      icon: 'fab fa-css3-alt',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    { 
      nomi: 'SCSS/SASS', 
      foiz: 88, 
      rang: '#CC6699', 
      izoh: 'Mixin, Variables, Nesting',
      icon: 'fab fa-sass',
      link: 'https://sass-lang.com/'
    },
    { 
      nomi: 'Bootstrap 5', 
      foiz: 85, 
      rang: '#7952B3', 
      izoh: 'Responsive komponentlar',
      icon: 'fab fa-bootstrap',
      link: 'https://getbootstrap.com/'
    },
    { 
      nomi: 'Tailwind CSS', 
      foiz: 92, 
      rang: '#38B2AC', 
      izoh: 'Utility-first framework',
      icon: 'fas fa-wind',
      link: 'https://tailwindcss.com/'
    },
    { 
      nomi: 'JavaScript ES6+', 
      foiz: 90, 
      rang: '#F7DF1E', 
      izoh: 'Modern JavaScript',
      icon: 'fab fa-js-square',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    { 
      nomi: 'React.js', 
      foiz: 88, 
      rang: '#61DAFB', 
      izoh: 'Hooks, Context API, Components',
      icon: 'fab fa-react',
      link: 'https://reactjs.org/'
    },
    { 
      nomi: 'Next.js 14', 
      foiz: 82, 
      rang: '#000000', 
      izoh: 'App Router, Server Actions',
      icon: 'fas fa-bolt',
      link: 'https://nextjs.org/'
    },
    { 
      nomi: 'React Native', 
      foiz: 75, 
      rang: '#61DAFB', 
      izoh: 'Mobile ilovalar',
      icon: 'fas fa-mobile-alt',
      link: 'https://reactnative.dev/'
    },
    { 
      nomi: 'TypeScript', 
      foiz: 80, 
      rang: '#3178C6', 
      izoh: 'Type safety, Interfaces',
      icon: 'fas fa-code',
      link: 'https://www.typescriptlang.org/'
    },
    { 
      nomi: 'Git / GitHub', 
      foiz: 85, 
      rang: '#F1502F', 
      izoh: 'Version control, CI/CD',
      icon: 'fab fa-github',
      link: 'https://github.com/'
    },
    { 
      nomi: 'REST API', 
      foiz: 88, 
      rang: '#FF6B35', 
      izoh: 'Axios, Fetch API',
      icon: 'fas fa-server',
      link: 'https://restfulapi.net/'
    }
  ];

  // Ta'lim tarixi - Har biriga havola
  const talim = [
    { 
      daraja: 'Kompyuter Fanlari', 
      universitet: 'TUIT (Toshkent Axborot Texnologiyalari Universiteti)', 
      yil: '2024-2028',
      izoh: 'Bakalavr darajasi',
      icon: 'fas fa-university',
      link: 'https://tuit.uz/'
    },
    { 
      daraja: 'Frontend Dasturlash', 
      universitet: 'Najot Ta\'lim', 
      yil: '2025',
      izoh: 'Professional kurs, 6 oy',
      icon: 'fas fa-graduation-cap',
      link: 'https://najottalim.uz/'
    },
    { 
      daraja: 'React.js Mukammallashuvi', 
      universitet: 'Onlayn Platformalar', 
      yil: '2024-2025',
      izoh: 'Udemy, Coursera, YouTube',
      icon: 'fas fa-laptop-code',
      link: 'https://www.udemy.com/'
    }
  ];

  // Statistika ko'rsatkichlari
  const stats = [
    { 
      raqam: '1+', 
      matn: 'Yillik Tajriba', 
      ikonka: 'fas fa-briefcase',
      rang: '#8A2BE2'
    },
    { 
      raqam: '15+', 
      matn: 'Tugatilgan Loyihalar', 
      ikonka: 'fas fa-project-diagram',
      rang: '#00CED1'
    },
    { 
      raqam: '100%', 
      matn: 'Mijoz Mamnuniyati', 
      ikonka: 'fas fa-users',
      rang: '#FF6B35'
    },
    { 
      raqam: '12+', 
      matn: 'Texnologiya Bilimi', 
      ikonka: 'fas fa-code',
      rang: '#4CAF50'
    }
  ];

  return (
    <div style={styles.container} id="haqimda" className="fade-in">
      
      {/* Sarlavha qismi */}
      <div style={styles.header}>
        <h1 style={styles.title}>
          <i className="fas fa-user-circle" style={{marginRight: '15px', color: '#00CED1'}}></i>
          MEN HAQIMDA
          <div style={styles.titleLine}></div>
        </h1>
        <p style={styles.subtitle}>
          Mening <span style={{color: '#00CED1', fontWeight: '600'}}>texnik mahoratim</span>, 
          <span style={{color: '#8A2BE2', fontWeight: '600'}}> ta'lim tarixim</span> va 
          <span style={{color: '#FF6B35', fontWeight: '600'}}> professional tajribam</span> haqida batafsil
        </p>
      </div>

      {/* Asosiy kontent - 2 ustun */}
      <div style={styles.mainContent}>
        
        {/* MAHORATLAR QISMI (Chap ustun) */}
        <div style={styles.skillSection}>
          <h2 style={styles.sectionTitle}>
            <i className="fas fa-cogs" style={{color: '#00CED1', marginRight: '10px'}}></i>
            TEKNIK MAHORATLARIM
          </h2>
          
          {mahoratlar.map((mahorat, index) => (
            <a 
              key={index}
              href={mahorat.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.skillLink}
            >
              <div style={styles.skillItem}>
                <div style={styles.skillHeader}>
                  <div style={styles.skillLeft}>
                    <i className={mahorat.icon} style={{
                      fontSize: '24px',
                      color: mahorat.rang,
                      marginRight: '15px'
                    }}></i>
                    <div>
                      <span style={styles.skillName}>{mahorat.nomi}</span>
                      <div style={styles.skillDescription}>{mahorat.izoh}</div>
                    </div>
                  </div>
                  <div style={styles.skillRight}>
                    <span style={{...styles.skillPercent, backgroundColor: `${mahorat.rang}20`, color: mahorat.rang}}>
                      {mahorat.foiz}%
                    </span>
                    <i className="fas fa-external-link-alt" style={{
                      fontSize: '14px',
                      color: mahorat.rang,
                      marginLeft: '8px',
                      opacity: 0.7
                    }}></i>
                  </div>
                </div>
                <div style={styles.progressBar}>
                  <div 
                    style={{
                      ...styles.progressFill,
                      width: `${mahorat.foiz}%`,
                      background: `linear-gradient(90deg, ${mahorat.rang}, ${mahorat.rang}80)`,
                      boxShadow: `0 0 15px ${mahorat.rang}40`
                    }}
                  ></div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* TA'LIM QISMI (O'ng ustun) */}
        <div style={styles.educationSection}>
          <h2 style={styles.sectionTitle}>
            <i className="fas fa-graduation-cap" style={{color: '#8A2BE2', marginRight: '10px'}}></i>
            TA'LIM TARIXIM
          </h2>
          
          {talim.map((edu, index) => (
            <a 
              key={index}
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.educationLink}
            >
              <div style={styles.educationItem}>
                <div style={styles.eduIcon}>
                  <i className={edu.icon} style={{
                    fontSize: '24px',
                    color: index === 0 ? '#8A2BE2' : index === 1 ? '#00CED1' : '#FF6B35'
                  }}></i>
                </div>
                <div style={styles.eduContent}>
                  <div style={styles.eduHeader}>
                    <h3 style={styles.eduDegree}>{edu.daraja}</h3>
                    <i className="fas fa-external-link-alt" style={{
                      fontSize: '14px',
                      color: '#00CED1',
                      opacity: 0.7
                    }}></i>
                  </div>
                  <p style={styles.eduUniversity}>
                    <i className="fas fa-university" style={{marginRight: '8px', color: '#00CED1'}}></i>
                    {edu.universitet}
                  </p>
                  <div style={styles.eduBottom}>
                    <span style={styles.eduYear}>
                      <i className="fas fa-calendar-alt" style={{marginRight: '6px'}}></i>
                      {edu.yil}
                    </span>
                    <span style={styles.eduNote}>
                      <i className="fas fa-info-circle" style={{marginRight: '6px'}}></i>
                      {edu.izoh}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* STATISTIKA KARTALARI */}
      <div style={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div 
            key={index}
            style={{
              ...styles.statCard,
              background: `linear-gradient(135deg, ${stat.rang}15, ${stat.rang}25)`,
              borderColor: `${stat.rang}30`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
              e.currentTarget.style.boxShadow = `0 20px 45px ${stat.rang}40`;
              e.currentTarget.style.background = `linear-gradient(135deg, ${stat.rang}25, ${stat.rang}35)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.background = `linear-gradient(135deg, ${stat.rang}15, ${stat.rang}25)`;
            }}
          >
            <div style={styles.statIconWrapper}>
              <i className={stat.ikonka} style={{...styles.statIcon, color: stat.rang}}></i>
            </div>
            <div style={styles.statNumber}>{stat.raqam}</div>
            <div style={styles.statText}>{stat.matn}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

// CSS STILLARI
const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '100px 20px 80px',
    fontFamily: "'Poppins', sans-serif",
    position: 'relative',
    zIndex: 1
  },
  header: {
    textAlign: 'center',
    marginBottom: '70px',
    position: 'relative'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '900',
    marginBottom: '1.5rem',
    background: 'linear-gradient(135deg, #F8FAFC 0%, #8A2BE2 50%, #00CED1 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    letterSpacing: '1px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleLine: {
    width: '120px',
    height: '5px',
    background: 'linear-gradient(90deg, #8A2BE2, #00CED1)',
    margin: '20px auto 0',
    borderRadius: '3px'
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#CBD5E1',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.7'
  },
  mainContent: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '50px',
    marginBottom: '60px'
  },
  skillSection: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.08))',
    backdropFilter: 'blur(20px)',
    padding: '35px',
    borderRadius: '25px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
  },
  educationSection: {
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.08))',
    backdropFilter: 'blur(20px)',
    padding: '35px',
    borderRadius: '25px',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
  },
  sectionTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#F8FAFC',
    marginBottom: '35px',
    display: 'flex',
    alignItems: 'center'
  },
  skillLink: {
    textDecoration: 'none',
    display: 'block',
    marginBottom: '20px'
  },
  skillItem: {
    padding: '20px',
    borderRadius: '15px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  skillHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    alignItems: 'center'
  },
  skillLeft: {
    display: 'flex',
    alignItems: 'center',
    flex: 1
  },
  skillRight: {
    display: 'flex',
    alignItems: 'center'
  },
  skillName: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#F8FAFC',
    display: 'block'
  },
  skillDescription: {
    fontSize: '14px',
    color: '#94A3B8',
    marginTop: '5px'
  },
  skillPercent: {
    fontSize: '15px',
    fontWeight: '700',
    padding: '6px 14px',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center'
  },
  progressBar: {
    width: '100%',
    height: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '5px',
    overflow: 'hidden',
    position: 'relative'
  },
  progressFill: {
    height: '100%',
    borderRadius: '5px',
    transition: 'width 1.2s cubic-bezier(0.65, 0, 0.35, 1)'
  },
  educationLink: {
    textDecoration: 'none',
    display: 'block',
    marginBottom: '25px'
  },
  educationItem: {
    padding: '25px',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-start'
  },
  eduIcon: {
    width: '60px',
    height: '60px',
    background: 'rgba(138, 43, 226, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px solid rgba(138, 43, 226, 0.3)',
    flexShrink: 0
  },
  eduContent: {
    flex: 1
  },
  eduHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '10px'
  },
  eduDegree: {
    fontSize: '1.4rem',
    fontWeight: '700',
    color: '#F8FAFC',
    margin: 0
  },
  eduUniversity: {
    fontSize: '1.1rem',
    color: '#00CED1',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center'
  },
  eduBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px'
  },
  eduYear: {
    fontSize: '0.95rem',
    color: '#94A3B8',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    padding: '8px 16px',
    borderRadius: '25px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    display: 'flex',
    alignItems: 'center'
  },
  eduNote: {
    fontSize: '0.9rem',
    color: '#CBD5E1',
    fontStyle: 'italic',
    display: 'flex',
    alignItems: 'center'
  },
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    marginTop: '60px'
  },
  statCard: {
    backdropFilter: 'blur(15px)',
    padding: '35px 25px',
    borderRadius: '20px',
    textAlign: 'center',
    border: '1px solid',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    cursor: 'pointer'
  },
  statIconWrapper: {
    marginBottom: '22px'
  },
  statIcon: {
    fontSize: '42px'
  },
  statNumber: {
    fontSize: '2.5rem',
    fontWeight: '800',
    color: '#F8FAFC',
    marginBottom: '12px'
  },
  statText: {
    fontSize: '1.1rem',
    color: '#CBD5E1',
    fontWeight: '500'
  }
};

export default About;