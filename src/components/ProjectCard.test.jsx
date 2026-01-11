/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from './ProjectCard';
import { MemoryRouter } from 'react-router-dom';
import { LanguageProvider } from '../LanguageContext';

describe('ProjectCard component', () => {
  test('renders project title and description', () => {
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
    expect(screen.getByText('Test project')).toBeInTheDocument();
    expect(screen.getByText('desc')).toBeInTheDocument();
  });

  test('renders technology badges', () => {
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
    // Har bir texnologiya badge uchun bir nechta element chiqishi mumkin, shuning uchun birinchi badge'ni tekshiramiz
    expect(screen.queryAllByText('React').length).toBeGreaterThan(0);
    expect(screen.queryAllByText('Node').length).toBeGreaterThan(0);
    expect(screen.queryAllByText('JS').length).toBeGreaterThan(0);
  });

  test('renders github and demo links if provided', () => {
    render(
      <MemoryRouter>
        <LanguageProvider>
          <ProjectCard 
            sarlavha="Test project" 
            tavsif="desc" 
            texnologiyalar={['React']} 
            githubHavolasi="https://github.com/example" 
            jonliDemo="https://demo.com" 
          />
        </LanguageProvider>
      </MemoryRouter>
    );
    expect(screen.getAllByRole('link', { name: /github/i })[0]).toHaveAttribute('href', 'https://github.com/example');
    expect(screen.getAllByRole('link', { name: /demo/i })[0]).toHaveAttribute('href', 'https://demo.com');
  });

  test('shows +N badge if more than 3 technologies', () => {
    render(
      <MemoryRouter>
        <LanguageProvider>
          <ProjectCard 
            sarlavha="Test project" 
            tavsif="desc" 
            texnologiyalar={['React', 'Node', 'JS', 'Redux', 'CSS']} 
          />
        </LanguageProvider>
      </MemoryRouter>
    );
    expect(screen.getByText('+2')).toBeInTheDocument();
  });
});
