import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

// Font Awesome
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

// Google Fonts
const googleFontsLink = document.createElement('link');
googleFontsLink.rel = 'stylesheet';
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800&display=swap';
document.head.appendChild(googleFontsLink);

// Meta tags
document.title = 'Azizjon | Frontend Dasturchi';

const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Tajribali Frontend dasturchi, React mutaxassisi. 2.5+ yillik professional tajriba.';
document.head.appendChild(metaDescription);

const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
document.head.appendChild(metaViewport);

// Favicon
const favicon = document.createElement('link');
favicon.rel = 'icon';
favicon.type = 'image/svg+xml';
// Custom colorful SVG icon (gradient background with code symbol)
favicon.href = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Cdefs%3E%3ClinearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22%3E%3Cstop stop-color=%22%2300c6ff%22/%3E%3Cstop offset=%221%22 stop-color=%22%23007bff%22/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22url(%23g)%22/%3E%3Ctext x=%2250%22 y=%2270%22 font-size=%2250%22 text-anchor=%22middle%22 fill=%22white%22 font-family=%22Arial,sans-serif%22%3E%3C/tspan%3E%F0%9F%92%BB%3C/tspan%3E%3C/text%3E%3C/svg%3E';
document.head.appendChild(favicon);

// Render app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);