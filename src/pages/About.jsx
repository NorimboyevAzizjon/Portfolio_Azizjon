import React, { useState, useEffect } from 'react';
import styles from './About.module.css';

const About = () => {
  const [activeSection, setActiveSection] = useState('skills');
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Mahoratlar ro'yxati
    const skillsData = [
      { 
        name: 'HTML5', 
        level: 95, 
        color: '#E44D26', 
        description: 'Semantik HTML, SEO optimallashtirish',
        icon: 'fab fa-html5',
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
      },
      { 
        name: 'CSS3', 
        level: 90, 
        color: '#264DE4', 
        description: 'Flexbox, Grid, Animatsiyalar',
        icon: 'fab fa-css3-alt',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
      },
      { 
        name: 'JavaScript ES6+', 
        level: 90, 
        color: '#F7DF1E', 
        description: 'Modern JavaScript, Async/Await',
        icon: 'fab fa-js-square',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      { 
        name: 'React.js', 
        level: 88, 
        color: '#61DAFB', 
        description: 'Hooks, Context API, Components',
        icon: 'fab fa-react',
        link: 'https://reactjs.org/'
      },
      { 
        name: 'Next.js', 
        level: 82, 
        color: '#000000', 
        description: 'App Router, Server Actions',
        icon: 'fas fa-bolt',
        link: 'https://nextjs.org/'
      },
      { 
        name: 'TypeScript', 
        level: 80, 
        color: '#3178C6', 
        description: 'Type safety, Interfaces',
        icon: 'fas fa-code',
        link: 'https://www.typescriptlang.org/'
      }
    ];

    // Ta'lim tarixi - takrorlanishlarni olib tashladim
    const educationData = [
      {
        degree: 'Dasturiy injiniring',
        institution: 'TATU (Toshkent Axborot Texnologiyalari Universiteti)',
        period: '2024-2028',
        description: 'Bakalavr darajasi',
        icon: 'fas fa-university',
        link: 'https://tuit.uz/',
        type: 'university'
      },
      {
        degree: 'Frontend Dasturlash',
        institution: 'Najot Ta\'lim',
        period: '2025',
        description: 'React.JS kurs, 8 oy',
        icon: 'fas fa-graduation-cap',
        link: 'https://najottalim.uz/',
        type: 'course'
      },
      {
        degree: 'Onlayin Platforma',
        institution: 'Mohirdev',
        period: '2025',
        description: 'ReactJS 6 oy',
        icon: 'fas fa-laptop-code',
        link: 'https://mohirdev.uz/courses/frontend-reactjs',
        type: 'online'
      },
      {
        degree: 'Onlayin Platforma',
        institution: 'Coursera (Board Infinity)',
        period: '2025',
        description: 'Web Development',
        icon: 'fas fa-globe',
        link: 'https://coursera.org/learn/frontend-development-for-java-full-stack',
        type: 'online'
      },
      {
        degree: 'Onlayin Platforma',
        institution: 'Ustoz AI',
        period: '2025',
        description: 'Premium, Asosiy, Kurslar, Oʻyinlar, AI va suniy intellektlar',
        icon: 'fas fa-robot',
        link: 'https://ustoz.ai/',
        type: 'online'
      }
    ];

    // Statistika
    const statsData = [
      { 
        number: '1+', 
        label: 'Yillik Tajriba', 
        icon: 'fas fa-briefcase',
        color: '#8A2BE2'
      },
      { 
        number: '15+', 
        label: 'Tugatilgan Loyihalar', 
        icon: 'fas fa-project-diagram',
        color: '#00CED1'
      },
      { 
        number: '100%', 
        label: 'Mijoz Mamnuniyati', 
        icon: 'fas fa-users',
        color: '#FF6B35'
      },
      { 
        number: '12+', 
        label: 'Texnologiya Bilimi', 
        icon: 'fas fa-code',
        color: '#4CAF50'
      }
    ];

    setSkills(skillsData);
    setEducation(educationData);
    setStats(statsData);
  }, []);

  const handleSkillClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleEducationClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`${styles.container} fade-in`} id="haqimda">
      
      {/* Sarlavha qismi */}
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>
            <span className={styles.titleIcon}>👨‍💻</span>
            Men Haqimda
          </h1>
          <div className={styles.titleUnderline}></div>
        </div>
      </div>

      {/* Tab navigatsiya */}
      <div className={styles.tabNavigation}>
        <button 
          className={`${styles.tab} ${activeSection === 'skills' ? styles.activeTab : ''}`}
          onClick={() => setActiveSection('skills')}
        >
          <i className="fas fa-code"></i>
          Texnik Mahorat
        </button>
        
        <button 
          className={`${styles.tab} ${activeSection === 'education' ? styles.activeTab : ''}`}
          onClick={() => setActiveSection('education')}
        >
          <i className="fas fa-graduation-cap"></i>
          Ta'lim & Sertifikatlar
        </button>
        
        <button 
          className={`${styles.tab} ${activeSection === 'stats' ? styles.activeTab : ''}`}
          onClick={() => setActiveSection('stats')}
        >
          <i className="fas fa-chart-line"></i>
          Statistika & Tajriba
        </button>
      </div>

      {/* Kontent qismi */}
      <div className={styles.content}>
        {/* Mahoratlar qismi */}
        {activeSection === 'skills' && (
          <div className={styles.skillsSection}>
            <div className={styles.skillsGrid}>
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className={styles.skillCard}
                  onClick={() => handleSkillClick(skill.link)}
                  style={{ '--skill-color': skill.color }}
                >
                  <div className={styles.skillHeader}>
                    <div className={styles.skillIcon}>
                      <i className={skill.icon}></i>
                    </div>
                    <div className={styles.skillInfo}>
                      <h3 className={styles.skillName}>{skill.name}</h3>
                      <p className={styles.skillDescription}>{skill.description}</p>
                    </div>
                    <div className={styles.skillLevel}>
                      <span>{skill.level}%</span>
                      <i className="fas fa-external-link-alt"></i>
                    </div>
                  </div>
                  <div className={styles.progressContainer}>
                    <div 
                      className={styles.progressBar}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ta'lim qismi */}
        {activeSection === 'education' && (
          <div className={styles.educationSection}>
            <div className={styles.educationTimeline}>
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className={`${styles.educationCard} ${styles[edu.type]}`}
                  onClick={() => handleEducationClick(edu.link)}
                >
                  <div className={styles.eduIcon}>
                    <i className={edu.icon}></i>
                  </div>
                  <div className={styles.eduContent}>
                    <div className={styles.eduHeader}>
                      <h3 className={styles.eduDegree}>{edu.degree}</h3>
                      <div className={styles.eduLink}>
                        <i className="fas fa-external-link-alt"></i>
                      </div>
                    </div>
                    <p className={styles.eduInstitution}>
                      <i className="fas fa-university"></i>
                      {edu.institution}
                    </p>
                    <div className={styles.eduFooter}>
                      <span className={styles.eduPeriod}>
                        <i className="fas fa-calendar-alt"></i>
                        {edu.period}
                      </span>
                      <span className={styles.eduDescription}>
                        <i className="fas fa-info-circle"></i>
                        {edu.description}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sertifikatlar qismi */}
            <div className={styles.certificatesSection}>
              <h3 className={styles.certificatesTitle}>
                <i className="fas fa-award"></i>
                Sertifikatlar
              </h3>
              <div className={styles.certificatesGrid}>
                <div className={styles.certificateCard}>
                  <div className={styles.certificateIcon}>
                    <i className="fab fa-react"></i>
                  </div>
                  <div className={styles.certificateContent}>
                    <div className={styles.certificateName}>React.js Development</div>
                    <div className={styles.certificateOrg}>Mohirdev, 2025</div>
                    <div className={styles.certificateLink} onClick={() => window.open('https://mohirdev.uz/', '_blank')}>
                      Ko'rish
                    </div>
                  </div>
                </div>
                
                <div className={styles.certificateCard}>
                  <div className={styles.certificateIcon}>
                    <i className="fab fa-js"></i>
                  </div>
                  <div className={styles.certificateContent}>
                    <div className={styles.certificateName}>JavaScript Advanced</div>
                    <div className={styles.certificateOrg}>Coursera, 2024</div>
                    <div className={styles.certificateLink} onClick={() => window.open('https://www.coursera.org/', '_blank')}>
                      Ko'rish
                    </div>
                  </div>
                </div>
                
                <div className={styles.certificateCard}>
                  <div className={styles.certificateIcon}>
                    <i className="fas fa-code"></i>
                  </div>
                  <div className={styles.certificateContent}>
                    <div className={styles.certificateName}>Frontend Development</div>
                    <div className={styles.certificateOrg}>Najot Ta'lim, 2025</div>
                    <div className={styles.certificateLink} onClick={() => window.open('https://najottalim.uz/', '_blank')}>
                      Ko'rish
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Statistika qismi */}
        {activeSection === 'stats' && (
          <div className={styles.statsSection}>
            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={styles.statCard}
                  style={{ '--stat-color': stat.color }}
                >
                  <div className={styles.statIcon}>
                    <i className={stat.icon}></i>
                  </div>
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                  <div className={styles.statGlow}></div>
                </div>
              ))}
            </div>
            
            <div className={styles.aboutText}>
              <h3>Professional Tajriba</h3>
              <p>
                1+ yillik professional tajriba davomida turli xil loyihalarda ishladim.
                Har bir loyihada yangi texnologiyalar va eng yaxshi amaliyotlarni o'rgandim.
                Mijozlar bilan yaqin hamkorlik qilib, ularning ehtiyojlariga mos yechimlar yaratdim.
              </p>
              <p>
                Mening asosiy maqsadim - foydalanuvchilar uchun qulay, tezkor va vizual jozibador
                veb-ilovalar yaratish. Har bir loyihada kod sifati, perfomans va foydalanuvchi tajribasiga
                alohida e'tibor qarataman.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className={styles.ctaSection}>
        <p className={styles.ctaText}>
          Sizning loyihangiz ustida hamkorlik qilishdan xursand bo'laman!
        </p>
        <button 
          className={styles.ctaButton}
          onClick={() => {
            const contactSection = document.getElementById('aloqa');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <i className="fas fa-paper-plane"></i>
          Bog'lanish
        </button>
      </div>
    </div>
  );
};

export default About;