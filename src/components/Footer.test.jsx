/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../LanguageContext';

describe('Footer component', () => {
  test('renders all social links', () => {
    render(
      <MemoryRouter>
        <LanguageProvider>
          <Footer />
        </LanguageProvider>
      </MemoryRouter>
    );
    // Ijtimoiy tarmoq linklari
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Telegram')).toBeInTheDocument();
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument();
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument();
  });

  test('renders quick links', () => {
    render(
      <MemoryRouter>
        <LanguageProvider>
          <Footer />
        </LanguageProvider>
      </MemoryRouter>
    );
    expect(screen.getByLabelText('Bosh Sahifa')).toBeInTheDocument();
    expect(screen.getByLabelText('Haqimda')).toBeInTheDocument();
    expect(screen.getByLabelText('Portfolio')).toBeInTheDocument();
    expect(screen.getByLabelText('Aloqa')).toBeInTheDocument();
    expect(screen.getByLabelText('CV Yuklab Olish')).toBeInTheDocument();
  });

  test('theme toggle button works', () => {
    render(
      <MemoryRouter>
        <LanguageProvider>
          <Footer />
        </LanguageProvider>
      </MemoryRouter>
    );
    const themeBtn = screen.getByRole('button', { name: /Oq rejim|Qora rejim/i });
    expect(themeBtn).toBeInTheDocument();
    themeBtn.click();
    // Theme toggle ishlashini DOM orqali tekshirish mumkin
    expect(document.body.classList.contains('light') || document.body.classList.contains('dark')).toBe(true);
  });

  test('back to top button works', () => {
    window.scrollTo = jest.fn();
    render(
      <MemoryRouter>
        <LanguageProvider>
          <Footer />
        </LanguageProvider>
      </MemoryRouter>
    );
    const toTopBtn = screen.getByText('Yuqoriga');
    toTopBtn.click();
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
