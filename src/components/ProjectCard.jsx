import React from 'react';

const ProjectCard = ({ sarlavha, tavsif, rasm, texnologiyalar, githubHavolasi, jonliDemo }) => {
  const uslublar = {
    karta: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.08))',
      backdropFilter: 'blur(20px)',
      borderRadius: '25px',
      overflow: 'hidden',
      transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      position: 'relative',
      cursor: 'pointer'
    },
    rasmKonteyner: {
      position: 'relative',
      overflow: 'hidden',
      height: '250px',
      background: 'linear-gradient(135deg, #8A2BE2, #00CED1)'
    },
    rasm: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.6s cubic-bezier(0.215, 0.610, 0.355, 1)'
    },
    qoplama: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(rgba(10, 25, 41, 0.9), rgba(138, 43, 226, 0.9))',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0,
      transition: 'opacity 0.4s ease',
      gap: '25px',
      padding: '20px'
    },
    qoplamaTugmasi: {
      width: '55px',
      height: '55px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#F8FAFC',
      fontSize: '22px',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      textDecoration: 'none'
    },
    mazmun: {
      padding: '30px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    },
    sarlavha: {
      fontSize: '1.8rem',
      fontWeight: '800',
      color: '#F8FAFC',
      marginBottom: '15px',
      lineHeight: '1.3'
    },
    tavsif: {
      fontSize: '1rem',
      color: '#CBD5E1',
      marginBottom: '20px',
      lineHeight: '1.6',
      flex: 1
    },
    texKonteyner: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '25px'
    },
    texYorligi: {  // texYorlig'i o'rniga texYorligi
      padding: '8px 16px',
      background: 'rgba(138, 43, 226, 0.15)',
      color: '#8A2BE2',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '600',
      border: '1px solid rgba(138, 43, 226, 0.3)',
      transition: 'all 0.3s ease'
    },
    tugmalar: {
      display: 'flex',
      gap: '15px',
      marginTop: 'auto'
    },
    demoTugmasi: {
      padding: '14px 25px',
      background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      textDecoration: 'none',
      textAlign: 'center'
    },
    kodTugmasi: {
      padding: '14px 25px',
      background: 'rgba(255, 255, 255, 0.1)',
      color: '#CBD5E1',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '12px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      textDecoration: 'none',
      textAlign: 'center'
    }
  };

  return (
    <div 
      style={uslublar.karta}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(138, 43, 226, 0.4)';
        e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.4)';
        const qoplama = e.currentTarget.querySelector('.loyiha-qoplama');
        if (qoplama) qoplama.style.opacity = '1';
        const rasm = e.currentTarget.querySelector('.loyiha-rasm');
        if (rasm) rasm.style.transform = 'scale(1.15)';
        const texYorligi = e.currentTarget.querySelectorAll('.tex-yorligi');
        texYorligi.forEach(tag => {
          tag.style.transform = 'translateY(-2px)';
          tag.style.boxShadow = '0 5px 15px rgba(138, 43, 226, 0.3)';
        });
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        const qoplama = e.currentTarget.querySelector('.loyiha-qoplama');
        if (qoplama) qoplama.style.opacity = '0';
        const rasm = e.currentTarget.querySelector('.loyiha-rasm');
        if (rasm) rasm.style.transform = 'scale(1)';
        const texYorligi = e.currentTarget.querySelectorAll('.tex-yorligi');
        texYorligi.forEach(tag => {
          tag.style.transform = 'translateY(0)';
          tag.style.boxShadow = 'none';
        });
      }}
      aria-label={`${sarlavha} loyihasi`}
    >
      <div style={uslublar.rasmKonteyner}>
        <img 
          src={rasm} 
          alt={sarlavha} 
          className="loyiha-rasm"
          style={uslublar.rasm}
          loading="lazy"
        />
        <div className="loyiha-qoplama" style={uslublar.qoplama}>
          {jonliDemo && (
            <a 
              href={jonliDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              style={uslublar.qoplamaTugmasi}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.15) rotate(10deg)';
                e.currentTarget.style.background = 'rgba(255, 107, 53, 0.3)';
                e.currentTarget.style.borderColor = '#FF6B35';
                e.currentTarget.style.boxShadow = '0 0 25px #FF6B35';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              aria-label={`${sarlavha} loyihasining jonli demo sahifasi`}
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          )}
          {githubHavolasi && (
            <a 
              href={githubHavolasi} 
              target="_blank" 
              rel="noopener noreferrer"
              style={uslublar.qoplamaTugmasi}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.15) rotate(-10deg)';
                e.currentTarget.style.background = 'rgba(138, 43, 226, 0.3)';
                e.currentTarget.style.borderColor = '#8A2BE2';
                e.currentTarget.style.boxShadow = '0 0 25px #8A2BE2';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) rotate(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              aria-label={`${sarlavha} loyihasining GitHub repositoriyasi`}
            >
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>
      
      <div style={uslublar.mazmun}>
        <h3 style={uslublar.sarlavha}>{sarlavha}</h3>
        <p style={uslublar.tavsif}>{tavsif}</p>
        
        <div style={uslublar.texKonteyner}>
          {texnologiyalar.map((tex, index) => (
            <span key={index} className="tex-yorligi" style={uslublar.texYorligi}>
              {tex}
            </span>
          ))}
        </div>
        
        <div style={uslublar.tugmalar}>
          {jonliDemo && (
            <a 
              href={jonliDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              style={uslublar.demoTugmasi}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(255, 107, 53, 0.5)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #8A2BE2 0%, #6A0DAD 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.background = 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)';
              }}
              aria-label={`${sarlavha} loyihasini jonli ko'rish`}
            >
              <i className="fas fa-external-link-alt"></i>
              Jonli Demo
            </a>
          )}
          
          {githubHavolasi && (
            <a 
              href={githubHavolasi} 
              target="_blank" 
              rel="noopener noreferrer"
              style={uslublar.kodTugmasi}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.4)';
                e.currentTarget.style.color = '#8A2BE2';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(138, 43, 226, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.color = '#CBD5E1';
                e.currentTarget.style.boxShadow = 'none';
              }}
              aria-label={`${sarlavha} loyihasining kodini ko'rish`}
            >
              <i className="fab fa-github"></i>
              Kodni Ko'rish
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;