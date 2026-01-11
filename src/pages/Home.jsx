import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import { useLanguage } from '../useLanguage';
import imgAzizjon from '../assets/images/photo_2025-12-02_17-16-43.jpg';
import styles from './Home.module.css';


const Home = () => {
  const { t } = useLanguage();
  return (
    <>
      <SeoHelmet
        title={t('homeGreeting') + ' | Portfolio'}
        description={t('homeDesc1') + ' ' + t('homeDesc2')}
        keywords="Azizjon Norimboyev, Frontend, Portfolio, React, Web Developer, Uzbekistan"
        ogImage={imgAzizjon}
        ogUrl={typeof window !== 'undefined' ? window.location.href : ''}
      />
      <div className={`${styles.container} fade-in`} id="bosh-sahifa">

        <div className={styles.content}>
        <div className={styles.textSection}>
          <div className={styles.greeting}>
            {t('homeGreeting')}
          </div>
          <div className={styles.description}>
            <div>{t('homeDesc1')}</div>
            <div>{t('homeDesc2')}</div>
          </div>
          <button 
            className={styles.cvButton}
            aria-label={t('cvAria')}
            onClick={() => window.open('/CV_Azizjon.pdf', '_blank')}
          >
            {t('downloadCV')}
          </button>
        </div>
        <div className={styles.imageSection}>
          <div className={styles.avatarContainer}>
            <img 
              src={imgAzizjon}
              alt={t('avatarAlt')}
              className={styles.avatar}
              loading="lazy"
              aria-label={t('avatarAlt')}
            />
          </div>
        </div>
      </div>
      <div className={styles.statistikalar}>
        <div className={styles.statItem}>
          <div className={styles.statRaqam}>1+</div>
          <div className={styles.statMatn}>{t('expYears')}</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statRaqam}>10+</div>
          <div className={styles.statMatn}>{t('projectsDone')}</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statRaqam}>100%</div>
          <div className={styles.statMatn}>{t('clientSatisfaction')}</div>
        </div>
      </div>
    </div>
  </>
  );
};

export default Home;