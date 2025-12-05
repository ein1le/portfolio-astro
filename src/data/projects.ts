// Projects page data
// Central source of truth for project entries and types.

import mssaLogo from '../assets/extra/MSSA.jpg';

export interface ProjectEntry {
  id: number;
  title: string;
  description: string;
  languages: string[];
  contributors: string[];
  image?: string;
  links?: string;
  demo?: string;
  organisation?: any;
}

export const projects: ProjectEntry[] = [
  {
    id: 0,
    title: 'Portfolio',
    description: 'Portfolio website',
    languages: ['Astro', 'TailwindCSS', 'TypeScript', 'Vercel'],
    contributors: ['Ein'],
    image: '/E.png',
    links: 'https://github.com/ein1le/portfolio-astro',
    demo: 'https://ein1le-devfolio-astro.vercel.app/',
  },
  {
    id: 1,
    title: 'Data Dashboard',
    description: 'Placeholder data visualisation dashboard project.',
    languages: ['TypeScript', 'Astro', 'TailwindCSS'],
    contributors: ['Ein'],
    image: undefined,
  },
  {
    id: 2,
    title: 'ML Playground',
    description: 'Placeholder machine learning experimentation app.',
    languages: ['Python', 'TypeScript'],
    contributors: ['Ein'],
    image: undefined,
    organisation: mssaLogo,
  },
  {
    id: 3,
    title: 'API Service',
    description: 'Placeholder backend API service.',
    languages: ['TypeScript', 'Vercel'],
    contributors: ['Ein'],
    image: undefined,
  },
];
