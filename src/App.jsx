import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

function App() {
  const [faolBolim, setFaolBolim] = useState('bosh-sahifa');
  const [yuklanmoqda, setYuklanmoqda] = useState(true);

  // Yuklanish animatsiyasi
  useEffect(() => {
    const timer = setTimeout(() => {
      setYuklanmoqda(false);
    }, 1200);

    // Scroll orqali faol bo'limni aniqlash
    const bolimlarniKuzatish = () => {
      const bolimlar = ['bosh-sahifa', 'haqimda', 'portfolio', 'aloqa'];
      
      for (const bolim of bolimlar) {
        const element = document.getElementById(bolim);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Element ekranda ko'rinayotgan bo'lsa
          if (rect.top <= windowHeight * 0.3 && rect.bottom >= windowHeight * 0.3) {
            setFaolBolim(bolim);
            
            // URL hash o'zgartirish
            if (window.location.hash !== `#${bolim}`) {
              window.history.replaceState(null, null, `#${bolim}`);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', bolimlarniKuzatish);
    
    // Dastlabki hash ni tekshirish
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      if (['bosh-sahifa', 'haqimda', 'portfolio', 'aloqa'].includes(hash)) {
        setFaolBolim(hash);
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', bolimlarniKuzatish);
    };
  }, []);

  // Yuklanish ekrani
  if (yuklanmoqda) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="loading-spinner"></div>
          <div className="loading-text">
            <span>Azizjon</span>
            <span className="loading-dot">.</span>
          </div>
          <p className="loading-subtext">Portfolio yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <Navbar faolBolim={faolBolim} />
      
      <main>
        <section id="bosh-sahifa" className="section">
          <Home />
        </section>
        
        <section id="haqimda" className="section">
          <About />
        </section>
        
        <section id="portfolio" className="section">
          <Portfolio />
        </section>
        
        <section id="aloqa" className="section">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;