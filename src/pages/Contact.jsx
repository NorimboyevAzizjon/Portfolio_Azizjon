import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    { icon: 'fas fa-map-marker-alt', label: 'Location:', value: 'Tashkent, Uzbekistan' },
    { icon: 'fas fa-envelope', label: 'Email:', value: 'm.abbbosov@gmail.com' },
    { icon: 'fas fa-graduation-cap', label: 'Education:', value: 'TUIT' },
    { icon: 'fas fa-phone', label: 'Mobile:', value: '+998 80 099-44-49' },
    { icon: 'fas fa-language', label: 'Languages:', value: 'Uzbek, English, Russian' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 20px',
      fontFamily: "'Poppins', sans-serif"
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    title: {
      fontSize: '48px',
      fontWeight: '700',
      color: '#2c3e50',
      marginBottom: '15px',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      position: 'relative',
      display: 'inline-block',
      paddingBottom: '15px'
    },
    titleUnderline: {
      position: 'absolute',
      width: '100px',
      height: '4px',
      backgroundColor: '#3498db',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      borderRadius: '2px'
    },
    subtitle: {
      fontSize: '18px',
      color: '#7f8c8d',
      maxWidth: '600px',
      margin: '0 auto'
    },
    contactContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '50px',
      marginBottom: '50px'
    },
    formSection: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
    },
    formTitle: {
      fontSize: '28px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '30px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    formGroup: {
      marginBottom: '25px'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: "'Poppins', sans-serif",
      transition: 'border-color 0.3s ease'
    },
    textarea: {
      width: '100%',
      padding: '12px 15px',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      fontSize: '16px',
      fontFamily: "'Poppins', sans-serif",
      minHeight: '150px',
      resize: 'vertical',
      transition: 'border-color 0.3s ease'
    },
    submitButton: {
      padding: '15px 40px',
      backgroundColor: '#3498db',
      color: 'white',
      border: 'none',
      borderRadius: '30px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 20px rgba(52, 152, 219, 0.3)'
    },
    infoSection: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
    },
    infoTitle: {
      fontSize: '28px',
      fontWeight: '600',
      color: '#2c3e50',
      marginBottom: '30px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: '25px',
      gap: '15px'
    },
    infoIcon: {
      width: '40px',
      height: '40px',
      backgroundColor: '#e3f2fd',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#3498db',
      fontSize: '18px',
      flexShrink: '0'
    },
    infoContent: {
      flex: '1'
    },
    infoLabel: {
      fontSize: '14px',
      color: '#7f8c8d',
      marginBottom: '5px'
    },
    infoValue: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#2c3e50'
    },
    cvSection: {
      textAlign: 'center',
      marginTop: '50px'
    },
    cvButton: {
      padding: '15px 40px',
      backgroundColor: '#2c3e50',
      color: 'white',
      border: 'none',
      borderRadius: '30px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all 0.3s ease',
      boxShadow: '0 5px 20px rgba(44, 62, 80, 0.3)',
      margin: '0 auto'
    }
  };

  return (
    <div style={styles.container} className="fade-in">
      <div style={styles.header}>
        <h1 style={styles.title}>
          CONTACT ME
          <div style={styles.titleUnderline}></div>
        </h1>
        <p style={styles.subtitle}>
          Get in touch with me for collaborations or just a friendly hello
        </p>
      </div>

      <div style={styles.contactContainer}>
        <div style={styles.formSection}>
          <h2 style={styles.formTitle}>
            <i className="fas fa-paper-plane"></i>
            SEND ME A MESSAGE
          </h2>
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label}>YOUR NAME</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>YOUR EMAIL</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>ENTER SUBJECT</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                style={styles.input}
                required
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              />
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label}>MESSAGE HERE...</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
                onFocus={(e) => e.target.style.borderColor = '#3498db'}
                onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
              ></textarea>
            </div>
            
            <button
              type="submit"
              style={styles.submitButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(52, 152, 219, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 5px 20px rgba(52, 152, 219, 0.3)';
              }}
            >
              <i className="fas fa-paper-plane"></i>
              Send Message
            </button>
          </form>
        </div>

        <div style={styles.infoSection}>
          <h2 style={styles.infoTitle}>
            <i className="fas fa-address-card"></i>
            CONTACT INFORMATION
          </h2>
          
          {contactInfo.map((info, index) => (
            <div key={index} style={styles.infoItem}>
              <div style={styles.infoIcon}>
                <i className={info.icon}></i>
              </div>
              <div style={styles.infoContent}>
                <div style={styles.infoLabel}>{info.label}</div>
                <div style={styles.infoValue}>{info.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.cvSection}>
        <button
          style={styles.cvButton}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(44, 62, 80, 0.4)';
            e.currentTarget.style.backgroundColor = '#3498db';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 5px 20px rgba(44, 62, 80, 0.3)';
            e.currentTarget.style.backgroundColor = '#2c3e50';
          }}
        >
          <i className="fas fa-download"></i>
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Contact;