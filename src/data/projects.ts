// Projects page data
// Central source of truth for project entries and types.

import mssaLogo from '../assets/extra/MSSA.jpg';
import uksscLogo from '../assets/extra/ukssc.png';
import orchidLogo from '../assets/projects/orchid.svg';

const samaggiLogo =
  'https://media.licdn.com/dms/image/v2/D560BAQEnTdiqjmoy2Q/company-logo_200_200/B56ZYPStEjHQAI-/0/1744013284616/samaggi_samagom_logo?e=2147483647&v=beta&t=lhdOV0RiPzPBxLll2Pme17qpbZjVeT1z9eo81wRhaTU';

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
    id: 5,
    title: 'Samaggi SSO',
    description: '',
    information: '',
    status: 'Ongoing',
    languages: [],
    contributors: [],
    organisation: samaggiLogo,
    demo: 'https://staff-portal.samaggisamagom.com/sign-in',
  },
  {
    id: 6,
    title: 'Samaggi Games Scoreboard',
    description: '',
    information: '',
    status: 'Ongoing',
    languages: [],
    contributors: [],
    organisation: samaggiLogo,
    demo: 'https://games-signup.samaggisamagom.com',
  },
  {
    id: 7,
    title: 'Samaggi CFAS',
    description: '',
    information: '',
    status: 'Ongoing',
    languages: [],
    contributors: [],
    organisation: samaggiLogo,
    demo: 'https://sacc.samaggisamagom.com/cfas/hub/sign-in?nav=%2Fcfas%2Fhub%2Fhome',
  },
  {
    id: 8,
    title: 'Samaggi Postix',
    description: '',
    information: '',
    status: 'Ongoing',
    languages: [],
    contributors: [],
    organisation: samaggiLogo,
    demo: 'https://tickets.samaggisamagom.com',
  }
];
