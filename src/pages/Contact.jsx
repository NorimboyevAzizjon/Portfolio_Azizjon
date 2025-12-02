import React from 'react';
import styles from './About.module.css';

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
    <div className={`${styles.container} fade-in`} id="haqimda">
      
      {/* Sarlavha qismi */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          <i className="fas fa-user-circle" style={{marginRight: '15px', color: '#00CED1'}}></i>
          MEN HAQIMDA
          <div className={styles.titleUnderline}></div>
        </h1>
        <p className={styles.subtitle}>
          Mening <span style={{color: '#00CED1', fontWeight: '600'}}>texnik mahoratim</span>, 
          <span style={{color: '#8A2BE2', fontWeight: '600'}}> ta'lim tarixim</span> va 
          <span style={{color: '#FF6B35', fontWeight: '600'}}> professional tajribam</span> haqida batafsil
        </p>
      </div>

      {/* Asosiy kontent - 2 ustun */}
      <div className={styles.content}>
        
        {/* MAHORATLAR QISMI (Chap ustun) */}
        <div className={styles.skillsSection}>
          <h2 className={styles.sectionTitle}>
            <i className="fas fa-cogs" style={{color: '#00CED1', marginRight: '10px'}}></i>
            TEKNIK MAHORATLARIM
          </h2>
          
          {mahoratlar.map((mahorat, index) => (
            <a 
              key={index}
              href={mahorat.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.skillLink}
            >
              <div className={styles.skillItem}>
                <div className={styles.skillHeader}>
                  <div className={styles.skillLeft}>
                    <i className={mahorat.icon} style={{
                      fontSize: '24px',
                      color: mahorat.rang,
                      marginRight: '15px'
                    }}></i>
                    <div>
                      <span className={styles.skillName}>{mahorat.nomi}</span>
                      <div className={styles.skillDescription}>{mahorat.izoh}</div>
                    </div>
                  </div>
                  <div className={styles.skillRight}>
                    <span className={styles.skillPercentage} style={{ backgroundColor: `${mahorat.rang}20`, color: mahorat.rang }}>
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
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{
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
        <div className={styles.educationSection}>
          <h2 className={styles.sectionTitle}>
            <i className="fas fa-graduation-cap" style={{color: '#8A2BE2', marginRight: '10px'}}></i>
            TA'LIM TARIXIM
          </h2>
          
          {talim.map((edu, index) => (
            <a 
              key={index}
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.educationLink}
            >
              <div className={styles.educationItem}>
                <div className={styles.eduIcon}>
                  <i className={edu.icon} style={{
                    fontSize: '24px',
                    color: index === 0 ? '#8A2BE2' : index === 1 ? '#00CED1' : '#FF6B35'
                  }}></i>
                </div>
                <div className={styles.eduContent}>
                  <div className={styles.eduHeader}>
                    <h3 className={styles.educationDegree}>{edu.daraja}</h3>
                    <i className="fas fa-external-link-alt" style={{
                      fontSize: '14px',
                      color: '#00CED1',
                      opacity: 0.7
                    }}></i>
                  </div>
                  <p className={styles.educationUniversity}>
                    <i className="fas fa-university" style={{marginRight: '8px', color: '#00CED1'}}></i>
                    {edu.universitet}
                  </p>
                  <div className={styles.eduBottom}>
                    <span className={styles.educationYear}>
                      <i className="fas fa-calendar-alt" style={{marginRight: '6px'}}></i>
                      {edu.yil}
                    </span>
                    <span className={styles.eduNote}>
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
      <div className={styles.stats}>
        {stats.map((stat, index) => (
          <div 
            key={index}
            className={styles.statCard}
            style={{
              background: `linear-gradient(135deg, ${stat.rang}15, ${stat.rang}25)`,
              borderColor: `${stat.rang}30`
            }}
          >
            <div className={styles.statIconWrapper}>
              <i className={stat.ikonka} style={{color: stat.rang, fontSize: '42px'}}></i>
            </div>
            <div className={styles.statNumber}>{stat.raqam}</div>
            <div className={styles.statText}>{stat.matn}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;