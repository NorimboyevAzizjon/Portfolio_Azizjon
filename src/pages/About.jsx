import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBolt, FaCode, FaSass, FaFigma, FaGitAlt, FaWind, FaBootstrap, FaUniversity, FaGraduationCap, FaLaptopCode, FaGlobe, FaRobot, FaBriefcase, FaProjectDiagram, FaUsers, FaChartLine, FaExternalLinkAlt, FaCalendarAlt, FaInfoCircle, FaPaperPlane } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiRedux } from 'react-icons/si';
// Icon mapping for skills, education, stats
const iconMap = {
  'fab fa-html5': <FaHtml5 color="#E44D26" />,
   'fab fa-css3-alt': <FaCss3Alt color="#264DE4" />, 
   'fab fa-js-square': <FaJsSquare color="#F7DF1E" />, 
   'fab fa-react': <FaReact color="#61DAFB" />, 
   'fas fa-bolt': <FaBolt color="#000" />, 
  'fas fa-code': <FaCode color="#3178C6" />, 
   'fab fa-sass': <FaSass color="#CC6699" />, 
  'fab fa-redux': <SiRedux color="#764ABC" />, 
  'fab fa-figma': <FaFigma color="#A259FF" />, 
  'fab fa-git-alt': <FaGitAlt color="#F05032" />, 
  'fas fa-wind': <FaWind color="#38BDF8" />, 
  'fab fa-bootstrap': <FaBootstrap color="#7952B3" />, 
  'fas fa-external-link-alt': <FaExternalLinkAlt />, 
  'fas fa-university': <FaUniversity />, 
  'fas fa-graduation-cap': <FaGraduationCap />,
  'fas fa-laptop-code': <FaLaptopCode />, 
  'fas fa-globe': <FaGlobe />, 
  'fas fa-robot': <FaRobot />, 
  'fas fa-briefcase': <FaBriefcase />, 
  'fas fa-project-diagram': <FaProjectDiagram />, 
  'fas fa-users': <FaUsers />, 
  // eslint-disable-next-line no-dupe-keys
  // Duplicate removed: 'fas fa-code'
  'fas fa-chart-line': <FaChartLine />, 
  'fas fa-calendar-alt': <FaCalendarAlt />,
  'fas fa-info-circle': <FaInfoCircle />, 
  'fab fa-github': <FaGitAlt />, 
  'fab fa-linkedin': <FaUsers />, 
  'fab fa-twitter': <FaUsers />
};

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
      },
      // Qo'shimcha frontend texnologiyalari
      {
        name: 'Sass/SCSS',
        level: 78,
        color: '#CC6699',
        description: 'Nesting, Variables, Mixins',
        icon: 'fab fa-sass',
        link: 'https://sass-lang.com/'
      },
      {
        name: 'Redux',
        level: 75,
        color: '#764ABC',
        description: 'State Management, Toolkit',
        icon: 'fab fa-redux',
        link: 'https://redux.js.org/'
      },
      {
        name: 'Figma',
        level: 70,
        color: '#A259FF',
        description: 'UI/UX Dizayn, Prototyping',
        icon: 'fab fa-figma',
        link: 'https://figma.com/'
      },
      {
        name: 'Git',
        level: 85,
        color: '#F05032',
        description: 'Version Control, Branching',
        icon: 'fab fa-git-alt',
        link: 'https://git-scm.com/'
      },
            {
        name: 'Tailwind CSS',
        level: 77,
        color: '#38BDF8',
        description: 'Utility-first, Responsive Design',
        icon: 'fas fa-wind',
        link: 'https://tailwindcss.com/'
      },
      {
        name: 'Bootstrap',
        level: 73,
        color: '#7952B3',
        description: 'Grid System, Components',
        icon: 'fab fa-bootstrap',
        link: 'https://getbootstrap.com/'
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
        description: 'AI (suniy intellektlar)',
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
          aria-label="Texnik mahorat bo‘limini ko‘rsatish"
        >
          <FaCode />
          Texnik Mahorat
        </button>
        
        <button 
          className={`${styles.tab} ${activeSection === 'education' ? styles.activeTab : ''}`}
          onClick={() => setActiveSection('education')}
          aria-label="Ta'lim bo‘limini ko‘rsatish"
        >
          <FaGraduationCap />
          Ta'lim 
        </button>
        
        <button 
          className={`${styles.tab} ${activeSection === 'stats' ? styles.activeTab : ''}`}
          onClick={() => setActiveSection('stats')}
          aria-label="Statistika bo‘limini ko‘rsatish"
        >
          <FaChartLine />
          Statistika         
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
                  tabIndex={0}
                  aria-label={`${skill.name} haqida batafsil ma'lumot (yangi oynada ochiladi)`}
                  role="button"
                  onKeyPress={e => { if (e.key === 'Enter') handleSkillClick(skill.link); }}
                >
                  <div className={styles.skillHeader}>
                    <div className={styles.skillIcon}>
                      {iconMap[skill.icon] || <FaCode />}
                    </div>
                    <div className={styles.skillInfo}>
                      <h3 className={styles.skillName}>{skill.name}</h3>
                      <p className={styles.skillDescription}>{skill.description}</p>
                    </div>
                    <div className={styles.skillLevel}>
                      <span>{skill.level}%</span>
                      <FaExternalLinkAlt />
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
                  tabIndex={0}
                  aria-label={`${edu.degree} - ${edu.institution} (yangi oynada ochiladi)`}
                  role="button"
                  onKeyPress={e => { if (e.key === 'Enter') handleEducationClick(edu.link); }}
                >
                  <div className={styles.eduIcon}>
                    {iconMap[edu.icon] || <FaGraduationCap />}
                  </div>
                  <div className={styles.eduContent}>
                    <div className={styles.eduHeader}>
                      <h3 className={styles.eduDegree}>{edu.degree}</h3>
                      <div className={styles.eduLink}>
                        <FaExternalLinkAlt />
                      </div>
                    </div>
                    <p className={styles.eduInstitution}>
                      <FaUniversity />
                      {edu.institution}
                    </p>
                    <div className={styles.eduFooter}>
                      <span className={styles.eduPeriod}>
                        <FaCalendarAlt />
                        {edu.period}
                      </span>
                      <span className={styles.eduDescription}>
                        <FaInfoCircle />
                        {edu.description}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
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
                    {iconMap[stat.icon] || <FaCode />}
                  </div>
                  <div className={styles.statContent}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                  <div className={styles.statGlow}></div>
                </div>
              ))}
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
          aria-label="Aloqa bo‘limiga o'tish"
        >
          <FaPaperPlane />
          Bog'lanish
        </button>
      </div>
    </div>
  );
};

export default About;