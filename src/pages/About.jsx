import React from 'react';

const About = () => {
  const mahoratlar = [
    { nomi: 'HTML', foiz: 90, rang: '#E44D26' },
    { nomi: 'CSS', foiz: 88, rang: '#264DE4' },
    { nomi: 'SCSS', foiz: 85, rang: '#CC6699' },
    { nomi: 'Bootstrap', foiz: 82, rang: '#7952B3' },
    { nomi: 'Tailwind', foiz: 75, rang: '#38B2AC' },
    { nomi: 'JavaScript', foiz: 85, rang: '#F7DF1E' },
    { nomi: 'React.js, Redux', foiz: 88, rang: '#61DAFB' },
    { nomi: 'Next.js', foiz: 70, rang: '#000000' },
    { nomi: 'React Native', foiz: 65, rang: '#61DAFB' }
  ];

  const talim = [  // ta'lim o'rniga talim
    { daraja: 'Kompyuter Fanlari', universitet: 'TUIT', yil: '2020-2024' },
    { daraja: 'Frontend Dasturlash', universitet: 'Onlayn Kurslar', yil: '2022' },
    { daraja: 'React Mutaxassisligi', universitet: 'Udemy', yil: '2023' }
  ];

  const stats = [
    { raqam: '2.5+', matn: 'Yillik Tajriba', ikonka: 'fas fa-briefcase' },
    { raqam: '50+', matn: 'Tugatilgan Loyihalar', ikonka: 'fas fa-project-diagram' },
    { raqam: '100%', matn: 'Mijoz Mamnuniyati', ikonka: 'fas fa-users' },
    { raqam: '15+', matn: 'Sertifikatlar', ikonka: 'fas fa-certificate' }
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '100px 20px 80px',
      fontFamily: "'Poppins', sans-serif",
      position: 'relative',
      zIndex: 1
    }} id="haqimda" className="fade-in">
      
      <div style={{
        textAlign: 'center',
        marginBottom: '70px',
        position: 'relative'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: '900',
          marginBottom: '1.5rem',
          background: 'linear-gradient(135deg, #F8FAFC 0%, #8A2BE2 50%, #00CED1 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          HAQIMDA
          <div style={{
            width: '120px',
            height: '5px',
            background: 'linear-gradient(90deg, #8A2BE2, #00CED1)',
            margin: '20px auto 0',
            borderRadius: '3px'
          }}></div>
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: '#CBD5E1',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.7'
        }}>
          Mening mahoratim, ta'limim va tajribam haqida batafsil ma'lumot
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '50px',
        marginBottom: '60px'
      }}>
        {/* MAHORATLAR QISMI */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.08))',
          backdropFilter: 'blur(20px)',
          padding: '35px',
          borderRadius: '25px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#F8FAFC',
            marginBottom: '35px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <i className="fas fa-code" style={{ color: '#00CED1' }}></i>
            Mening Mahoratlarim
          </h2>
          
          {mahoratlar.map((mahorat, index) => (
            <div key={index} style={{ marginBottom: '28px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  color: '#F8FAFC'
                }}>
                  {mahorat.nomi}
                </span>
                <span style={{
                  fontSize: '15px',
                  fontWeight: '700',
                  color: mahorat.rang,
                  backgroundColor: `${mahorat.rang}20`,
                  padding: '4px 12px',
                  borderRadius: '20px'
                }}>
                  {mahorat.foiz}%
                </span>
              </div>
              <div style={{
                width: '100%',
                height: '12px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '6px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <div 
                  style={{
                    height: '100%',
                    borderRadius: '6px',
                    background: `linear-gradient(90deg, ${mahorat.rang}, ${mahorat.rang}80)`,
                    width: `${mahorat.foiz}%`,
                    transition: 'width 1.2s cubic-bezier(0.65, 0, 0.35, 1)',
                    boxShadow: `0 0 15px ${mahorat.rang}40`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* TA'LIM QISMI */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.08))',
          backdropFilter: 'blur(20px)',
          padding: '35px',
          borderRadius: '25px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#F8FAFC',
            marginBottom: '35px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <i className="fas fa-graduation-cap" style={{ color: '#00CED1' }}></i>
            Ta'limim
          </h2>
          
          {talim.map((edu, index) => (
            <div 
              key={index} 
              style={{
                marginBottom: '30px',
                paddingBottom: '30px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                ...(index === talim.length - 1 && { borderBottom: 'none', marginBottom: 0, paddingBottom: 0 })
              }}
            >
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                color: '#F8FAFC',
                marginBottom: '8px'
              }}>
                {edu.daraja}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#00CED1',
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <i className="fas fa-university"></i>
                {edu.universitet}
              </p>
              <span style={{
                fontSize: '0.95rem',
                color: '#94A3B8',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                padding: '6px 16px',
                borderRadius: '25px',
                display: 'inline-block',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                {edu.yil}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* STATISTIKA KARTALARI */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '30px',
        marginTop: '60px'
      }}>
        {stats.map((stat, index) => (
          <div 
            key={index}
            style={{
              background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.15), rgba(0, 206, 209, 0.15))',
              backdropFilter: 'blur(15px)',
              padding: '35px 25px',
              borderRadius: '20px',
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
              e.currentTarget.style.boxShadow = '0 20px 45px rgba(138, 43, 226, 0.4)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(138, 43, 226, 0.25), rgba(0, 206, 209, 0.25))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(138, 43, 226, 0.15), rgba(0, 206, 209, 0.15))';
            }}
          >
            <i className={stat.ikonka} style={{
              fontSize: '42px',
              color: '#00CED1',
              marginBottom: '22px'
            }}></i>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: '800',
              color: '#F8FAFC',
              marginBottom: '12px'
            }}>
              {stat.raqam}
            </div>
            <div style={{
              fontSize: '1.1rem',
              color: '#CBD5E1',
              fontWeight: '500'
            }}>
              {stat.matn}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;