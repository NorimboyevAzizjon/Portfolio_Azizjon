import React from 'react';
import imgAzizjon from '../assets/images/photo_2025-12-02_17-16-43.jpg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={`${styles.container} fade-in`} id="bosh-sahifa">
      <div className={styles.content}>
        <div className={styles.textSection}>
          <div className={styles.greeting}>
                Salom, Azizjonman
          </div>
          <div className={styles.description}>
                <div>Innovatsion texnologiyalar orqali</div>
                <div>har bir loyihaga ajoyib yechimlar yarataman</div>
          </div>
          <button 
            className={styles.cvButton}
            aria-label="Azizjonning CV faylini yangi oynada yuklab olish"
            onClick={() => window.open('/CV_Azizjon.pdf', '_blank')}
          >
            CV Yuklab Olish
          </button>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.avatarContainer}>
            <img 
              src={imgAzizjon}
              alt="Azizjon Norimboyev portret rasmi" 
              className={styles.avatar}
              loading="lazy"
              aria-label="Azizjon Norimboyev portret rasmi"
            />
          </div>
        </div>
      </div>
      <div className={styles.statistikalar}>
          <div className={styles.statItem}>
            <div className={styles.statRaqam}>1+</div>
            <div className={styles.statMatn}>Yillik Tajriba</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statRaqam}>10+</div>
            <div className={styles.statMatn}>Tugatilgan<br />Loyihalar</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statRaqam}>100%</div>
            <div className={styles.statMatn}>Mijoz<br />Mamnuniyati</div>
          </div>
      </div>
    </div>
  );
};

export default Home;