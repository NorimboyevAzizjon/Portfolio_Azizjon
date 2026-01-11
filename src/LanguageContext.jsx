import React, { createContext, useState, useEffect } from 'react';
import uz from './locales/uz';
import en from './locales/en';
import ru from './locales/ru';

const translations = { uz, en, ru };

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'uz');

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const t = (key) => translations[lang][key] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// useLanguage hook moved to useLanguage.js