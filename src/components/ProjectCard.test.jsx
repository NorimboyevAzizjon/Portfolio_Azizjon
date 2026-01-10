import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../LanguageContext';

describe('ProjectCard component', () => {
  test('renders project card', () => {
    render(
      <MemoryRouter>
        <LanguageProvider>
          <ProjectCard 
            sarlavha="Test project" 
            tavsif="desc" 
            texnologiyalar={['React', 'Node', 'JS']} 
          />
        </LanguageProvider>
      </MemoryRouter>
    );
    // ProjectCard matnini mos ravishda tekshiring
    // const titleElement = screen.getByText(/test project/i);
    // expect(titleElement).toBeInTheDocument();
  });
});
