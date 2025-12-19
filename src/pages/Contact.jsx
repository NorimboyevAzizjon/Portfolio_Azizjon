// Contact.jsx - TO'LIQ VERSIYA
import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    ism: '',
    email: '',
    mavzu: '',
    xabar: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Aloqa ma'lumotlari
  const contactInfo = [
    
    { 
      icon: 'fas fa-map-marker-alt',
      label: 'Manzil',
      value: 'Toshkent, Uzbekistan',
      color: '#FF6B35'
    },
    { 
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'norimboyevazizjon29@gmail.com',
      color: '#8A2BE2',
      action: 'mailto:azizjon@gmail.com'
    },
    { 
      icon: 'fas fa-phone-alt',
      label: 'Telefon',
      value: '+998 93 364 20 30',
      color: '#00CED1',
      action: 'tel:+998901234567'
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

  const handleCVDownload = () => {
    // CV yuklab olish logikasi
    window.open('/CV_Azizjon.pdf', '_blank');
  };

  return (
    <div className={`${styles.container} fade-in`} id="aloqa">
      
      {/* Sarlavha qismi */}
      <div className={styles.header}>
        <h1 className={styles.title}>
          <i className="fas fa-paper-plane" style={{marginRight: '15px', color: '#FF6B35'}}></i>
          BOG'LANISH
          <div className={styles.titleUnderline}></div>
        </h1>
      </div>

      {/* Asosiy kontent - 2 ustun */}
      <div className={styles.contactContainer}>
        
        {/* FORM QISMI (Chap ustun) */}
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>
            <i className="fas fa-comment-alt" style={{color: '#FF6B35'}}></i>
            XABAR YUBORISH
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="ism">
                <i className="fas fa-user" style={{marginRight: '8px'}}></i>
                ISMINGIZ
              </label>
              <input
                type="text"
                id="ism"
                name="ism"
                value={formData.ism}
                onChange={handleChange}
                className={styles.input}
                placeholder="Ismingizni kiriting"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                <i className="fas fa-envelope" style={{marginRight: '8px'}}></i>
                EMAIL MANZILINGIZ
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                placeholder="example@gmail.com"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="mavzu">
                <i className="fas fa-tag" style={{marginRight: '8px'}}></i>
                MAVZU
              </label>
              <input
                type="text"
                id="mavzu"
                name="mavzu"
                value={formData.mavzu}
                onChange={handleChange}
                className={styles.input}
                placeholder="Xabar mavzusi"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="xabar">
                <i className="fas fa-edit" style={{marginRight: '8px'}}></i>
                XABAR
              </label>
              <textarea
                id="xabar"
                name="xabar"
                value={formData.xabar}
                onChange={handleChange}
                className={styles.textarea}
                placeholder="Xabaringizni bu yerga yozing..."
                rows="5"
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={styles.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  YUBORILMOQDA...
                </>
              ) : submitSuccess ? (
                <>
                  <i className="fas fa-check-circle"></i>
                  MUVAFFAQIYATLI YUBORILDI!
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  XABAR YUBORISH
                </>
              )}
            </button>
          </form>
        </div>

        {/* MA'LUMOT QISMI (O'ng ustun) */}
        <div className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>
            <i className="fas fa-address-book" style={{color: '#8A2BE2'}}></i>
            ALOQA MA'LUMOTLARI
          </h2>
          
          {contactInfo.map((info, index) => (
            info.action ? (
              <a
                key={index}
                href={info.action}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.infoLink}
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
                    <i className={info.icon}></i>
                  </div>
                  <div className={styles.infoContent}>
                    <div className={styles.infoLabel}>{info.label}</div>
                    <div className={styles.infoValue}>{info.value}</div>
                  </div>
                  <i className="fas fa-external-link-alt" style={{
                    color: info.color,
                    opacity: 0.7,
                    fontSize: '14px'
                  }}></i>
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
                  <i className={info.icon}></i>
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
  );
};

export default Contact;