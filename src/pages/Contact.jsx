import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    ism: '',
    email: '',
    mavzu: '',
    xabar: ''
  });

  const [yuborilmoqda, setYuborilmoqda] = useState(false);

  const aloqaMalumotlari = [  // aloqaMa'lumotlari o'rniga aloqaMalumotlari
    { ikonka: 'fas fa-map-marker-alt', sarlavha: 'Manzil:', qiymat: 'Toshkent, O\'zbekiston' },
    { ikonka: 'fas fa-envelope', sarlavha: 'Email:', qiymat: 'm.abbbosov@gmail.com' },
    { ikonka: 'fas fa-graduation-cap', sarlavha: 'Ta\'lim:', qiymat: 'TUIT' },
    { ikonka: 'fas fa-phone', sarlavha: 'Telefon:', qiymat: '+998 90 123 45 67' },
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

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '100px 20px 80px',
      position: 'relative',
      zIndex: 1
    },
    sarlavha: {
      textAlign: 'center',
      marginBottom: '70px'
    },
    asosiySarlavha: {
      fontSize: '3.5rem',
      fontWeight: '900',
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #F8FAFC 0%, #8A2BE2 50%, #00CED1 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      letterSpacing: '1px',
      textTransform: 'uppercase'
    },
    chiziq: {
      width: '120px',
      height: '5px',
      background: 'linear-gradient(90deg, #8A2BE2, #00CED1)',
      margin: '20px auto 0',
      borderRadius: '3px'
    },
    tagSarlavha: {
      fontSize: '1.25rem',
      color: '#CBD5E1',
      maxWidth: '700px',
      margin: '0 auto',
      lineHeight: '1.7'
    },
    aloqaKonteyner: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      marginBottom: '50px'
    },
    formaQismi: {
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.08))',
      backdropFilter: 'blur(20px)',
      padding: '40px',
      borderRadius: '25px',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
    },
    formaSarlavhasi: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#F8FAFC',
      marginBottom: '35px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    formaGuruhi: {
      marginBottom: '30px'
    },
    yorliq: {
      display: 'block',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#CBD5E1',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    kiritish: {
      width: '100%',
      padding: '16px 20px',
      background: 'rgba(255, 255, 255, 0.07)',
      border: '2px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '15px',
      color: '#F8FAFC',
      fontSize: '1rem',
      fontFamily: "'Poppins', sans-serif",
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      outline: 'none'
    },
    yuborishTugmasi: {
      padding: '18px 45px',
      background: 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      boxShadow: '0 8px 30px rgba(255, 107, 53, 0.4)',
      marginTop: '10px'
    },
    malumotQismi: {  // ma'lumot o'rniga malumot
      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.08))',
      backdropFilter: 'blur(20px)',
      padding: '40px',
      borderRadius: '25px',
      border: '1px solid rgba(255, 255, 255, 0.15)',
      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
    },
    malumotSarlavhasi: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#F8FAFC',
      marginBottom: '35px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    malumotElementi: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '30px',
      gap: '18px',
      padding: '20px',
      borderRadius: '15px',
      background: 'rgba(255, 255, 255, 0.05)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    malumotIkonkasi: {
      width: '50px',
      height: '50px',
      background: 'linear-gradient(135deg, #8A2BE2, #00CED1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#F8FAFC',
      fontSize: '20px',
      flexShrink: 0
    },
    malumotMazmuni: {
      flex: '1'
    },
    malumotYorligi: {
      fontSize: '0.9rem',
      color: '#94A3B8',
      marginBottom: '6px',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    malumotQiymati: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#F8FAFC'
    },
    cvQismi: {
      textAlign: 'center',
      marginTop: '50px'
    },
    cvTugmasi: {
      padding: '18px 45px',
      background: 'linear-gradient(135deg, #8A2BE2 0%, #6A0DAD 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      boxShadow: '0 8px 30px rgba(138, 43, 226, 0.4)',
      margin: '0 auto'
    }
  };

  return (
    <div style={styles.container} id="aloqa" className="fade-in">
      <div style={styles.sarlavha}>
        <h1 style={styles.asosiySarlavha}>
          ALOQA
          <div style={styles.chiziq}></div>
        </h1>
        <p style={styles.tagSarlavha}>
          Hamkorlik uchun yoki oddiy salom aytish uchun men bilan bog'laning
        </p>
      </div>

      <div style={styles.aloqaKonteyner}>
        {/* XABAR YUBORISH FORMASI */}
        <div style={styles.formaQismi}>
          <h2 style={styles.formaSarlavhasi}>
            <i className="fas fa-paper-plane" style={{ color: '#FF6B35' }}></i>
            MENGA XABAR YUBORING
          </h2>
          
          <form onSubmit={yuborish}>
            <div style={styles.formaGuruhi}>
              <label style={styles.yorliq}>ISMINGIZ</label>
              <input
                type="text"
                name="ism"
                value={formData.ism}
                onChange={ozgartirish}
                style={styles.kiritish}
                required
                onFocus={(e) => {
                  e.target.style.borderColor = '#FF6B35';
                  e.target.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.3)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'rgba(255, 255, 255, 0.07)';
                }}
                placeholder="Ismingizni kiriting"
              />
            </div>
            
            <div style={styles.formaGuruhi}>
              <label style={styles.yorliq}>EMAIL MANZILINGIZ</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={ozgartirish}
                style={styles.kiritish}
                required
                onFocus={(e) => {
                  e.target.style.borderColor = '#FF6B35';
                  e.target.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.3)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'rgba(255, 255, 255, 0.07)';
                }}
                placeholder="email@example.com"
              />
            </div>
            
            <div style={styles.formaGuruhi}>
              <label style={styles.yorliq}>MAVZU</label>
              <input
                type="text"
                name="mavzu"
                value={formData.mavzu}
                onChange={ozgartirish}
                style={styles.kiritish}
                required
                onFocus={(e) => {
                  e.target.style.borderColor = '#FF6B35';
                  e.target.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.3)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'rgba(255, 255, 255, 0.07)';
                }}
                placeholder="Mavzuni kiriting"
              />
            </div>
            
            <div style={styles.formaGuruhi}>
              <label style={styles.yorliq}>XABAR</label>
              <textarea
                name="xabar"
                value={formData.xabar}
                onChange={ozgartirish}
                style={{
                  ...styles.kiritish,
                  minHeight: '160px',
                  resize: 'vertical',
                  lineHeight: '1.6'
                }}
                required
                onFocus={(e) => {
                  e.target.style.borderColor = '#FF6B35';
                  e.target.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.3)';
                  e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.target.style.boxShadow = 'none';
                  e.target.style.background = 'rgba(255, 255, 255, 0.07)';
                }}
                placeholder="Xabaringizni bu yerga yozing..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              style={styles.yuborishTugmasi}
              disabled={yuborilmoqda}
              onMouseEnter={(e) => {
                if (!yuborilmoqda) {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 15px 40px rgba(255, 107, 53, 0.6)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #8A2BE2 0%, #6A0DAD 100%)';
                }
              }}
              onMouseLeave={(e) => {
                if (!yuborilmoqda) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(255, 107, 53, 0.4)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)';
                }
              }}
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
        <div style={styles.malumotQismi}>
          <h2 style={styles.malumotSarlavhasi}>
            <i className="fas fa-address-card" style={{ color: '#00CED1' }}></i>
            ALOQA MA'LUMOTLARI
          </h2>
          
          {aloqaMalumotlari.map((malumot, index) => (
            <div 
              key={index} 
              style={styles.malumotElementi}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={styles.malumotIkonkasi}>
                <i className={malumot.ikonka}></i>
              </div>
              <div style={styles.malumotMazmuni}>
                <div style={styles.malumotYorligi}>{malumot.sarlavha}</div>
                <div style={styles.malumotQiymati}>{malumot.qiymat}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.cvQismi}>
        <button
          style={styles.cvTugmasi}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-6px)';
            e.currentTarget.style.boxShadow = '0 15px 40px rgba(138, 43, 226, 0.6)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #FF6B35 0%, #E55A2B 100%)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(138, 43, 226, 0.4)';
            e.currentTarget.style.background = 'linear-gradient(135deg, #8A2BE2 0%, #6A0DAD 100%)';
          }}
          aria-label="CV yuklab olish"
        >
          <i className="fas fa-download"></i>
          CV Yuklab Olish
        </button>
      </div>
    </div>
  );
};

export default Contact;