// Navbar.jsx - Prop nomini tuzatish
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ faolBolim }) => {  // faolBolim deb o'zgartirildi
  const [menyuOchiq, setMenyuOchiq] = useState(false);

  const navItems = [
    { id: 'bosh-sahifa', label: 'Bosh Sahifa', ikonka: 'fas fa-home' },
    { id: 'haqimda', label: 'Haqimda', ikonka: 'fas fa-user' },
    { id: 'portfolio', label: 'Portfolio', ikonka: 'fas fa-briefcase' },
    { id: 'aloqa', label: 'Aloqa', ikonka: 'fas fa-envelope' }
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
      setMenyuOchiq(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">Muhammadamin</span>
            <span className="logo-dot">.</span>
          </div>
          
          <div className="nav-menu">
            {navItems.map(item => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${faolBolim === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  bolimgaSkrol(item.id);
                }}
                aria-label={item.label}
              >
                <i className={item.ikonka}></i>
                <span>{item.label}</span>
                <div className="nav-indicator"></div>
              </a>
            ))}
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setMenyuOchiq(!menyuOchiq)}
            aria-label="Menyuni ochish"
          >
            <i className={`fas ${menyuOchiq ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobil Menyu */}
      <div className={`mobile-menu ${menyuOchiq ? 'open' : ''}`}>
        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`mobile-nav-link ${faolBolim === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              bolimgaSkrol(item.id);
            }}
          >
            <i className={item.ikonka}></i>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;