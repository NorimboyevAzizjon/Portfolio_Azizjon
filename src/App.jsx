import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import styles from './App.module.css';
import './index.css'; // index.css asosiy global stillar uchun

function App() {
  const [faolBolim, setFaolBolim] = useState('bosh-sahifa');
  const [yuklanmoqda, setYuklanmoqda] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setYuklanmoqda(false);
    }, 1200);

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
      <div className={styles.loading}>
        <div className={styles.loadingContent}>
          <div className={styles.loadingSpinner}></div>
          <div className={styles.loadingText}>
            <span>Azizjon</span>
            <span className={styles.loadingDot}>.</span>
          </div>
          <p className={styles.loadingSubtext}>
            Portfolio yuklanmoqda...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <Header />
      <Navbar faolBolim={faolBolim} />
      
      <main>
        <section id="bosh-sahifa" className={styles.section}>
          <Home />
        </section>
        
        <section id="haqimda" className={styles.section}>
          <About />
        </section>
        
        <section id="portfolio" className={styles.section}>
          <Portfolio />
        </section>
        
        <section id="aloqa" className={styles.section}>
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;