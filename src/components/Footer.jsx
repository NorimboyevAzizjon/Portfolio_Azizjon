import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const joriyYil = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const socialLinks = [
    { icon: "fab fa-github", label: "GitHub", url: "https://github.com/NorimboyevAzizjon", color: "#F0F6FC" },
    { icon: "fab fa-linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/azizjon-norimboyev-dev", color: "#0077B5" },
    { icon: "fab fa-telegram", label: "Telegram", url: "https://t.me/AzizjonNorimboyev", color: "#26A5E4" },
    { icon: "fab fa-instagram", label: "Instagram", url: "https://instagram.com/azizjondev_", color: "#E4405F" },
    { icon: "fab fa-twitter", label: "Twitter", url: "https://twitter.com/azizjondev", color: "#1DA1F2" }
  ];

  const footerLinks = [
    { label: "Bosh Sahifa", action: () => scrollToSection('bosh-sahifa') },
    { label: "Haqimda", action: () => scrollToSection('haqimda') },
    { label: "Portfolio", action: () => scrollToSection('portfolio') },
    { label: "Aloqa", action: () => scrollToSection('aloqa') },
    { label: "CV Yuklab Olish", action: () => window.open('/CV_Azizjon.pdf', '_blank') }
  ];

  return (
    <footer className={styles.footer}>
      {/* Gradient chiziq */}
      <div className={styles.gradientLine}></div>
      
      <div className={styles.container}>
        {/* Logo va tagline */}


        {/* Linklar va ijtimoiy tarmoqlar */}
        <div className={styles.contentSection}>
          <div className={styles.linksSection}>
            <h3 className={styles.sectionTitle}>Tezkor o'tish</h3>
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
            <h3 className={styles.sectionTitle}>Ijtimoiy tarmoqlar</h3>
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
                  <i className={social.icon}></i>
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
              © {joriyYil} Azizjon Norimboyev. Barcha huquqlar himoyalangan.
            </p>
            <p className={styles.heartText}>
              O'zbekiston <span className={styles.heart}>❤️</span> da yaratildi
            </p>
          </div>
          
          <div className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <i className="fas fa-arrow-up"></i>
            Yuqoriga
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;