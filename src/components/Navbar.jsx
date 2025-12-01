import React, { useState } from 'react';
import './Navbar.css';

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fas fa-home' },
    { id: 'about', label: 'About', icon: 'fas fa-user' },
    { id: 'portfolio', label: 'Portfolio', icon: 'fas fa-briefcase' },
    { id: 'contact', label: 'Contact', icon: 'fas fa-envelope' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
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
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                <i className={item.icon}></i>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
          >
            <i className={item.icon}></i>
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;