import React from 'react';
import { LanguageProvider } from './LanguageContext';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';

import Loader from './components/Loader.jsx';


function App() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2s loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      {loading && <Loader />}
      <div className="app" style={loading ? { filter: 'blur(2px)', pointerEvents: 'none' } : {}}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/haqimda" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/aloqa" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;