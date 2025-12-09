// Projects page data
// Central source of truth for project entries and types.

import mssaLogo from '../assets/extra/MSSA.jpg';
import uksscLogo from '../assets/extra/ukssc.png';
import orchidLogo from '../assets/projects/orchid.svg';

export type ProjectStatus = 'In development' | 'Ongoing' | 'Completed' | 'Archived';

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
    description: 'Astro-based personal developer portfolio.',
    information:
      'A revamped developer portfolio built with Astro and Tailwind, designed with a responsive a three-panel layout and modular repository content for cleaner aesthetics and readability.',
    status: 'Ongoing',
    languages: ['Astro', 'TailwindCSS', 'TypeScript', 'Vercel'],
    contributors: "",
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
    id: 4,
    title: 'Legacy Portfolio',
    description: 'Original personal developer portfolio',
    information:
      'First iteration of my personal developer portfolio, built with React and hosted on Vercel. Was used to learn React and understand frontend development principles, but lacked performance and readability for website visitors.',
    status: 'Archived',
    languages: ['React', 'TypeScript', 'Vercel', 'TailwindCSS'],
    contributors: "",
    image: undefined,
    links: "https://github.com/ein1le/my_portfolio"
  }
];
