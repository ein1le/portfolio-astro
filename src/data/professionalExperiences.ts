// Professional experiences data for the Experiences > Professional view.

import tiktokLogo from '../icons/TikTok.png?url';

export type ExperienceType =
  | 'Contract'
  | 'Full-time'
  | 'Student Role'
  | 'Internship'
  | 'Researcher';

export interface ExperienceLink {
  label: string;
  url: string;
  type?: 'GitHub' | 'Website' | 'LinkTree' | 'Award' | 'External' | 'Youtube' | string;
}

export interface ExperienceSubrole {
  role: string;
  dates?: string;
  description?: string;
  skills?: string[];
  contributors?: string[];
   links?: ExperienceLink[];
}

export interface ProfessionalExperience {
  title: string;
  role: string;
  organisation?: string;
  dates: string;
  location: string;
  type: ExperienceType;
  description: string;
  skills: string[];
  logo?: string;
  subroles?: ExperienceSubrole[];
  contributors?: string[];
  links?: ExperienceLink[];
}

export const professionalExperiences: ProfessionalExperience[] = [
  {
    title: 'TikTok',
    role: 'Data Analyst Intern',
    organisation: 'TikTok LIVE Strategy & Operations',
    dates: 'Jan 2027 - Jun 2027',
    location: 'London, UK',
    type: 'Internship',
    description: '',
    skills: [],
    logo: tiktokLogo,
  },
  {
    title: '180 Degrees Consulting',
    role: 'Global Data and Insights Specialist',
    organisation: 'Global IT & Digital Arm',
    dates: 'Jul 2026 - Present',
    location: 'Remote, UK',
    type: 'Student Role',
    description: '',
    skills: [],
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFhdigFNPnE_Q/company-logo_200_200/company-logo_200_200/0/1689965358745?e=2147483647&v=beta&t=7SjXC89btQQf_mlZS3FGe-jQ_FqL3oRcPDGDdiqqhvc',
  },
  {
    title: 'NexusKCG',
    role: 'ML Platform Engineer',
    organisation: 'Startup',
    dates: 'Jan 2025 - Mar 2026',
    location: 'London, UK',
    type: 'Contract',
    description: '',
    skills: [],
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQEmM65fnC4_ig/company-logo_200_200/B4EZg3rULZGcAU-/0/1753280758903?e=2147483647&v=beta&t=KnI5fxa-dSa-9upPnTteTZGSPa1lJf2YMPjE1_a1yW8',
  },
  {
    title: 'University of Bristol Intelligent Systems Laboratory' ,
    role: 'Graduate Researcher, Bristol ISL',
    organisation: 'AIML and MaVI Group',
    dates: 'Jun 2025 – Dec 2025',
    location: 'Bristol, UK',
    type: 'Researcher',
    description: '',
    skills: [],
    logo: 'https://avatars.githubusercontent.com/u/26741813?s=200&v=4',
  },
  {
    title: 'University of Bristol School of Civil, Aerospace and Design Engineering',
    role: 'Undergraduate Researcher, School of CADE',
    organisation: 'School of Civil, Aerospace, and Design Engineering',
    dates: 'Jan 2025 – Aug 2025',
    location: 'Bristol, UK',
    type: 'Researcher',
    description: '',
    skills: [],
    logo:'https://media.licdn.com/dms/image/v2/D4D0BAQGXfzqLhIzlBw/company-logo_200_200/company-logo_200_200/0/1721832673455?e=2147483647&v=beta&t=O5hrJl4QIdUWusDrZ3tcFsay7W96oc6-qYqodzMb4OU',
  },
  {
    title: 'KKP Financial Group',
    role: 'Data Science and Engineering Intern',
    organisation: 'Customer and Digital Group',
    dates: 'Jul 2024 – Aug 2024',
    location: 'Bangkok, Thailand',
    type: 'Internship',
    description: '',
    skills: [],
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQEbA57hHCJuiQ/company-logo_200_200/company-logo_200_200/0/1723048653982/phatra_asset_management_logo?e=2147483647&v=beta&t=IwfRTau6Rjyy9g-LMJYJLR1eWVu8vHxfyuhT2iaP9os',
  },
  {
    title: 'YSG Group Co.',
    role: 'Audit Intern',
    organisation: 'Retailer',
    dates: 'Jun 2023 – Aug 2023',
    location: 'Bangkok, Thailand',
    type: 'Internship',
    description: '',
    skills: [],
    logo: '',
  },
];
