// src/components/Header.tsx - ZAMONAVIY VERSIYA
import React, { useState, useEffect, useRef } from 'react';

import { useLanguage } from '../LanguageContext';
import { AnimatePresence, motion } from 'framer-motion'; // 'motion' is used, so keep both
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  // const [activeSection, setActiveSection] = useState('bosh-sahifa');
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const headerRef = useRef(null);

  // Language dropdown state and effect
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!headerRef.current?.contains(e.target)) setShowLangDropdown(false);
    };
    if (showLangDropdown) document.addEventListener('mousedown', closeDropdown);
    return () => document.removeEventListener('mousedown', closeDropdown);
  }, [showLangDropdown]);

  const { lang, setLang, t } = useLanguage();

  const navItems = React.useMemo(() => [
    { 
      id: 'bosh-sahifa', 
      label: t('home'), 
      icon: <FaHome className={styles.statIcon} />, 
      color: '#FF6B35',
      path: '/'
    },
    { 
      id: 'haqimda', 
      label: t('about'), 
      icon: <FaUser className={styles.statIcon} />, 
      color: '#00CED1',
      path: '/haqimda'
    },
    { 
      id: 'portfolio', 
      label: t('portfolio'), 
      icon: <FaBriefcase className={styles.statIcon} />, 
      color: '#8A2BE2',
      path: '/portfolio'
    },
    { 
      id: 'aloqa', 
      label: t('contact'), 
      icon: <FaEnvelope className={styles.statIcon} />, 
      color: '#4ADE80',
      path: '/aloqa'
    }
  ], [t]);

  // Mouse harakatini kuzatish
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    const node = headerRef.current;
    node?.addEventListener('mousemove', handleMouseMove);
    return () => {
      node?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Scroll kuzatish
  // const [activeSection, setActiveSection] = useState('bosh-sahifa');
  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsScrolling(false), 150);

      // Header'ni yashirish/ko'rsatish
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 300) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Faol bo'limni aniqlash
      for (let i = navItems.length - 1; i >= 0; i--) {
        const element = document.getElementById(navItems[i].id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const triggerPoint = windowHeight * 0.3;

          if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            // setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Hash change
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash && navItems.some(item => item.id === hash)) {
        scrollToSection(hash, true);
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    // Initial setup
    const initialHash = window.location.hash.substring(1);
    if (initialHash && navItems.some(item => item.id === initialHash)) {
      setTimeout(() => scrollToSection(initialHash, true), 100);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
      clearTimeout(scrollTimeout);
    };
  }, [lastScrollY, navItems]);

  const scrollToSection = (sectionId, smooth = true) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: smooth ? 'smooth' : 'auto'
      });

      if (window.location.hash !== `#${sectionId}`) {
        window.history.replaceState(null, null, `#${sectionId}`);
      }
      
      // setActiveSection(sectionId);
    }
  };

  // const handleNavClick = (e, sectionId) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   scrollToSection(sectionId);
  // };

  // Hover animatsiya variantlari
  const navItemVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 17 } },
    tap: { scale: 0.95 }
  };

  const iconVariants = {
    initial: { rotate: 0, y: 0 },
    hover: { rotate: 10, y: -3, transition: { type: "spring", stiffness: 300 } }
  };

  const textVariants = {
    initial: { y: 0, opacity: 0.9 },
    hover: { y: -2, opacity: 1, transition: { duration: 0.2 } }
  };

  return (
    <AnimatePresence>
      <motion.header
        ref={headerRef}
        className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0,
          backdropFilter: isScrolling ? 'blur(20px)' : 'blur(15px)'
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          opacity: { duration: 0.3 }
        }}
        style={{
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`
        }}
      >
        {/* Cursor glow effect */}
        <div className={styles.cursorGlow} />
        
        {/* Ambient light effect */}
        <div className={styles.ambientLight} />
        
        <div className={styles.navContainer}>
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              aria-label={item.label}
              data-tooltip={item.label}
              data-color={item.color}
              end={item.path === '/'}
              style={{
                '--item-color': item.color,
                '--item-color-light': `${item.color}20`
              }}
            >
              <motion.div
                variants={navItemVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                {/* Background glow effect */}
                <div className={styles.linkGlow} />
                {/* Icon container */}
                <motion.div 
                  className={styles.iconWrapper}
                  variants={iconVariants}
                >
                  <div className={styles.iconCircle}>
                    {item.icon}
                  </div>
                </motion.div>
                {/* Label */}
                <motion.span 
                  className={styles.navText}
                  variants={textVariants}
                >
                  {item.label}
                </motion.span>
                {/* Hover effect */}
                <div className={styles.hoverEffect} />
              </motion.div>
            </NavLink>
          ))}
        {/* Language switcher */}
          <div className={styles.langSwitcher} style={{marginLeft: 24, position: 'relative'}}>
            <button
              className={styles.langDropdownBtn}
              aria-label="Til tanlash"
              onClick={() => setShowLangDropdown(v => !v)}
              style={{minWidth: 44, minHeight: 36}}
            >
              {lang.toUpperCase()} <span style={{fontSize: 12, marginLeft: 4}}>▼</span>
            </button>
            {showLangDropdown && (
              <div className={styles.langDropdownMenu}>
                <button
                  className={styles.langDropdownItem}
                  onClick={() => { setLang('uz'); setShowLangDropdown(false); }}
                  aria-label="O'zbekcha"
                >uz</button>
                <button
                  className={styles.langDropdownItem}
                  onClick={() => { setLang('en'); setShowLangDropdown(false); }}
                  aria-label="English"
                >en</button>
                <button
                  className={styles.langDropdownItem}
                  onClick={() => { setLang('ru'); setShowLangDropdown(false); }}
                  aria-label="Русский"
                >ru</button>
              </div>
            )}
          </div>
        </div>
        
        {/* Theme toggle button removed from Header */}
        {/* Scroll progress indicator */}
        <motion.div 
          className={styles.scrollProgress}
          animate={{ scaleX: lastScrollY / (document.body.scrollHeight - window.innerHeight) }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </motion.header>
    </AnimatePresence>
  );
};

export default Header;