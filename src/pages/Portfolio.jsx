// Portfolio.jsx - TO'LIQ TAYYOR VERSIYA
import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';

const Portfolio = () => {
  const [loyihalar] = useState([
    {
      id: 1,
      sarlavha: 'Rone E-commerce',
      tavsif: 'Zamonaviy va interaktiv elektron tijorat platformasi. Mahsulotlar katalogi, savat, to\'lov tizimi va foydalanuvchi paneli.',
      rasm: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 2,
      sarlavha: 'Restoran Topgich',
      tavsif: 'Xarita asosidagi restoran va mehmonxona topish ilovasi. Real vaqtda joylashuv, baholar va rezervatsiya qilish imkoniyati.',
      rasm: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Google Maps API', 'Firebase', 'SCSS', 'Axios'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 3,
      sarlavha: 'Vazifa Boshqaruvchi',
      tavsif: 'Kuchli vazifalar boshqaruvi ilovasi. Drag & drop, vazifa filtrlari, vaqt oralig\'i va progress monitoring.',
      rasm: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Redux', 'Express.js', 'MongoDB', 'DnD'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 4,
      sarlavha: 'Ob-havo Dashboardi',
      tavsif: 'Real vaqt ob-havo monitoring dashboardi. 5 kunlik prognoz, harorat grafiklari va shaharlarni solishtirish.',
      rasm: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Weather API', 'Chart.js', 'Axios', 'Tailwind'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 5,
      sarlavha: 'Ijtimoiy Tarmoq Ilovasi',
      tavsif: 'To\'liq xususiyatli ijtimoiy tarmoq ilovasi. Postlar, kommentariyalar, do\'stlar va xabar almashish.',
      rasm: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&auto=format&fit=crop',
      texnologiyalar: ['React Native', 'Firebase', 'Redux', 'Node.js', 'Expo'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'mobil'
    },
    {
      id: 6,
      sarlavha: 'Portfolio Shablon',
      tavsif: 'Responsive va zamonaviy portfolio vebsayt shabloni. Dark/light mode, animatsiyalar va SEO optimallashtirish.',
      rasm: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'CSS3', 'JavaScript', 'Framer Motion', 'GSAP'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 7,
      sarlavha: 'Kriptovalyuta Traker',
      tavsif: 'Real vaqt kriptovalyuta kuzatuvchi. Narxlar, grafiklar, portfel boshqaruvi va push-bildirishnomalar.',
      rasm: 'https://images.unsplash.com/photo-1620336655055-bd87c5d1d73f?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'CoinGecko API', 'Chart.js', 'Tailwind', 'WebSocket'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 8,
      sarlavha: 'Musiqa Pleyeri',
      tavsif: 'Zamonaviy interaktiv musiqa pleyeri. Pleylistlar, ovoz nazorati, qidiruv va favoritelar.',
      rasm: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Howler.js', 'Material-UI', 'Redux', 'Node.js'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 9,
      sarlavha: 'Onlayn Do\'kon',
      tavsif: 'To\'liq funksiyali onlayn do\'kon. Mahsulot filtrlari, sharhlar, chegirmalar va administrator paneli.',
      rasm: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'Stripe API', 'MongoDB', 'Express', 'JWT'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 10,
      sarlavha: 'Blog Platformasi',
      tavsif: 'Modern blog platformasi. Maqolalar, kategoriyalar, izohlar va admin paneli bilan.',
      rasm: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop',
      texnologiyalar: ['Next.js', 'Sanity.io', 'Tailwind', 'Vercel', 'GraphQL'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    },
    {
      id: 11,
      sarlavha: 'Fitnes Ilovasi',
      tavsif: 'Shaxsiy fitnes ilovasi. Mashg\'ulot rejalari, ovqatlanish kundaligi va progress monitoring.',
      rasm: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&auto=format&fit=crop',
      texnologiyalar: ['React Native', 'Firebase', 'HealthKit', 'Redux', 'Expo'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'mobil'
    },
    {
      id: 12,
      sarlavha: 'Video Konferensiya',
      tavsif: 'Real vaqt video konferensiya platformasi. Video/audio chat, ekran ulashish va chat xususiyatlari.',
      rasm: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&auto=format&fit=crop',
      texnologiyalar: ['React', 'WebRTC', 'Socket.io', 'Node.js', 'WebSocket'],
      githubHavolasi: '#',
      jonliDemo: '#',
      toifa: 'veb'
    }
  ]);

  const [filtr, setFiltr] = useState('hamma');
  const [faqatReact, setFaqatReact] = useState(false);

  const toifalar = [
    { id: 'hamma', nomi: 'Barcha Loyihalar', soni: loyihalar.length },
    { id: 'veb', nomi: 'Veb Dasturlash', soni: loyihalar.filter(l => l.toifa === 'veb').length },
    { id: 'mobil', nomi: 'Mobil Ilovalar', soni: loyihalar.filter(l => l.toifa === 'mobil').length },
    { id: 'react', nomi: 'React Loyihalari', soni: loyihalar.filter(l => l.texnologiyalar.some(t => t.includes('React'))).length }
  ];

  const filtrlanganLoyihalar = () => {
    if (filtr === 'hamma') {
      if (faqatReact) {
        return loyihalar.filter(loyiha => loyiha.texnologiyalar.some(tex => tex.includes('React')));
      }
      return loyihalar;
    } else if (filtr === 'react') {
      return loyihalar.filter(loyiha => loyiha.texnologiyalar.some(tex => tex.includes('React')));
    } else {
      return loyihalar.filter(loyiha => loyiha.toifa === filtr);
    }
  };

  const statistika = [
    { raqam: loyihalar.length, yorliq: 'Jami Loyihalar', ikonka: 'fas fa-folder-open' },
    { raqam: filtrlanganLoyihalar().length, yorliq: 'Ko\'rsatilayotgan', ikonka: 'fas fa-eye' },
    { raqam: new Set(loyihalar.flatMap(l => l.texnologiyalar)).size, yorliq: 'Texnologiyalar', ikonka: 'fas fa-code' },
    { raqam: '100%', yorliq: 'Muvaffaqiyat Darajasi', ikonka: 'fas fa-trophy' }
  ];

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '100px 20px 80px',
      position: 'relative',
      zIndex: 1,
      fontFamily: "'Poppins', sans-serif"
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
      lineHeight: '1.7',
      marginBottom: '30px'
    },
    filtrlarKonteyner: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '25px',
      marginBottom: '50px',
      flexWrap: 'wrap'
    },
    toifalarKonteyner: {
      display: 'flex',
      gap: '15px',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    toifaTugmasi: {
      padding: '14px 30px',
      background: filtr === 'hamma' && !faqatReact 
        ? 'linear-gradient(135deg, #FF6B35, #E55A2B)' 
        : 'rgba(255, 255, 255, 0.08)',
      border: filtr === 'hamma' && !faqatReact 
        ? '2px solid rgba(255, 107, 53, 0.4)' 
        : '2px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      fontSize: '1rem',
      fontWeight: '600',
      color: filtr === 'hamma' && !faqatReact ? '#F8FAFC' : '#CBD5E1',
      outline: 'none',
      minWidth: '170px',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      position: 'relative',
      overflow: 'hidden'
    },
    soni: {
      fontSize: '0.85rem',
      background: 'rgba(255, 255, 255, 0.15)',
      padding: '2px 10px',
      borderRadius: '20px',
      marginLeft: '8px'
    },
    reactFilter: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 25px',
      background: faqatReact 
        ? 'linear-gradient(135deg, #61DAFB, #2D9CDB)' 
        : 'rgba(255, 255, 255, 0.08)',
      border: faqatReact 
        ? '2px solid rgba(97, 218, 251, 0.4)' 
        : '2px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      color: faqatReact ? '#F8FAFC' : '#CBD5E1',
      fontWeight: '600',
      fontSize: '1rem',
      backdropFilter: 'blur(10px)'
    },
    loyihalarQatori: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '35px',
      marginBottom: '50px'
    },
    boshlangan: {
      textAlign: 'center',
      padding: '80px 20px',
      color: '#94A3B8',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '25px',
      margin: '40px 0',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    boshlanganSarlavha: {
      fontSize: '1.8rem',
      marginBottom: '20px',
      color: '#FF6B35'
    },
    statistikaKonteyner: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '30px',
      marginTop: '60px'
    },
    statKarta: {
      background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.15), rgba(0, 206, 209, 0.15))',
      backdropFilter: 'blur(15px)',
      padding: '30px 20px',
      borderRadius: '20px',
      textAlign: 'center',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'default',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    statIkonka: {
      fontSize: '2.5rem',
      color: '#00CED1',
      marginBottom: '15px'
    },
    statRaqam: {
      fontSize: '2.8rem',
      fontWeight: '800',
      color: '#F8FAFC',
      marginBottom: '10px',
      textShadow: '0 2px 10px rgba(138, 43, 226, 0.3)'
    },
    statYorliq: {
      fontSize: '1rem',
      color: '#CBD5E1',
      fontWeight: '500',
      letterSpacing: '1px'
    },
    texnologiyalarKonteyner: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      justifyContent: 'center',
      marginTop: '40px',
      padding: '30px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '20px',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    texnologiyaYorligi: {
      padding: '10px 20px',
      background: 'rgba(138, 43, 226, 0.15)',
      color: '#8A2BE2',
      borderRadius: '25px',
      fontSize: '0.95rem',
      fontWeight: '600',
      border: '1px solid rgba(138, 43, 226, 0.3)',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  };

  // Barcha texnologiyalarni olish
  const barchaTexnologiyalar = [...new Set(loyihalar.flatMap(l => l.texnologiyalar))];

  return (
    <div style={styles.container} id="portfolio" className="fade-in">
      <div style={styles.sarlavha}>
        <h1 style={styles.asosiySarlavha}>
          PORTFOLIO
          <div style={styles.chiziq}></div>
        </h1>
        <p style={styles.tagSarlavha}>
          Turli dasturlash tillari va texnologiyalarda yaratgan ishlarimning namunalari. 
          Har bir loyiha o'zining noyob yechimi va dizayniga ega.
        </p>
      </div>

      {/* FILTR VA TOIFALAR */}
      <div style={styles.filtrlarKonteyner}>
        <div style={styles.toifalarKonteyner}>
          {toifalar.map((toifa) => (
            <button
              key={toifa.id}
              style={{
                ...styles.toifaTugmasi,
                background: filtr === toifa.id && !(toifa.id === 'hamma' && faqatReact)
                  ? 'linear-gradient(135deg, #FF6B35, #E55A2B)' 
                  : styles.toifaTugmasi.background,
                border: filtr === toifa.id && !(toifa.id === 'hamma' && faqatReact)
                  ? '2px solid rgba(255, 107, 53, 0.4)' 
                  : styles.toifaTugmasi.border,
                color: filtr === toifa.id && !(toifa.id === 'hamma' && faqatReact)
                  ? '#F8FAFC' 
                  : styles.toifaTugmasi.color
              }}
              onClick={() => {
                setFiltr(toifa.id);
                if (toifa.id !== 'react') {
                  setFaqatReact(false);
                }
              }}
              onMouseEnter={(e) => {
                if (!(filtr === toifa.id && !(toifa.id === 'hamma' && faqatReact))) {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255, 107, 53, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(255, 107, 53, 0.2)';
                }
              }}
              onMouseLeave={(e) => {
                if (!(filtr === toifa.id && !(toifa.id === 'hamma' && faqatReact))) {
                  e.currentTarget.style.background = styles.toifaTugmasi.background;
                  e.currentTarget.style.borderColor = styles.toifaTugmasi.border;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
              aria-label={`${toifa.nomi} loyihalarini ko'rish`}
            >
              {toifa.nomi}
              <span style={styles.soni}>{toifa.soni}</span>
            </button>
          ))}
        </div>

        {filtr === 'hamma' && (
          <div 
            style={styles.reactFilter}
            onClick={() => setFaqatReact(!faqatReact)}
            onMouseEnter={(e) => {
              if (!faqatReact) {
                e.currentTarget.style.background = 'rgba(97, 218, 251, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(97, 218, 251, 0.3)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!faqatReact) {
                e.currentTarget.style.background = styles.reactFilter.background;
                e.currentTarget.style.borderColor = styles.reactFilter.border;
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            <i className={`fab fa-react ${faqatReact ? 'fa-spin' : ''}`} style={{ 
              color: faqatReact ? '#61DAFB' : '#CBD5E1',
              fontSize: '1.2rem'
            }}></i>
            {faqatReact ? 'Faqat React' : 'React loyihalar'}
          </div>
        )}
      </div>

      {/* LOYIHALAR QATORI */}
      <div style={styles.loyihalarQatori}>
        {filtrlanganLoyihalar().map((loyiha) => (
          <ProjectCard
            key={loyiha.id}
            sarlavha={loyiha.sarlavha}
            tavsif={loyiha.tavsif}
            rasm={loyiha.rasm}
            texnologiyalar={loyiha.texnologiyalar}
            githubHavolasi={loyiha.githubHavolasi}
            jonliDemo={loyiha.jonliDemo}
          />
        ))}
      </div>

      {/* BO'SH HOLAT */}
      {filtrlanganLoyihalar().length === 0 && (
        <div style={styles.boshlangan}>
          <h3 style={styles.boshlanganSarlavha}>
            Bu toifada loyihalar topilmadi
          </h3>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
            Boshqa toifani tanlang yoki filterni o'zgartiring
          </p>
          <button
            style={{
              padding: '12px 30px',
              background: 'linear-gradient(135deg, #8A2BE2 0%, #6A0DAD 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onClick={() => {
              setFiltr('hamma');
              setFaqatReact(false);
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(138, 43, 226, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <i className="fas fa-redo-alt" style={{ marginRight: '8px' }}></i>
            Barcha loyihalarni ko'rish
          </button>
        </div>
      )}

      {/* TEXNOLOGIYALAR */}
      <div style={{ marginTop: '50px', textAlign: 'center' }}>
        <h2 style={{
          fontSize: '2.2rem',
          fontWeight: '700',
          color: '#F8FAFC',
          marginBottom: '30px'
        }}>
          <i className="fas fa-cogs" style={{ color: '#00CED1', marginRight: '12px' }}></i>
          Ishlatilgan Texnologiyalar
        </h2>
        <p style={{
          color: '#CBD5E1',
          fontSize: '1.1rem',
          maxWidth: '800px',
          margin: '0 auto 30px',
          lineHeight: '1.6'
        }}>
          Loyihalarimda quyidagi zamonaviy texnologiyalardan foydalanganman
        </p>
        
        <div style={styles.texnologiyalarKonteyner}>
          {barchaTexnologiyalar.map((tex, index) => (
            <div 
              key={index} 
              style={styles.texnologiyaYorligi}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = 'rgba(138, 43, 226, 0.25)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(138, 43, 226, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(138, 43, 226, 0.15)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {tex.includes('React') && <i className="fab fa-react"></i>}
              {tex.includes('Node') && <i className="fab fa-node-js"></i>}
              {tex.includes('MongoDB') && <i className="fas fa-database"></i>}
              {tex.includes('Firebase') && <i className="fas fa-fire"></i>}
              {tex.includes('JavaScript') && <i className="fab fa-js"></i>}
              {tex.includes('CSS') && <i className="fab fa-css3-alt"></i>}
              {!tex.includes('React') && !tex.includes('Node') && !tex.includes('MongoDB') && 
               !tex.includes('Firebase') && !tex.includes('JavaScript') && !tex.includes('CSS') && 
               <i className="fas fa-code"></i>}
              {tex}
            </div>
          ))}
        </div>
      </div>

      {/* STATISTIKA */}
      <div style={styles.statistikaKonteyner}>
        {statistika.map((stat, index) => (
          <div 
            key={index}
            style={styles.statKarta}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(138, 43, 226, 0.3)';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(138, 43, 226, 0.25), rgba(0, 206, 209, 0.25))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(138, 43, 226, 0.15), rgba(0, 206, 209, 0.15))';
            }}
          >
            <i className={stat.ikonka} style={styles.statIkonka}></i>
            <div style={styles.statRaqam}>{stat.raqam}</div>
            <div style={styles.statYorliq}>{stat.yorliq}</div>
          </div>
        ))}
      </div>

      {/* CALL TO ACTION */}
      <div style={{
        textAlign: 'center',
        marginTop: '70px',
        padding: '50px',
        background: 'linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(255, 107, 53, 0.1))',
        borderRadius: '25px',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#F8FAFC',
          marginBottom: '20px'
        }}>
          Loyiha hamkorligi uchun tayyorman!
        </h2>
        <p style={{
          color: '#CBD5E1',
          fontSize: '1.2rem',
          maxWidth: '700px',
          margin: '0 auto 30px',
          lineHeight: '1.6'
        }}>
          Yangi va qiziqarli loyihalar uchun hamkorlik qilishga tayyorman. 
          Sizning g'oyangizni hayotga tatbiq etishda yordam beraman.
        </p>
        <a 
          href="#aloqa"
          style={{
            padding: '16px 45px',
            background: 'linear-gradient(135deg, #00CED1 0%, #008B8B 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 206, 209, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <i className="fas fa-paper-plane"></i>
          Bog'lanish
        </a>
      </div>
    </div>
  );
};

export default Portfolio;