// Contact.jsx - TO'LIQ VERSIYA
import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import styles from './Contact.module.css';

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane, FaCommentAlt, FaUser, FaTag, FaEdit, FaSpinner, FaCheckCircle, FaAddressBook, FaExternalLinkAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    ism: '',
    email: '',
    mavzu: '',
    xabar: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { t } = useLanguage();
  // Aloqa ma'lumotlari
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />, label: t('contactAddress'), value: 'Toshkent shahri, Yunusobod tumani', color: '#FF6B35', action: 'https://goo.gl/maps/2Q2Q2Q2Q2Q2Q2Q2Q8'
    },
    {
      icon: <FaEnvelope />, label: t('contactEmail'), value: 'norimboyevazizjon29@gmail.com', color: '#8A2BE2', action: 'mailto:azizjon@gmail.com'
    },
    {
      icon: <FaPhoneAlt />, label: t('contactPhone'), value: '+998 93 364 20 30', color: '#00CED1', action: 'tel:+998901234567'
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Bu yerda haqiqiy API ga so'rov yuborish mumkin
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        ism: '',
        email: '',
        mavzu: '',
        xabar: ''
      });
      
      // 3 sekunddan keyin success xabarini o'chirish
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };



  return (
    <>

      <div className={`${styles.container} fade-in`} id="aloqa">
      
      {/* Sarlavha qismi */}
      <div className={styles.header}>
        <h1 className={styles.title} aria-label={t('contactTitle') + ' sarlavhasi'}>
          <FaPaperPlane style={{marginRight: '15px', color: '#FF6B35'}} />
          {t('contactTitle').toUpperCase()}
          <div className={styles.titleUnderline}></div>
        </h1>
      </div>

      {/* Asosiy kontent - 2 ustun */}
      <div className={styles.contactContainer}>
        
        {/* FORM QISMI (Chap ustun) */}
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle} aria-label={t('contactSendMessage') + ' bo‘limi'}>
            <FaCommentAlt style={{color: '#FF6B35'}} />
            {t('contactSendMessage').toUpperCase()}
          </h2>
          <form onSubmit={handleSubmit} aria-label="Aloqa formasi">
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="ism">
                <FaUser style={{marginRight: '8px'}} />
                {t('contactName').toUpperCase()}
              </label>
              <input
                type="text"
                id="ism"
                name="ism"
                value={formData.ism}
                onChange={handleChange}
                className={styles.input}
                placeholder={t('contactNamePlaceholder')}
                required
                aria-label={t('contactName')}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                <FaEnvelope style={{marginRight: '8px'}} />
                {t('contactEmail').toUpperCase()}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder={t('contactEmailPlaceholder')}
                required
                aria-label={t('contactEmail')}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="mavzu">
                <FaTag style={{marginRight: '8px'}} />
                {t('contactSubject').toUpperCase()}
              </label>
              <input
                type="text"
                id="mavzu"
                name="mavzu"
                value={formData.mavzu}
                onChange={handleChange}
                className={styles.input}
                placeholder={t('contactSubject')}
                required
                aria-label={t('contactSubject')}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="xabar">
                <FaEdit style={{marginRight: '8px'}} />
                {t('contactMessage').toUpperCase()}
              </label>
              <textarea
                id="xabar"
                name="xabar"
                value={formData.xabar}
                onChange={handleChange}
                className={styles.textarea}
                placeholder={t('contactMessage')}
                rows="5"
                required
                aria-label={t('contactMessage')}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
              aria-label={t('contactSendMessage') + ' tugmasi'}
            >
              {isSubmitting ? (
                  <>
                    <FaSpinner className="fa-spin" />
                    {t('contactSendMessage').toUpperCase()}...
                  </>
                ) : submitSuccess ? (
                  <>
                    <FaCheckCircle />
                    {t('contactSendMessage').toUpperCase()}!
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    {t('contactSendMessage').toUpperCase()}
                  </>
                )}
            </button>
          </form>
        </div>

        {/* MA'LUMOT QISMI (O'ng ustun) */}
        <div className={styles.infoSection} aria-label={t('contactInfo') + ' bo‘limi'}>
          <h2 className={styles.sectionTitle} aria-label={t('contactInfo') + ' sarlavhasi'}>
            <FaAddressBook style={{color: '#8A2BE2'}} />
            {t('contactInfo').toUpperCase()}
          </h2>
          {contactInfo.map((info, index) => (
            info.action ? (
              <a
                key={index}
                href={info.action}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoLink}
                aria-label={`${info.label}: ${info.value} (yangi oynada ochiladi)`}
              >
                <div 
                  className={styles.infoItem}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = `0 15px 30px ${info.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div 
                    className={styles.infoIcon}
                    style={{background: `linear-gradient(135deg, ${info.color}, ${info.color}80)`}}
                  >
                    {info.icon}
                  </div>
                  <div className={styles.infoContent}>
                    <div className={styles.infoLabel}>{info.label}</div>
                    <div className={styles.infoValue}>{info.value}</div>
                  </div>
                  <FaExternalLinkAlt style={{
                    color: info.color,
                    opacity: 0.7,
                    fontSize: '14px'
                  }} />
                </div>
              </a>
            ) : (
              <div 
                key={index}
                className={styles.infoItem}
                style={{cursor: 'default'}}
              >
                <div 
                  className={styles.infoIcon}
                  style={{background: `linear-gradient(135deg, ${info.color}, ${info.color}80)`}}
                >
                  {info.icon}
                </div>
                <div className={styles.infoContent}>
                  <div className={styles.infoLabel}>{info.label}</div>
                  <div className={styles.infoValue}>{info.value}</div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>

      
     
    </div>
    </>
  );
};

export default Contact;