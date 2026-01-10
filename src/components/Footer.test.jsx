import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../LanguageContext';

describe('Footer component', () => {
  test('renders footer', () => {
    render(
      <MemoryRouter>
        <LanguageProvider>
          <Footer />
        </LanguageProvider>
      </MemoryRouter>
    );
    // Footer matnini mos ravishda tekshiring
    // const footerElement = screen.getByText(/footer/i);
    // expect(footerElement).toBeInTheDocument();
  });
});
