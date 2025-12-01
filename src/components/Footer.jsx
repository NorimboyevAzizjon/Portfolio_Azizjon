import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: '#2c3e50',
      color: '#ecf0f1',
      padding: '40px 20px',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '30px'
      }}>
        <div style={{
          fontSize: '32px',
          fontWeight: '700',
          color: '#fff'
        }}>
          Muhammadamin<span style={{ color: '#3498db' }}>.</span>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '30px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <a 
            href="#home" 
            style={{
              color: '#bdc3c7',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#3498db'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#bdc3c7'}
          >
            Home
          </a>
          <a 
            href="#about" 
            style={{
              color: '#bdc3c7',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#3498db'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#bdc3c7'}
          >
            About
          </a>
          <a 
            href="#portfolio" 
            style={{
              color: '#bdc3c7',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#3498db'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#bdc3c7'}
          >
            Portfolio
          </a>
          <a 
            href="#contact" 
            style={{
              color: '#bdc3c7',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#3498db'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#bdc3c7'}
          >
            Contact
          </a>
        </div>
        
        <div style={{
          display: 'flex',
          gap: '20px'
        }}>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#bdc3c7',
              fontSize: '20px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#bdc3c7'}
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#bdc3c7',
              fontSize: '20px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#bdc3c7'}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
            href="https://telegram.org" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              color: '#bdc3c7',
              fontSize: '20px',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#bdc3c7'}
          >
            <i className="fab fa-telegram"></i>
          </a>
        </div>
        
        <div style={{
          borderTop: '1px solid #34495e',
          paddingTop: '30px',
          color: '#95a5a6',
          fontSize: '14px',
          width: '100%'
        }}>
          <p>© {currentYear} Muhammadamin. All rights reserved.</p>
          <p style={{ marginTop: '10px' }}>
            Designed & Developed with <span style={{ color: '#e74c3c' }}>♥</span> by Muhammadamin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;