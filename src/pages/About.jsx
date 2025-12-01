import React from 'react';

const About = () => {
  const skills = [
    { name: 'HTML', percentage: 80, color: '#E44D26' },
    { name: 'CSS', percentage: 80, color: '#264DE4' },
    { name: 'SCSS', percentage: 75, color: '#CC6699' },
    { name: 'Bootstrap', percentage: 70, color: '#7952B3' },
    { name: 'Tailwind', percentage: 58, color: '#38B2AC' },
    { name: 'JavaScript', percentage: 68, color: '#F7DF1E' },
    { name: 'React.js, Redux', percentage: 70, color: '#61DAFB' },
    { name: 'Next.js', percentage: 50, color: '#000000' },
    { name: 'React Native', percentage: 50, color: '#61DAFB' }
  ];

  const education = [
    { degree: 'Computer Science', university: 'TUIT', year: '2020-2024' },
    { degree: 'Frontend Development', university: 'Online Courses', year: '2022' },
    { degree: 'React Specialization', university: 'Udemy', year: '2023' }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 20px',
      fontFamily: "'Poppins', sans-serif"
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    title: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '15px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      position: 'relative',
      display: 'inline-block',
      paddingBottom: '15px'
    },
    titleUnderline: {
      content: '""',
      position: 'absolute',
      width: '100px',
      height: '4px',
      backgroundColor: '#3498db',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      borderRadius: '2px'
    },
    subtitle: {
      fontSize: '18px',
      color: '#7f8c8d',
      maxWidth: '600px',
      margin: '0 auto'
    },
    content: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      marginBottom: '50px'
    },
    skillsSection: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
    },
    sectionTitle: {
      fontSize: '28px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '30px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    skillItem: {
      marginBottom: '25px'
    },
    skillHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '8px'
    },
    skillName: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#2c3e50'
    },
    skillPercentage: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#3498db'
    },
    progressBar: {
      width: '100%',
      height: '10px',
      backgroundColor: '#ecf0f1',
      borderRadius: '5px',
      overflow: 'hidden'
    },
    progressFill: {
      height: '100%',
      borderRadius: '5px',
      transition: 'width 1s ease-in-out'
    },
    educationSection: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
    },
    educationItem: {
      marginBottom: '25px',
      paddingBottom: '25px',
      borderBottom: '1px solid #eee'
    },
    educationItemLast: {
      marginBottom: '0',
      paddingBottom: '0',
      borderBottom: 'none'
    },
    educationDegree: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '5px'
    },
    educationUniversity: {
      fontSize: '16px',
      color: '#3498db',
      marginBottom: '5px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    educationYear: {
      fontSize: '14px',
      color: '#7f8c8d',
      backgroundColor: '#f8f9fa',
      padding: '4px 12px',
      borderRadius: '20px',
      display: 'inline-block'
    },
    stats: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '30px',
      marginTop: '50px'
    },
    statCard: {
      backgroundColor: '#fff',
      padding: '30px',
      borderRadius: '15px',
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease'
    },
    statIcon: {
      fontSize: '40px',
      color: '#3498db',
      marginBottom: '20px'
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '10px'
    },
    statText: {
      fontSize: '16px',
      color: '#7f8c8d'
    }
  };

  return (
    <div style={styles.container} className="fade-in">
      <div style={styles.header}>
        <h1 style={styles.title}>
          ABOUT ME
          <span style={styles.titleUnderline}></span>
        </h1>
        <p style={styles.subtitle}>
          Learn more about my skills, education, and experience
        </p>
      </div>

      <div style={styles.content}>
        <div style={styles.skillsSection}>
          <h2 style={styles.sectionTitle}>
            <i className="fas fa-code"></i>
            MY SKILLS
          </h2>
          
          {skills.map((skill, index) => (
            <div key={index} style={styles.skillItem}>
              <div style={styles.skillHeader}>
                <span style={styles.skillName}>{skill.name}</span>
                <span style={styles.skillPercentage}>{skill.percentage}%</span>
              </div>
              <div style={styles.progressBar}>
                <div 
                  style={{
                    ...styles.progressFill,
                    width: `${skill.percentage}%`,
                    backgroundColor: skill.color
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div style={styles.educationSection}>
          <h2 style={styles.sectionTitle}>
            <i className="fas fa-graduation-cap"></i>
            EDUCATION
          </h2>
          
          {education.map((edu, index) => (
            <div 
              key={index} 
              style={{
                ...styles.educationItem,
                ...(index === education.length - 1 ? styles.educationItemLast : {})
              }}
            >
              <h3 style={styles.educationDegree}>{edu.degree}</h3>
              <p style={styles.educationUniversity}>
                <i className="fas fa-university"></i>
                {edu.university}
              </p>
              <span style={styles.educationYear}>{edu.year}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.stats}>
        <div 
          style={styles.statCard}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <i className="fas fa-briefcase" style={styles.statIcon}></i>
          <div style={styles.statNumber}>2.5+</div>
          <div style={styles.statText}>Years Experience</div>
        </div>
        
        <div 
          style={styles.statCard}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <i className="fas fa-project-diagram" style={styles.statIcon}></i>
          <div style={styles.statNumber}>50+</div>
          <div style={styles.statText}>Projects Completed</div>
        </div>
        
        <div 
          style={styles.statCard}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <i className="fas fa-users" style={styles.statIcon}></i>
          <div style={styles.statNumber}>100%</div>
          <div style={styles.statText}>Client Satisfaction</div>
        </div>
        
        <div 
          style={styles.statCard}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <i className="fas fa-certificate" style={styles.statIcon}></i>
          <div style={styles.statNumber}>15+</div>
          <div style={styles.statText}>Certificates Earned</div>
        </div>
      </div>
    </div>
  );
};

export default About;