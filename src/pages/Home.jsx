// Home.jsx - O'ZBEKCHA VA ZAMONAVIY
import React from 'react';
import './Home.module.css'
import imgAzizjon from '../assets/images/photo_2025-12-02_17-16-43.jpg';

const Home = () => {
  const styles = {
    container: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0A1929 0%, #1A2C42 50%, #2A1E5C 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '0 20px'
    },
    content: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '60px',
      width: '100%'
    },
    textSection: {
      flex: 1,
      maxWidth: '650px',
      position: 'relative',
      zIndex: 2
    },
    salom: {
      fontSize: '28px',
      color: '#00CED1',
      fontWeight: '600',
      marginBottom: '15px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    ism: {
      fontSize: '72px',
      fontWeight: '900',
      color: '#F8FAFC',
      marginBottom: '15px',
      lineHeight: '1.1',
      background: 'linear-gradient(135deg, #F8FAFC 0%, #8A2BE2 50%, #00CED1 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    kasb: {
      fontSize: '56px',
      fontWeight: '700',
      color: '#CBD5E1',
      marginBottom: '35px'
    },
    ajralibTuruvchi: {
      color: '#FF6B35',
      position: 'relative',
      paddingRight: '10px'
    },
    tavsif: {
      fontSize: '20px',
      color: '#94A3B8',
      lineHeight: '1.8',
      marginBottom: '45px',
      maxWidth: '550px'
    },
    cvTugmasi: {
      padding: '18px 45px',
      background: 'linear-gradient(135deg, #8A2BE2 0%, #6A0DAD 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      boxShadow: '0 8px 30px rgba(138, 43, 226, 0.4)'
    },
    imageSection: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    avatarContainer: {
      width: '450px',
      height: '450px',
      borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
      background: 'linear-gradient(135deg, #8A2BE2, #00CED1)',
      display: 'flex',
      alignItemspan: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 30px 80px rgba(138, 43, 226, 0.4)',
      animation: 'morphing 15s infinite ease-in-out'
    },
    avatar: {
      width: '92%',
      height: '92%',
      borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
      objectFit: 'cover',
      border: '12px solid rgba(255, 255, 255, 0.1)',
      filter: 'brightness(1.05) contrast(1.1)'
    },
    statistikalar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '40px',
      marginTop: '60px',
      width: '100%'
    },
    statItem: {
      textAlign: 'center',
      flex: 1
    },
    statRaqam: {
      fontSize: '42px',
      fontWeight: '800',
      color: '#00CED1',
      marginBottom: '8px'
    },
    statMatn: {
      fontSize: '17px',
      color: '#94A3B8',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.container} id="bosh-sahifa" className="fade-in">
      <div style={styles.content}>
        <div style={styles.textSection}>
          <div style={styles.salom}>
            <i className="fas fa-hand-wave" style={{ animation: 'wave 2s infinite' }}></i>
            Salom, mening ismim
          </div>
          
          <h1 style={styles.ism}>Azizjon</h1>
          
          <h2 style={styles.kasb}>
            <span style={styles.ajralibTuruvchi}>Frontend</span>
            <br />
            Dasturchiman.
          </h2>
          
          <p style={styles.tavsif}>
            <strong>🎯 Tajribali Frontend dasturchi</strong>, 
            <span style={{color: '#FF6B35', fontWeight: '600'}}> 1+ yillik professional tajriba</span>.
            <br /><br />
            
            <span style={{color: '#00CED1'}}>⚛️ React texnologiyalarida</span> ishlash bo'yicha 
            <em> chuqur bilimga ega</em>.
            <br /><br />
            
            <span style={{color: '#F8FAFC', fontWeight: '600'}}>🔧 Muammolarni hal qilish qobiliyatim</span> bilan 
            ilovalar samaradorligini 
            <span style={{color: '#FF6B35', fontWeight: '700'}}> 14% oshirdim</span>.
            <br /><br />
            
            <span style={{color: '#00CED1'}}>🎨 Ma'lumotlarni vizuallashtirish vositalarini</span> 
            <strong> yaratdim</strong> va dizaynlar 
            <strong> integratsiya qildim</strong>.
            <br /><br />
            
            <span style={{color: '#F8FAFC'}}>🚀 Mahsulot hayot tsikli tezligini oshirib</span>, 
            loyihalarni 
            <span style={{color: '#FF6B35', fontWeight: '700'}}> 100% vaqtida topshirdim</span>.
          </p>
          
          <button 
            style={styles.cvTugmasi}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 15px 40px rgba(138, 43, 226, 0.6)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(138, 43, 226, 0.4)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #8A2BE2 0%, #6A0DAD 100%)';
            }}
            aria-label="CV yuklab olish"
          >
            <i className="fas fa-download"></i>
            CV Yuklab Olish
          </button>
          
          <div style={styles.statistikalar}>
            <div style={styles.statItem}>
              <div style={styles.statRaqam}>1+</div>
              <div style={styles.statMatn}>Yillik Tajriba</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statRaqam}>10+</div>
              <div style={styles.statMatn}>Tugatilgan Loyihalar</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statRaqam}>100%</div>
              <div style={styles.statMatn}>Mijoz Mamnuniyati</div>
            </div>
          </div>
        </div>
        
        <div style={styles.imageSection}>
          <div style={styles.avatarContainer}>
            {<img  className='avatar-image'
              src= {imgAzizjon}
              alt="Azizjon" 
              style={styles.avatar}
              loading="lazy"
            /> }
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-15deg); }
        }
        
        @keyframes morphing {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
        
        /* Responsive media queries */
        @media (max-width: 1024px) {
          div[style*="content"] {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }
          
          div[style*="ism"] {
            font-size: 56px;
          }
          
          div[style*="kasb"] {
            font-size: 42px;
          }
          
          div[style*="avatarContainer"] {
            width: 350px;
            height: 350px;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="ism"] {
            font-size: 42px;
          }
          
          div[style*="kasb"] {
            font-size: 32px;
          }
          
          div[style*="avatarContainer"] {
            width: 300px;
            height: 300px;
          }
          
          div[style*="statRaqam"] {
            font-size: 36px;
          }
        }
        
        @media (max-width: 480px) {
          div[style*="ism"] {
            font-size: 32px;
          }
          
          div[style*="kasb"] {
            font-size: 28px;
          }
          
          div[style*="avatarContainer"] {
            width: 250px;
            height: 250px;
          }
          
          div[style*="statRaqam"] {
            font-size: 28px;
          }
          
          div[style*="statistikalar"] {
            flex-direction: column;
            gap: 25px;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;