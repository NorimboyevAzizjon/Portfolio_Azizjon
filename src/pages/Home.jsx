// Home.jsx - TO'LIQ VERSIYA (Inline style bilan)
import React from 'react';
import imgAzizjon from '../assets/images/photo_2025-12-01_10-31-02.jpg';

const Home = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0A1929 0%, #1A2C42 50%, #2A1E5C 100%)',
      position: 'relative',
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
    greeting: {
      fontSize: '28px',
      color: '#00CED1',
      fontWeight: '600',
      marginBottom: '15px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    name: {
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
    title: {
      fontSize: '56px',
      fontWeight: '700',
      color: '#CBD5E1',
      marginBottom: '35px'
    },
    highlight: {
      color: '#FF6B35',
      position: 'relative',
      paddingRight: '10px'
    },
    description: {
      fontSize: '20px',
      color: '#94A3B8',
      lineHeight: '1.8',
      marginBottom: '45px',
      maxWidth: '550px'
    },
    cvButton: {
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
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 30px 80px rgba(138, 43, 226, 0.4)',
      animation: 'morphing 15s infinite ease-in-out'
    },
    avatarImage: {
      width: '92%',
      height: '92%',
      borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
      objectFit: 'cover',
      border: '12px solid rgba(255, 255, 255, 0.1)',
      filter: 'brightness(1.05) contrast(1.1)'
    },
    statsContainer: {
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
    statNumber: {
      fontSize: '42px',
      fontWeight: '800',
      color: '#00CED1',
      marginBottom: '8px'
    },
    statText: {
      fontSize: '17px',
      color: '#94A3B8',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.container} id="bosh-sahifa" className="fade-in">
      <div style={styles.content}>
        <div style={styles.textSection}>
          <div style={styles.greeting}>
            Salom, Azizjonman
          </div>
          <h1 style={styles.name}>Frontend Dasturchi</h1>
          <p style={styles.description}>
            <strong>1+ yil tajriba</strong> <br />
            <span style={{color: '#00CED1'}}>React</span> va zamonaviy web texnologiyalar <br />
            Yangi g‘oyalarni funksional va jozibali web ilovalarga aylantiraman
          </p>
          
          <button 
            style={styles.cvButton}
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
          
          <div style={styles.statsContainer}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>1+</div>
              <div style={styles.statText}>Yillik Tajriba</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>10+</div>
              <div style={styles.statText}>Tugatilgan Loyihalar</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>100%</div>
              <div style={styles.statText}>Mijoz Mamnuniyati</div>
            </div>
          </div>
        </div>
        
        <div style={styles.imageSection}>
          <div style={styles.avatarContainer}>
            <img 
              src={imgAzizjon}
              alt="Azizjon" 
              style={styles.avatarImage}
              loading="lazy"
            />
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
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        
        /* Responsive styles */
        @media (max-width: 1024px) {
          .content {
            flex-direction: column !important;
            text-align: center !important;
            gap: 40px !important;
          }
          
          .greeting {
            justify-content: center !important;
          }
          
          .name {
            font-size: 56px !important;
          }
          
          .title {
            font-size: 42px !important;
          }
          
          .avatarContainer {
            width: 350px !important;
            height: 350px !important;
          }
          
          .description {
            margin: 0 auto 45px !important;
          }
        }
        
        @media (max-width: 768px) {
          .name {
            fontSize: 42px !important;
          }
          
          .title {
            fontSize: 32px !important;
          }
          
          .greeting {
            fontSize: 24px !important;
          }
          
          .description {
            fontSize: 18px !important;
            lineHeight: 1.6 !important;
          }
          
          .avatarContainer {
            width: 300px !important;
            height: 300px !important;
          }
          
          .cvButton {
            padding: 16px 35px !important;
            fontSize: 16px !important;
          }
          
          .statNumber {
            fontSize: 36px !important;
          }
        }
        
        @media (max-width: 576px) {
          .container {
            padding: 0 15px !important;
          }
          
          .name {
            fontSize: 32px !important;
          }
          
          .title {
            fontSize: 28px !important;
          }
          
          .greeting {
            fontSize: 20px !important;
            gap: 8px !important;
          }
          
          .description {
            fontSize: 16px !important;
            marginBottom: 35px !important;
          }
          
          .avatarContainer {
            width: 250px !important;
            height: 250px !important;
          }
          
          .cvButton {
            padding: 14px 30px !important;
            fontSize: 15px !important;
            width: 100% !important;
            justifyContent: center !important;
          }
          
          .statsContainer {
            flexDirection: column !important;
            gap: 25px !important;
          }
          
          .statNumber {
            fontSize: 32px !important;
          }
        }
        
        @media (max-width: 425px) {
          .name {
            fontSize: 28px !important;
          }
          
          .title {
            fontSize: 24px !important;
          }
          
          .greeting {
            fontSize: 18px !important;
          }
          
          .avatarContainer {
            width: 220px !important;
            height: 220px !important;
          }
          
          .cvButton {
            padding: 12px 25px !important;
            fontSize: 14px !important;
          }
          
          .statNumber {
            fontSize: 28px !important;
          }
        }
        
        @media (min-width: 1600px) {
          .container {
            max-width: 1400px !important;
            margin: 0 auto !important;
          }
          
          .name {
            fontSize: 82px !important;
          }
          
          .title {
            fontSize: 62px !important;
          }
          
          .description {
            fontSize: 22px !important;
            max-width: 600px !important;
          }
          
          .avatarContainer {
            width: 500px !important;
            height: 500px !important;
          }
          
          .statNumber {
            fontSize: 48px !important;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
          .content {
            flexDirection: row !important;
            gap: 35px !important;
          }
          
          .avatarContainer {
            width: 350px !important;
            height: 300px !important;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .fade-in,
          .avatarContainer {
            animation: none !important;
          }
          
          .cvButton:hover {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;