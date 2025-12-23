// Extracurricular experiences data for an additional Experiences view.
import mssaLogo from '../assets/extra/MSSA.jpg?url';
import mechsocLogo from '../assets/extra/mechsoc.jpg?url';
import msnightLogo from '../assets/extra/msnight.jpg?url';
import bristolSULogo from '../assets/extra/bristolSU.jpg?url';
import thaisocLogo from '../assets/extra/thaisoc.jpg?url';

export interface ExtracurrExperienceLink {
  label: string;
  url: string;
  type?: 'GitHub' | 'Website' | 'LinkTree' | 'Award' | 'External' | string;
}

export interface ExtracurrSubrole {
  role: string;
  dates?: string;
  description?: string;
  links?: ExtracurrExperienceLink[];
  contributors?: string[];
}

export interface ExtracurrExperience {
  title: string;
  role: string;
  organisation?: string;
  dates: string;
  location: string;
  description: string;
  skills: string[];
  languages?: string[];
  logo?: string;
  links?: ExtracurrExperienceLink[];
  contributors?: string[];
  subroles?: ExtracurrSubrole[];
}

export const extracurrExperiences: ExtracurrExperience[] = [
  {
    title: 'General Secretary',
    role: '24/25 Executive Committee',
    organisation: 'Malaysian and Singaporean Students Association (MSSA)',
    dates: 'Mar 2024 - May 2025',
    location: 'Bristol, UK',
    description: 'Placeholder',
    skills: [],
    languages: [],
    logo: mssaLogo,
    links: [],
    contributors: [
      'Yasmin de Silva',
      'Amanda Yong',
      'Alicia Low',
      'Brahmjoth Singh',
      'Elijah Lim',
      'Magdalene Khor',
      'Leanne Huang',
      'Ethan Lock',
      'Christine Choong',
      'Natalie Ong',
    ],
    subroles: [],
  },
  {
    title: 'Media Officer',
    role: '24/25 Executive Committee',
    organisation: 'Bristol Mechanical Engineering Society (MechSoc)',
    dates: 'Mar 2024 - May 2025',
    location: 'Bristol, UK',
    description: 'Placeholder',
    skills: [],
    languages: [],
    logo: mechsocLogo,
    links: [],
    contributors: [
      'Tanya Patel',
      'Anna Zhuralova',
      'Boris Kovacheski',
      'Srosh Akbari',
      'Sayuni Jayakodi',
      'Liv Brannan',
      'Nely Georgiou',
      'Jad Raffoul',
      'Tristan Simescu',
      'Louis Townsend',
    ],
    subroles: [
      {
        role: 'Media Officer',
        dates: 'Mar 2024 - May 2025',
        description: 'Placeholder',
        links: [],
        contributors: [],
      },
      {
        role: 'Senior Events Representative',
        dates: 'Mar 2024 - May 2025',
        description: 'Placeholder',
        links: [],
        contributors: [],
      },
    ],
  },
  {
    title: 'Director',
    role: 'MSNight Core Committee',
    organisation: 'Bristol Malaysian and Singaporean Night',
    dates: 'Feb 2023 - May 2025',
    location: 'Bristol, UK',
    description: 'Placeholder',
    skills: [],
    languages: [],
    logo: msnightLogo,
    links: [],
    contributors: [],
    subroles: [
      {
        role: 'Admin Head',
        dates: 'Aug 2024 - May 2025',
        description: 'Placeholder',
        links: [],
        contributors: [
          'Hazeq Harrison',
          'Nik Ariff Johaan',
          'Zarihatul Husna',
        ],
      },
      {
        role: 'Director',
        dates: 'Jul 2023 - Apr 2024',
        description: 'Placeholder',
        links: [],
        contributors: [
          'Chien Wen Siow',
          'Mindy Liew',
          'Zhen Wei Leong',
          'Hans Wen Tan',
          'Pattaranit Krongboonying',
          'Jaslyn Leong',
          'Michelle Yeo',
          'King Ray Ng',
        ],
      },
      {
        role: 'Assistant Director',
        dates: 'Jan 2023 - Apr 2023',
        description: 'Placeholder',
        links: [],
        contributors: ['Olivia Ng', 'Lorraine Lam', 'Mindy Liew'],
      },
    ],
  },
  {
    title: 'Representative Roles',
    role: 'University of Bristol Students\' Union',
    organisation: 'University of Bristol',
    dates: 'Feb 2024 - May 2025',
    location: 'Bristol, UK',
    description: 'Placeholder',
    skills: [],
    languages: [],
    logo: bristolSULogo,
    links: [],
    contributors: [],
    subroles: [
      {
        role: 'BAME Network Representative',
        dates: 'Sep 2024 - Mar 2025',
        description: 'Placeholder (Students Union)',
        links: [],
        contributors: [
          'Bakhtawar Javed',
          'Linlu Ye',
          'Latie Poyner',
          'Mia Stevens',
        ],
      },
      {
        role: 'Faculty of Engineering Y4 Course Representative',
        dates: 'Sep 2024 - Mar 2025',
        description: 'Placeholder (Students Union)',
        links: [],
        contributors: ['Nely Georgiou'],
      },
      {
        role: 'Faculty of Engineering Y3 Course Representative',
        dates: 'Sep 2023 - Mar 2024',
        description: 'Placeholder (Students Union)',
        links: [],
        contributors: ['Nely Georgiou'],
      },
    ],
  },
  {
    title: 'Public Relations Officer',
    role: '22/23 Executive Committee',
    organisation: 'Bristol Thai Society',
    dates: 'Dec 2022 - Mar 2023',
    location: 'Bristol, UK',
    description: 'Placeholder',
    skills: [],
    languages: [],
    logo: thaisocLogo,
    links: [],
    contributors: [
      'Pim Kanthamanon',
      'Phukhao Poolsawat',
      'Pat Temchareon',
      'Champ Phatpanichot',
      'Pearl Unhavaithaya',
      'Wen Palarit',
    ],
    subroles: [],
  },
];
