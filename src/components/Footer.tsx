import React, { useState } from 'react';
// TypeScript uchun fayl nomini .tsx ga o‘tkazing
import { useLanguage } from '../LanguageContext';
import { useNavigate } from 'react-router-dom';
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaTelegram, FaInstagram, FaTwitter, FaFacebook, FaArrowUp, FaSun, FaMoon } from 'react-icons/fa';

const Footer: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage or default to dark
    return localStorage.getItem('theme') || 'dark';
  });

  const { lang, setLang, t } = useLanguage();
  const joriyYil = new Date().getFullYear();
  const navigate = useNavigate();

  const socialLinks = [
    { icon: <FaGithub />, label: "GitHub", url: "https://github.com/NorimboyevAzizjon", color: "#F0F6FC" },
    { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/azizjon-norimboyev-dev", color: "#0077B5" },
    { icon: <FaTelegram />, label: "Telegram", url: "https://t.me/AzizjonNorimboyev", color: "#26A5E4" },
    { icon: <FaInstagram />, label: "Instagram", url: "https://instagram.com/azizjondev_", color: "#E4405F" },
    { icon: <FaTwitter />, label: "Twitter", url: "https://twitter.com/azizjondev", color: "#1DA1F2" },
    { icon: <FaFacebook />, label: "Facebook", url: "https://facebook.com/azizjondev_", color: "#1877F3" }
  ];

  const footerLinks = [
    { label: t('home'), action: () => navigate('/') },
    { label: t('about'), action: () => navigate('/haqimda') },
    { label: t('portfolio'), action: () => navigate('/portfolio') },
    { label: t('contact'), action: () => navigate('/aloqa') },
    { label: t('downloadCV'), action: () => window.open('/CV_Azizjon.pdf', '_blank') }
  ];

  React.useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  React.useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <footer className={styles.footer}>
      {/* Gradient chiziq */}
      <div className={styles.gradientLine}></div>
      <div className={styles.container}>
        {/* Linklar va ijtimoiy tarmoqlar */}
        <div className={styles.contentSection}>
          <div className={styles.linksSection}>
            <h3 className={styles.sectionTitle}>{t('quickLinks')}</h3>
            <div className={styles.linksGrid}>
              {footerLinks.map((link, index) => (
                <button
                  key={index}
                  className={styles.footerLink}
                  onClick={link.action}
                  aria-label={link.label}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.sectionTitle}>{t('social')}</h3>
            <div className={styles.socialIcons}>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  style={{ '--social-color': social.color }}
                  aria-label={social.label}
                >
                  {social.icon}
                  <div className={styles.tooltip}>{social.label}</div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyrightSection}>
          <div className={styles.copyrightText}>
            <p>
              © {joriyYil} Azizjon Norimboyev. {t('copyright')}
            </p>
            <p className={styles.heartText}>
              {t('madeIn')} <span className={styles.heart}>❤️</span> {t('madeWith')}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <FaArrowUp />
              {t('toTop')}
            </div>
            <button
              className={styles.themeToggleBtn}
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Oq rejim' : 'Qora rejim'}
            >
              {theme === 'dark' ? <FaSun style={{ color: '#FFA500' }} /> : <FaMoon style={{ color: '#222' }} />}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;