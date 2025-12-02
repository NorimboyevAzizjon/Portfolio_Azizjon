// Footer.jsx - O'ZBEKCHA VA ZAMONAVIY
import React from 'react';

const Footer = () => {
  const joriyYil = new Date().getFullYear();

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0A1929 0%, #1A2C42 100%)',
      color: '#CBD5E1',
      padding: '60px 20px 30px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      marginTop: '100px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
      }}>
        
        {/* LOGO */}
        <div style={{
          fontSize: '2.8rem',
          fontWeight: '800',
          color: '#F8FAFC',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span>Muhammadamin</span>
          <span style={{ 
            color: '#FF6B35',
            fontSize: '3rem',
            animation: 'pulse 2s infinite'
          }}>.</span>
        </div>
        
        {/* NAVIGATSIYA LINKLARI */}
        <div style={{
          display: 'flex',
          gap: '40px',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {['Bosh Sahifa', 'Haqimda', 'Portfolio', 'Aloqa'].map((item, index) => (
            <a 
              key={index}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              style={{
                color: '#94A3B8',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: '500',
                padding: '10px 20px',
                borderRadius: '50px',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FF6B35';
                e.currentTarget.style.background = 'rgba(255, 107, 53, 0.1)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#94A3B8';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              aria-label={item}
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* IJTIMOIY TARMOQLAR */}
        <div style={{
          display: 'flex',
          gap: '25px'
        }}>
          {[
            { ikonka: 'fab fa-github', havola: 'https://github.com', rang: '#F8FAFC' },
            { ikonka: 'fab fa-linkedin-in', havola: 'https://linkedin.com', rang: '#0077b5' },
            { ikonka: 'fab fa-telegram', havola: 'https://telegram.org', rang: '#0088cc' },
            { ikonka: 'fab fa-instagram', havola: 'https://instagram.com', rang: '#E1306C' }
          ].map((tarmoq, index) => (
            <a 
              key={index}
              href={tarmoq.havola}
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: '#CBD5E1',
                fontSize: '1.5rem',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                width: '55px',
                height: '55px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = tarmoq.rang;
                e.currentTarget.style.transform = 'translateY(-6px) rotate(10deg)';
                e.currentTarget.style.background = `rgba(${parseInt(tarmoq.rang.slice(1,3), 16)}, ${parseInt(tarmoq.rang.slice(3,5), 16)}, ${parseInt(tarmoq.rang.slice(5,7), 16)}, 0.2)`;
                e.currentTarget.style.borderColor = tarmoq.rang;
                e.currentTarget.style.boxShadow = `0 12px 30px ${tarmoq.rang}40`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#CBD5E1';
                e.currentTarget.style.transform = 'translateY(0) rotate(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              aria-label={`${tarmoq.ikonka.split('-')[1]} profil`}
            >
              <i className={tarmoq.ikonka}></i>
            </a>
          ))}
        </div>
        
        {/* COPYRIGHT */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '35px',
          color: '#94A3B8',
          fontSize: '1rem',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          alignItems: 'center'
        }}>
          <p>© {joriyYil} Muhammadamin. Barcha huquqlar himoyalangan.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Muhammadamin tomonidan</span>
            <span style={{ color: '#FF6B35', animation: 'heartbeat 1.5s infinite' }}>♥</span>
            <span>yaratildi</span>
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.1); }
        }
        
        @media (max-width: 768px) {
          div[style*="font-size: 2.8rem"] {
            font-size: 2.2rem;
          }
          
          div[style*="gap: 40px"] {
            gap: 20px;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="font-size: 2.8rem"] {
            font-size: 1.8rem;
          }
          
          div[style*="gap: 25px"] {
            gap: 15px;
          }
          
          a[style*="width: 55px"] {
            width: 45px;
            height: 45px;
            font-size: 1.2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;