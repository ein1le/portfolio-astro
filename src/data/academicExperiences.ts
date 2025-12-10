// Academic experiences data for the Experiences > Academic view.

export type AcademicExperienceType = 'Researcher';

export interface AcademicExperienceLink {
  label: string;
  url: string;
  type?: 'GitHub' | 'Website' | 'LinkTree' | 'Award' | 'External' | string;
}

export interface AcademicSubrole {
  role: string;
  dates?: string;
  description?: string;
  skills?: string[];
  contributors?: string[];
  links?: AcademicExperienceLink[];
}

export interface AcademicExperience {
  title: string;
  role: string;
  dates: string;
  location: string;
  type: AcademicExperienceType;
  description: string;
  skills: string[];
  languages?: string[];
  logo?: string;
  subroles?: AcademicSubrole[];
  links?: AcademicExperienceLink[];
  contributors?: string[];
}

export const academicExperiences: AcademicExperience[] = [
  {
    title: 'Samaggi Samagom',
    role: '125th Executive Committee',
    dates: 'Aug 2022 - Present',
    location: 'Remote, UK',
    type: 'Researcher',
    description: 'Thai student association in the UK; roles across information systems, tooling, and community support.',
    skills: ['SAM Compute', 'Cloud Engineering', 'API Development'],
    languages: ['AWS', 'React', 'Python'],
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQEnTdiqjmoy2Q/company-logo_200_200/B56ZYPStEjHQAI-/0/1744013284616/samaggi_samagom_logo?e=2147483647&v=beta&t=lhdOV0RiPzPBxLll2Pme17qpbZjVeT1z9eo81wRhaTU',
    subroles: [
      {
        role: 'SS125 Chief Information Officer',
        dates: 'Aug 2025 - Present',
        description: 'Responsible for overseeing information systems and data infrastructure.',
        skills: [],
        contributors: ['Book', 'Cartoon', 'Charlie', 'Draf', 'Jade', 'Jaslym', 'Parn', 'Phil', 'Punn', 'Tham'],
      },
      {
        role: 'SS123 SACC Events Team',
        dates: 'Jan 2023 - Feb 2023',
        description: 'Placeholder',
        skills: [],
        contributors: ['Asia', 'Care', 'Tam'],
      },
      {
        role: 'SS123 Software Developer',
        dates: 'Aug 2022 - Sep 2023',
        description: 'Placeholder',
        skills: [],
        contributors: ['Book', 'Boom', 'Jom', 'Might', 'Tam', 'Timtim', 'Viv'],
      },
    ],
    links: [
      { label: 'GitHub', type: 'GitHub', url: 'https://github.com/Samaggi-Samagom/' },
      { label: 'Postix', type: 'External', url: 'https://tickets.samaggisamagom.com/' },
      { label: 'Website', type: 'Website', url: 'https://samaggisamagom.com/' },
    ],
  },
  {
    title: 'United Kingdom Singapore Students Association',
    role: '27th Executive Committee',
    dates: 'March 2025 - Present',
    location: 'Remote, UK',
    type: 'Researcher',
    description: 'Placeholder',
    skills: ['CRM', 'CMS Administration', 'Web Infrastructure'],
    languages: ['Wix', 'Firebase', 'JavaScript'],
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQF2MgYLpb3WzA/company-logo_200_200/company-logo_200_200/0/1631314042684?e=2147483647&v=beta&t=bCjRLHMizG7JdJGfruT2lsE6leT6jMuLQM45NTWfcnw',
    subroles: [
      {
        role: 'Director of Technology',
        dates: 'Aug 2025 - Present',
        description: 'Placeholder',
        skills: [],
        contributors: ['Jaslyn Leong'],
        links: [],
      },
      {
        role: 'Technology Associate',
        dates: 'Mar 2025 - Aug 2025',
        description: 'Placeholder',
        skills: [],
        contributors: [],
        links: [],
      },
    ],
    links: [
      {
        label: 'Website',
        type: 'Website',
        url: 'https://www.theukssc.co.uk/',
      },
    ],
    contributors: [
      'Bryan Wee',
      'Mirza Latiff',
      'Hui Ling Tay',
      'Teng Shin Yeo',
      'Timothy Low',
    ],
  },
  {
    title: 'London Finance and Business Union',
    role: 'Quantitative Engineer',
    dates: 'Oct 2025 - Present',
    location: 'London, UK',
    type: 'Researcher',
    description: 'Placeholder',
    skills: ['Data Pipelines', 'Market data Ingestion', 'Fullstack Development'],
    languages: ['Supabase', 'Apache', 'Python'],
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFEZG5BwmfKwA/company-logo_200_200/company-logo_200_200/0/1725562588537?e=2147483647&v=beta&t=s-E7GfO8qPXOMj0iYHbUsy2FuHVgFvRe5fyEtR5FOnU',
    subroles: [],
    links: [
      {
        label: 'LinkTree',
        type: 'LinkTree',
        url: 'https://linktr.ee/london.fbu',
      },
      {
        label: 'Website',
        type: 'Website',
        url: 'https://www.fbulondon.co.uk/',
      },
      {
        label: 'GitHub',
        type: 'GitHub',
        url: 'https://github.com/ein1le/fbu-cms',
      },
    ],
    contributors: [],
  },
];
