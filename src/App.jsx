// App.jsx - Tuzatilgan versiya
import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const [faolBolim, setFaolBolim] = useState('bosh-sahifa');
  const [yuklanmoqda, setYuklanmoqda] = useState(true);

  useEffect(() => {
    // Yuklash animatsiyasi
    const timer = setTimeout(() => {
      setYuklanmoqda(false);
    }, 1200);

    // Faol bo'limni kuzatish
    const bolimlarniKuzatish = () => {
      const bolimlar = ['bosh-sahifa', 'haqimda', 'portfolio', 'aloqa'];
      const joriy = bolimlar.find(bolim => {
        const element = document.getElementById(bolim);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (joriy) {
        setFaolBolim(joriy);
      }
    };

    window.addEventListener('scroll', bolimlarniKuzatish);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', bolimlarniKuzatish);
    };
  }, []);

  if (yuklanmoqda) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #0A1929 0%, #1A2C42 50%, #2A1E5C 100%)',
        fontFamily: "'Poppins', sans-serif"
      }}>
        <div style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '25px'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            border: '4px solid rgba(255, 255, 255, 0.1)',
            borderTop: '4px solid #FF6B35',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#F8FAFC',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span>Muhammadamin</span>
            <span style={{ 
              color: '#FF6B35',
              animation: 'pulse 1.5s infinite'
            }}>.</span>
          </div>
          <p style={{
            color: '#CBD5E1',
            fontSize: '1.1rem'
          }}>
            Portfolio yuklanmoqda...
          </p>
        </div>
        
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="App">
      <Header />
      <Navbar faolBolim={faolBolim} />
      
      <main>
        <section id="bosh-sahifa">
          <Home />
        </section>
        
        <section id="haqimda">
          <About />
        </section>
        
        <section id="portfolio">
          <Portfolio />
        </section>
        
        <section id="aloqa">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;