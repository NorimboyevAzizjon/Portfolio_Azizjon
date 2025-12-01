import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';

const Portfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'Rone',
      description: 'Modern va interaktiv vebsayt e-commerce platformasi',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB'],
      githubLink: '#',
      liveDemo: '#',
      category: 'web'
    },
    {
      id: 2,
      title: 'Ronecarte',
      description: 'Xarita bazali ilova - restaurant va mehmonxona topish',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&auto=format&fit=crop',
      technologies: ['React', 'Google Maps API', 'Firebase'],
      githubLink: '#',
      liveDemo: '#',
      category: 'web'
    },
    {
      id: 3,
      title: 'Task Manager Pro',
      description: 'Vazifalar boshqaruvi ilovasi',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop',
      technologies: ['React', 'Redux', 'Express'],
      githubLink: '#',
      liveDemo: '#',
      category: 'web'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Real vaqt ob-havo dashboardi',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop',
      technologies: ['React', 'Weather API', 'Chart.js'],
      githubLink: '#',
      liveDemo: '#',
      category: 'web'
    },
    {
      id: 5,
      title: 'Social Network',
      description: 'Ijtimoiy tarmoq ilovasi',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&auto=format&fit=crop',
      technologies: ['React Native', 'Firebase', 'Redux'],
      githubLink: '#',
      liveDemo: '#',
      category: 'mobile'
    },
    {
      id: 6,
      title: 'Portfolio Template',
      description: 'Responsive portfolio vebsayt',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
      technologies: ['React', 'CSS3', 'JavaScript'],
      githubLink: '#',
      liveDemo: '#',
      category: 'web'
    }
  ]);

  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'react', name: 'React Projects' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => 
        filter === 'react' 
          ? project.technologies.some(tech => tech.includes('React'))
          : project.category === filter
      );

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
      margin: '0 auto',
      lineHeight: '1.6'
    },
    filterContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginBottom: '50px',
      flexWrap: 'wrap'
    },
    filterButton: {
      padding: '12px 30px',
      backgroundColor: '#f8f9fa',
      border: '2px solid #e9ecef',
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '16px',
      fontWeight: '600',
      color: '#495057',
      outline: 'none',
      minWidth: '150px'
    },
    filterButtonActive: {
      backgroundColor: '#3498db',
      borderColor: '#3498db',
      color: 'white',
      boxShadow: '0 4px 15px rgba(52, 152, 219, 0.3)'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '30px',
      marginBottom: '50px'
    },
    emptyState: {
      textAlign: 'center',
      padding: '80px 20px',
      color: '#7f8c8d'
    },
    emptyStateTitle: {
      fontSize: '24px',
      marginBottom: '15px',
      color: '#e74c3c'
    },
    stats: {
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: '#f8f9fa',
      padding: '40px',
      borderRadius: '15px',
      marginTop: '60px',
      flexWrap: 'wrap',
      gap: '30px'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '40px',
      fontWeight: '700',
      color: '#3498db',
      marginBottom: '10px'
    },
    statLabel: {
      fontSize: '16px',
      color: '#7f8c8d',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.container} className="fade-in">
      <div style={styles.header}>
        <h1 style={styles.title}>
          MY PORTFOLIO
          <div style={styles.titleUnderline}></div>
        </h1>
        <p style={styles.subtitle}>
          Here is some of my work that I've done in various programming languages.
        </p>
      </div>

      <div style={styles.filterContainer}>
        {categories.map((category) => (
          <button
            key={category.id}
            style={{
              ...styles.filterButton,
              ...(filter === category.id ? styles.filterButtonActive : {})
            }}
            onClick={() => setFilter(category.id)}
            onMouseEnter={(e) => {
              if (filter !== category.id) {
                e.currentTarget.style.backgroundColor = '#e9ecef';
                e.currentTarget.style.borderColor = '#dee2e6';
              }
            }}
            onMouseLeave={(e) => {
              if (filter !== category.id) {
                e.currentTarget.style.backgroundColor = '#f8f9fa';
                e.currentTarget.style.borderColor = '#e9ecef';
              }
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div style={styles.projectsGrid}>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            githubLink={project.githubLink}
            liveDemo={project.liveDemo}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div style={styles.emptyState}>
          <h3 style={styles.emptyStateTitle}>
            No projects found for this category
          </h3>
          <p>Try selecting a different filter</p>
        </div>
      )}

      <div style={styles.stats}>
        <div style={styles.statItem}>
          <div style={styles.statNumber}>{projects.length}</div>
          <div style={styles.statLabel}>Total Projects</div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statNumber}>{filteredProjects.length}</div>
          <div style={styles.statLabel}>Projects Showing</div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statNumber}>4</div>
          <div style={styles.statLabel}>Technologies</div>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statNumber}>100%</div>
          <div style={styles.statLabel}>Success Rate</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;