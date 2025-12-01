import React from 'react';
import './Home.module.css';

const Home = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#f8f9fa',
      position: 'relative',
      overflow: 'hidden'
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '50px',
      width: '100%'
    },
    textSection: {
      flex: 1,
      maxWidth: '600px'
    },
    greeting: {
      fontSize: '24px',
      color: '#3498db',
      fontWeight: '600',
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    greetingIcon: {
      animation: 'wave 1.5s infinite'
    },
    name: {
      fontSize: '64px',
      fontWeight: '800',
      color: '#2c3e50',
      marginBottom: '10px',
      lineHeight: '1.1'
    },
    title: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#7f8c8d',
      marginBottom: '30px'
    },
    highlight: {
      color: '#3498db',
      position: 'relative'
    },
    description: {
      fontSize: '18px',
      color: '#666',
      lineHeight: '1.8',
      marginBottom: '40px',
      maxWidth: '500px'
    },
    cvButton: {
      padding: '15px 40px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '30px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 20px rgba(52, 152, 219, 0.3)'
    },
    imageSection: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    },
    avatarContainer: {
      width: '400px',
      height: '400px',
      borderRadius: '50%',
      backgroundColor: '#e3f2fd',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)'
    },
    avatar: {
      width: '90%',
      height: '90%',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '10px solid white'
    },
    floatingElements: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0
    },
    floatingElement: {
      position: 'absolute',
      backgroundColor: '#3498db',
      borderRadius: '50%',
      opacity: '0.1'
    },
    stats: {
      display: 'flex',
      gap: '40px',
      marginTop: '50px',
      flexWrap: 'wrap'
    },
    statItem: {
      textAlign: 'center'
    },
    statNumber: {
      fontSize: '36px',
      fontWeight: '700',
      color: '#3498db',
      marginBottom: '5px'
    },
    statText: {
      fontSize: '16px',
      color: '#7f8c8d',
      fontWeight: '500'
    }
  };

  // Floating elements positions
  const floatingElements = [
    { top: '10%', left: '5%', width: '30px', height: '30px' },
    { top: '20%', right: '10%', width: '40px', height: '40px' },
    { bottom: '15%', left: '15%', width: '25px', height: '25px' },
    { bottom: '25%', right: '5%', width: '35px', height: '35px' }
  ];

  return (
    <div style={styles.container} className="fade-in">
      <div style={styles.content}>
        <div style={styles.textSection}>
          <div style={styles.greeting}>
            <i className="fas fa-hand-wave" style={styles.greetingIcon}></i>
            Hi, I'm
          </div>
          <h1 style={styles.name}>Muhammadamin</h1>
          <h2 style={styles.title}>
            A <span style={styles.highlight}>Frontend</span><br />
            Developer.
          </h2>
          
          <p style={styles.description}>
            Experienced Frontend developer with 2.5 years of industry experience. 
            Proficient with React. Used problem solving capabilities to improve 
            application performance by 14%. Created data visualization tools and 
            integrated designs. Increase the speed of the product life cycle and 
            deliver projects 100% on time.
          </p>
          
          <button 
            style={styles.cvButton}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(52, 152, 219, 0.3)';
            }}
          >
            <i className="fas fa-download"></i>
            Download CV
          </button>
          
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>2.5+</div>
              <div style={styles.statText}>Years Experience</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>50+</div>
              <div style={styles.statText}>Projects Completed</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>100%</div>
              <div style={styles.statText}>Client Satisfaction</div>
            </div>
          </div>
        </div>
        
        <div style={styles.imageSection}>
          <div style={styles.avatarContainer}>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop" 
              alt="Muhammadamin" 
              style={styles.avatar}
            />
            <div style={styles.floatingElements}>
              {floatingElements.map((el, index) => (
                <div 
                  key={index}
                  style={{
                    ...styles.floatingElement,
                    ...el,
                    animation: `float ${3 + index}s infinite ease-in-out`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-15deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @media (max-width: 1024px) {
          div[style*="content"] {
            flex-direction: column;
            text-align: center;
            gap: 30px;
          }
          
          div[style*="name"] {
            font-size: 48px;
          }
          
          div[style*="title"] {
            font-size: 36px;
          }
          
          div[style*="avatarContainer"] {
            width: 300px;
            height: 300px;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="name"] {
            font-size: 36px;
          }
          
          div[style*="title"] {
            font-size: 28px;
          }
          
          div[style*="avatarContainer"] {
            width: 250px;
            height: 250px;
          }
          
          div[style*="statNumber"] {
            font-size: 28px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;