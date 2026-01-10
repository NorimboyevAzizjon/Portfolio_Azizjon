import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../LanguageContext';

describe('Navbar component', () => {
  test('renders all nav links', () => {
    render(
      <MemoryRouter initialEntries={['/']}> 
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>
      </MemoryRouter>
    );
    expect(screen.getByText('Bosh sahifa')).toBeInTheDocument();
    expect(screen.getByText('Haqimda')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Aloqa')).toBeInTheDocument();
  });

  test('active link has correct class', () => {
    render(
      <MemoryRouter initialEntries={['/portfolio']}>
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>
      </MemoryRouter>
    );
    const portfolioLink = screen.getByText('Portfolio');
    expect(portfolioLink.className).toMatch(/active/);
  });

  test('navbar has nav and ul structure', () => {
    render(
      <MemoryRouter>
        <LanguageProvider>
          <Navbar />
        </LanguageProvider>
      </MemoryRouter>
    );
    expect(document.querySelector('nav')).toBeInTheDocument();
    expect(document.querySelector('ul')).toBeInTheDocument();
  });
});
