// main.jsx - Tuzatilgan versiya
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'

// Font Awesome CDN orqali qo'shish
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

// Google Fonts
const googleFontsLink = document.createElement('link');
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap';
googleFontsLink.rel = 'stylesheet';
document.head.appendChild(googleFontsLink);

// Viewport meta teglari
const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(metaViewport);

// Favicon
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/svg+xml';
favicon.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>';
document.head.appendChild(favicon);

// Meta teglar
document.title = 'Muhammadamin | Frontend Dasturchi';

const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Tajribali Frontend dasturchi, React mutaxassisi. 2.5+ yillik professional tajriba.';
document.head.appendChild(metaDescription);

const metaKeywords = document.createElement('meta');
metaKeywords.name = 'keywords';
metaKeywords.content = 'frontend dasturchi, react developer, javascript, web dasturlash, portfolio';
document.head.appendChild(metaKeywords);

// React ilovasini ishga tushirish
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);