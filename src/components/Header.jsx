import React from 'react';
import styles from './Header.module.css';

function Header() {
  const navItems = [
    { id: 'home', label: 'Bosh Sahifa', ikonka: 'fas fa-home' },
    { id: 'about', label: 'Haqimda', ikonka: 'fas fa-user' },
    { id: 'portfolio', label: 'Portfolio', ikonka: 'fas fa-briefcase' },
    { id: 'contact', label: 'Aloqa', ikonka: 'fas fa-envelope' }
  ];

  const bolimgaSkrol = (bolimId) => {
    const element = document.getElementById(bolimId);
    if (element) {
      const offset = 90;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={styles.header}>
      {navItems.map(item => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={styles.navLink}
          onClick={(e) => {
            e.preventDefault();
            bolimgaSkrol(item.id);
          }}
          aria-label={item.label}
        >
          <i className={item.ikonka}></i>
          <span>{item.label}</span>
        </a>
      ))}
    </header>
  );
}

export default Header;