// Projects page data
// Central source of truth for project entries and types.

import mssaLogo from '../assets/extra/MSSA.jpg';
import uksscLogo from '../assets/extra/ukssc.png';
import orchidLogo from '../assets/projects/orchid.svg';

export type ProjectStatus = 'In development' | 'Ongoing' | 'Completed';

export interface ProjectEntry {
  id: number;
  title: string;
  description: string;
  information: string;
  status: ProjectStatus;
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
    information:
      'A personal developer portfolio built with Astro and Tailwind, designed around a three-panel layout and modular data-driven content. Acts as a central hub for projects, education, and experiences.',
    status: 'Completed',
    languages: ['Astro', 'TailwindCSS', 'TypeScript', 'Vercel'],
    contributors: ['Ein'],
    image: '/E.png',
    links: 'https://github.com/ein1le/portfolio-astro',
    demo: 'https://ein1le-devfolio-astro.vercel.app/',
  },
  {
    id: 1,
    title: 'Project Orchid',
    description: 'CRM and digital infrastructure overhaul for the UKSSC.',
    information:
      'Led a revamp of the UKSSC digital infrastructure, including a new public site built on Wix Velo and a Firebase-backed CRM. The goal was to centralise membership data, automate communications, and better support event workflows for the committee.',
    status: 'Ongoing',
    languages: ['Wix', 'Firebase', 'JavaScript'],
    contributors: ['Jaslyn Leong', 'Timothy Low'],
    image: orchidLogo.src,
    organisation: uksscLogo,
    demo: 'https://theukssc.co.uk',
  },
  {
    id: 2,
    title: 'ML Playground',
    description: 'Placeholder machine learning experimentation app.',
    information:
      'Internal sandbox for experimenting with model training, evaluation, and visualisation patterns before they are lifted into production-facing tools.',
    status: 'In development',
    languages: ['Python', 'TypeScript'],
    contributors: ['Ein'],
    image: undefined,
    organisation: mssaLogo,
  },
  {
    id: 3,
    title: 'API Service',
    description: 'Placeholder backend API service.',
    information:
      'Concept for a small, FastAPI-style backend focused on clean boundaries between data access, business logic, and HTTP transport. Intended as a foundation for future microservices.',
    status: 'In development',
    languages: ['TypeScript', 'Vercel'],
    contributors: ['Ein'],
    image: undefined,
  },
];
