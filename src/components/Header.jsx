// Header.jsx - O'ZBEKCHA VA ZAMONAVIY
import React from 'react';

const Header = () => {
  const ijtimoiyTarmoqlar = [
   
  ];

  return (
    <header style={{
      position: 'fixed',
      top: '30px',
      right: '30px',
      zIndex: '1001',
      display: 'flex',
      gap: '18px',
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255, 255, 255, 0.08)',
      padding: '12px 20px',
      borderRadius: '50px',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
    }}>
      {ijtimoiyTarmoqlar.map((tarmoq, index) => (
        <a 
          key={index}
          href={tarmoq.havola} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '20px',
            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            textDecoration: 'none',
            border: '1px solid transparent'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px) scale(1.1)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            e.currentTarget.style.color = tarmoq.rang;
            e.currentTarget.style.borderColor = tarmoq.rang;
            e.currentTarget.style.boxShadow = `0 12px 24px ${tarmoq.rang}40`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
          }}
          aria-label={tarmoq.ikonka.split('-')[1]}
        >
          <i className={tarmoq.ikonka}></i>
        </a>
      ))}
    </header>
  );
};

export default Header;