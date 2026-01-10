import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../LanguageContext';

describe('Navbar component', () => {
  test('renders navbar', () => {
    render(
      <MemoryRouter>
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>
      </MemoryRouter>
    );
    // Navbar matnini mos ravishda tekshiring
    // const navElement = screen.getByText(/home/i);
    // expect(navElement).toBeInTheDocument();
  });
});
