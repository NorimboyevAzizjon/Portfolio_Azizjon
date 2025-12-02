import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const joriyYil = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        

        
        <div className={styles.navigation}>
          {['Bosh Sahifa', 'Haqimda', 'Portfolio', 'Aloqa'].map((item, index) => (
            <a 
              key={index}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className={styles.navLink}
              aria-label={item}
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className={styles.socialLinks}>
          {[
            { ikonka: 'fab fa-github', havola: 'https://github.com', rang: '#F8FAFC' },
            { ikonka: 'fab fa-linkedin-in', havola: 'https://linkedin.com', rang: '#0077b5' },
            { ikonka: 'fab fa-telegram', havola: 'https://telegram.org', rang: '#0088cc' },
            { ikonka: 'fab fa-instagram', havola: 'https://instagram.com', rang: '#E1306C' }
          ].map((tarmoq, index) => (
            <a 
              key={index}
              href={tarmoq.havola}
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
              style={{ borderColor: tarmoq.rang }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = tarmoq.rang;
                e.currentTarget.style.backgroundColor = `${tarmoq.rang}20`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#CBD5E1';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
              }}
              aria-label={`${tarmoq.ikonka.split('-')[1]} profil`}
            >
              <i className={tarmoq.ikonka}></i>
            </a>
          ))}
        </div>
       <div className={styles.copyright}>
  <div>
    <p>© {joriyYil}  Barcha huquqlar himoyalangan.</p>
  </div>
  <div>
    <p>
      <span>Azizjon tomonidan</span>
      <span className={styles.heart}> ♥ </span>
      <span>yaratildi</span>
    </p>
  </div>
</div>
      </div>
    </footer>
  );
};

export default Footer;