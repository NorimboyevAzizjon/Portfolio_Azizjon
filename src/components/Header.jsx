import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

function Header() {
  const [activeSection, setActiveSection] = useState('bosh-sahifa');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { id: 'bosh-sahifa', label: 'Bosh Sahifa', icon: 'fas fa-home' },
    { id: 'haqimda', label: 'Haqimda', icon: 'fas fa-user' },
    { id: 'portfolio', label: 'Portfolio', icon: 'fas fa-briefcase' },
    { id: 'aloqa', label: 'Aloqa', icon: 'fas fa-envelope' }
  ];

  // Scroll kuzatish
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Header'ni yashirish/ko'rsatish
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Faol bo'limni aniqlash
      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    // Hash bo'yicha scroll
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && navItems.some(item => item.id === hash)) {
        scrollToSection(hash);
        setActiveSection(hash);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', handleHashChange);
    
    // Dastlabki hash
    const initialHash = window.location.hash.substring(1);
    if (initialHash && navItems.some(item => item.id === initialHash)) {
      setActiveSection(initialHash);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [lastScrollY]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });

      // URL hash
      if (window.location.hash !== `#${sectionId}`) {
        window.history.replaceState(null, null, `#${sectionId}`);
      }
    }
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setActiveSection(sectionId);
  };

  return (
    <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden} fade-in`}>
      <div className={styles.navContainer}>
        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`${styles.navLink} ${activeSection === item.id ? styles.active : ''}`}
            onClick={(e) => handleNavClick(e, item.id)}
            aria-label={item.label}
            data-tooltip={item.label}
          >
            <i className={item.icon}></i>
            <span className={styles.navText}>{item.label}</span>
            <div className={styles.activeIndicator}></div>
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;