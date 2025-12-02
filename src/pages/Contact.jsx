import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    ism: '',
    email: '',
    mavzu: '',
    xabar: ''
  });

  const [yuborilmoqda, setYuborilmoqda] = useState(false);

  const aloqaMalumotlari = [
    { ikonka: 'fas fa-map-marker-alt', sarlavha: 'Manzil:', qiymat: ' O\'zbekiston ' },
    { ikonka: 'fas fa-envelope', sarlavha: 'Email:', qiymat: 'norimboyevazizjon29@gmail.com' },
    { ikonka: 'fas fa-phone', sarlavha: 'Telefon:', qiymat: '+998 93 364 20 30' },
    { ikonka: 'fas fa-language', sarlavha: 'Tillarni bilaman:', qiymat: 'O\'zbek, Ingliz, Rus' }
  ];

  const ozgartirish = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const yuborish = (e) => {
    e.preventDefault();
    setYuborilmoqda(true);
    
    // Simulyatsiya API so'rovi
    setTimeout(() => {
      alert('Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanamiz.');
      setFormData({
        ism: '',
        email: '',
        mavzu: '',
        xabar: ''
      });
      setYuborilmoqda(false);
    }, 1500);
  };

  return (
    <div className={`${styles.container} fade-in`} id="aloqa">
      <div className={styles.header}>
        <h1 className={styles.title}>
          ALOQA
          <div className={styles.titleUnderline}></div>
        </h1>
        <p className={styles.subtitle}>
          Hamkorlik uchun yoki oddiy salom aytish uchun men bilan bog'laning
        </p>
      </div>

      <div className={styles.contactContainer}>
        {/* XABAR YUBORISH FORMASI */}
        <div className={styles.formSection}>
          <h2 className={styles.sectionTitle}>
            <i className="fas fa-paper-plane" style={{ color: '#FF6B35' }}></i>
            MENGA XABAR YUBORING
          </h2>
          
          <form onSubmit={yuborish}>
            <div className={styles.formGroup}>
              <label className={styles.label}>ISMINGIZ</label>
              <input
                type="text"
                name="ism"
                value={formData.ism}
                onChange={ozgartirish}
                className={styles.input}
                required
                placeholder="Ismingizni kiriting"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>EMAIL MANZILINGIZ</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={ozgartirish}
                className={styles.input}
                required
                placeholder="email@example.com"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>MAVZU</label>
              <input
                type="text"
                name="mavzu"
                value={formData.mavzu}
                onChange={ozgartirish}
                className={styles.input}
                required
                placeholder="Mavzuni kiriting"
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>XABAR</label>
              <textarea
                name="xabar"
                value={formData.xabar}
                onChange={ozgartirish}
                className={styles.textarea}
                required
                placeholder="Xabaringizni bu yerga yozing..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className={styles.submitButton}
              disabled={yuborilmoqda}
            >
              {yuborilmoqda ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Yuborilmoqda...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i>
                  Xabarni Yuborish
                </>
              )}
            </button>
          </form>
        </div>

        {/* ALOQA MA'LUMOTLARI */}
        <div className={styles.infoSection}>
          <h2 className={styles.sectionTitle}>
            <i className="fas fa-address-card" style={{ color: '#00CED1' }}></i>
            ALOQA MA'LUMOTLARI
          </h2>
          
          {aloqaMalumotlari.map((malumot, index) => (
            <div 
              key={index} 
              className={styles.infoItem}
            >
              <div className={styles.infoIcon}>
                <i className={malumot.ikonka}></i>
              </div>
              <div className={styles.infoContent}>
                <div className={styles.infoLabel}>{malumot.sarlavha}</div>
                <div className={styles.infoValue}>{malumot.qiymat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.cvSection}>
      </div>
    </div>
  );
};

export default Contact;