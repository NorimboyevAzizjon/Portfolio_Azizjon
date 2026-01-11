
import React, { useState, useEffect } from 'react';
import { useLanguage } from '../useLanguage';
import styles from './About.module.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaBolt, FaCode, FaSass, FaFigma, FaGitAlt, FaWind, FaBootstrap, FaUniversity, FaGraduationCap, FaLaptopCode, FaGlobe, FaRobot, FaBriefcase, FaProjectDiagram, FaUsers, FaChartLine, FaExternalLinkAlt, FaCalendarAlt, FaInfoCircle, FaPaperPlane } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiRedux } from 'react-icons/si';

// Icon mapping for skills, education, stats
const iconMap = {
  'HTML5': <FaHtml5 color="#E44D26" />,
  'CSS3': <FaCss3Alt color="#264DE4" />,
  'JavaScript ES6+': <FaJsSquare color="#F7DF1E" />,
  'React.js': <FaReact color="#61DAFB" />,
  'Next.js': <FaBolt color="#000" />,
  'TypeScript': <FaCode color="#3178C6" />,
  'Sass/SCSS': <FaSass color="#CC6699" />,
  'Redux': <SiRedux color="#764ABC" />,
  'Figma': <FaFigma color="#A259FF" />,
  'Git': <FaGitAlt color="#F05032" />,
  'Tailwind CSS': <FaWind color="#38BDF8" />,
  'Bootstrap': <FaBootstrap color="#7952B3" />,
  'university': <FaUniversity />, 
  'course': <FaGraduationCap />,
  'online': <FaLaptopCode />,
  'default': <FaCode />
};

const About = () => {
  const [activeSection, setActiveSection] = useState('skills');
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState([]);
  const [stats, setStats] = useState([]);
  const { t } = useLanguage(); // t funksiyasini olish


  useEffect(() => {
    // Dynamically import translation arrays for skills and education
    import(`../locales/${t('lang')}.js`).then((mod) => {
      const skillsArr = mod[`aboutSkills_${t('lang')}`];
      const educationArr = mod[`aboutEducation_${t('lang')}`];
      // Add static fields for skills (level, color, icon, link)
      const skillsData = [
        { ...skillsArr[0], level: 95, color: '#E44D26', icon: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { ...skillsArr[1], level: 90, color: '#264DE4', icon: 'CSS3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { ...skillsArr[2], level: 90, color: '#F7DF1E', icon: 'JavaScript ES6+', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { ...skillsArr[3], level: 88, color: '#61DAFB', icon: 'React.js', link: 'https://reactjs.org/' },
        { ...skillsArr[4], level: 82, color: '#000000', icon: 'Next.js', link: 'https://nextjs.org/' },
        { ...skillsArr[5], level: 80, color: '#3178C6', icon: 'TypeScript', link: 'https://www.typescriptlang.org/' },
        { ...skillsArr[6], level: 78, color: '#CC6699', icon: 'Sass/SCSS', link: 'https://sass-lang.com/' },
        { ...skillsArr[7], level: 75, color: '#764ABC', icon: 'Redux', link: 'https://redux.js.org/' },
        { ...skillsArr[8], level: 70, color: '#A259FF', icon: 'Figma', link: 'https://figma.com/' },
        { ...skillsArr[9], level: 85, color: '#F05032', icon: 'Git', link: 'https://git-scm.com/' },
        { ...skillsArr[10], level: 77, color: '#38BDF8', icon: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
        { ...skillsArr[11], level: 73, color: '#7952B3', icon: 'Bootstrap', link: 'https://getbootstrap.com/' },
      ];
      // Add static fields for education (icon, link, type)
      const educationData = [
        { ...educationArr[0], icon: 'university', link: 'https://tuit.uz/', type: 'university' },
        { ...educationArr[1], icon: 'course', link: 'https://najottalim.uz/', type: 'course' },
        { ...educationArr[2], icon: 'online', link: 'https://mohirdev.uz/courses/frontend-reactjs', type: 'online' },
        { ...educationArr[3], icon: 'online', link: 'https://coursera.org/learn/frontend-development-for-java-full-stack', type: 'online' },
        { ...educationArr[4], icon: 'online', link: 'https://ustoz.ai/', type: 'online' },
      ];
      setSkills(skillsData);
      setEducation(educationData);
    });
    // Statistika
    const statsData = [
      { number: '1+', label: t('expYears'), icon: 'fa-briefcase', color: '#8A2BE2' },
      { number: '15+', label: t('projectsDone'), icon: 'fa-project-diagram', color: '#00CED1' },
      { number: '100%', label: t('clientSatisfaction'), icon: 'fa-users', color: '#FF6B35' },
      { number: '12+', label: 'Technology Skills', icon: 'fa-code', color: '#4CAF50' }
    ];
    setStats(statsData);
  }, [t]);

  const handleSkillClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  const handleEducationClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <>

      <div className={`${styles.container} fade-in`} id="haqimda">
      {/* Sarlavha qismi */}
      <div className={styles.header}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>{t('aboutTitle')}</h1>
          <div className={styles.titleUnderline}></div>
        </div>
      </div>

      {/* Tab navigatsiya */}
      <div className={styles.tabNavigation}>
        <button 
          className={`${styles.tab} ${activeSection === 'skills' ? styles.activeTab : ''}`}
          onClick={() => setActiveSection('skills')}
          aria-label={t('aboutTabSkillsAria')}
        >
          <FaCode />
          {t('aboutTabSkills')}
        </button>
        <button 
          className={`${styles.tab} ${activeSection === 'education' ? styles.activeTab : ''}`}
          onClick={() => setActiveSection('education')}
          aria-label={t('aboutTabEducationAria')}
        >
          <FaGraduationCap />
          {t('aboutTabEducation')}
        </button>
        <button 
          className={`${styles.tab} ${activeSection === 'stats' ? styles.activeTab : ''}`}
          onClick={() => setActiveSection('stats')}
          aria-label={t('aboutTabStatsAria')}
        >
          <FaChartLine />
          {t('aboutTabStats')}
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
                  onKeyPress={(e) => { 
                    if (e.key === 'Enter') handleSkillClick(skill.link); 
                  }}
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
                  onKeyPress={(e) => { 
                    if (e.key === 'Enter') handleEducationClick(edu.link); 
                  }}
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
        <p className={styles.ctaText}>{t('aboutCtaText')}</p>
        <button 
          className={styles.ctaButton}
          onClick={() => {
            const contactSection = document.getElementById('aloqa');
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          aria-label={t('aboutCtaAria')}
        >
          <FaPaperPlane />
          {t('aboutCtaBtn')}
        </button>
      </div>
    </div>
    </>
  );
};

export default About;
