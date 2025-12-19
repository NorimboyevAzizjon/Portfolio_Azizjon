import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

function App() {
  // Scroll orqali faol bo'limni aniqlash uchun (ixtiyoriy, agar Header uchun kerak bo'lsa)
  const [activeSection, setActiveSection] = useState('bosh-sahifa');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['bosh-sahifa', 'haqimda', 'portfolio', 'aloqa'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header activeSection={activeSection} />
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