import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

function Header() {
  const [faolBolim, setFaolBolim] = useState('bosh-sahifa');
  
  const navItems = [
    { id: 'bosh-sahifa', label: 'Bosh Sahifa', icon: 'fas fa-home' },
    { id: 'haqimda', label: 'Haqimda', icon: 'fas fa-user' },
    { id: 'portfolio', label: 'Portfolio', icon: 'fas fa-briefcase' },
    { id: 'aloqa', label: 'Aloqa', icon: 'fas fa-envelope' }
  ];

  // Scroll qilganda faol bo'limni aniqlash
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element && scrollPosition >= element.offsetTop) {
          setFaolBolim(navItems[i].id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Sayt yuklanganda URL hash bo'yicha scroll qilish
    const hash = window.location.hash.substring(1);
    if (hash && navItems.some(item => item.id === hash)) {
      setTimeout(() => {
        scrollToSection(hash);
        setFaolBolim(hash);
      }, 500);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // URL hash o'zgartirish
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setFaolBolim(sectionId);
  };

  return (
    <header className={`${styles.header} fade-in`}>
      {navItems.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`${styles.navLink} ${faolBolim === item.id ? styles.active : ''}`}
          onClick={(e) => handleNavClick(e, item.id)}
          aria-label={item.label}
        >
          <i className={item.icon}></i>
          <span>{item.label}</span>
        </a>
      ))}
    </header>
  );
}

export default Header;