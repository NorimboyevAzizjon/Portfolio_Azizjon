/* eslint-env jest */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { LanguageProvider } from '../LanguageContext';
import { MemoryRouter } from 'react-router-dom';

describe('Header component', () => {
  test('renders header text', () => {
    render(
      <MemoryRouter>
        <LanguageProvider>
          <Header />
        </LanguageProvider>
      </MemoryRouter>
    );
    // Replace 'Portfolio' with your actual header text if different
    const headerElement = screen.getByText(/portfolio/i);
    expect(headerElement).toBeInTheDocument();
  });
});
