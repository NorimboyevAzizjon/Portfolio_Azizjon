import React from 'react';

const Header = () => {
  const socialLinks = [
    { 
      icon: 'fab fa-github', 
      url: 'https://github.com', 
      color: '#333' 
    },
    { 
      icon: 'fab fa-linkedin-in', 
      url: 'https://linkedin.com', 
      color: '#0077b5' 
    },
    { 
      icon: 'fab fa-telegram', 
      url: 'https://telegram.org', 
      color: '#0088cc' 
    },
    { 
      icon: 'fab fa-instagram', 
      url: 'https://instagram.com', 
      color: '#E1306C' 
    }
  ];

  return (
    <header style={{
      position: 'fixed',
      top: '20px',
      right: '20px',
      zIndex: '1001',
      display: 'flex',
      gap: '15px'
    }}>
      {socialLinks.map((link, index) => (
        <a 
          key={index}
          href={link.url} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#333',
            fontSize: '18px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
            e.currentTarget.style.color = link.color;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
            e.currentTarget.style.color = '#333';
          }}
        >
          <i className={link.icon}></i>
        </a>
      ))}
    </header>
  );
};

export default Header;