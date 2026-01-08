// Academic experiences data for the Experiences > Academic view.

export type AcademicExperienceType = 'Researcher';

export interface AcademicExperienceLink {
  label: string;
  url: string;
  type?: 'GitHub' | 'Website' | 'LinkTree' | 'Award' | 'External' | 'Youtube' | string;
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
  id: number;
  title: string;
  role: string;
  organisation?: string;
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
    id: 9,
    title: 'Chief Information Officer',
    role: '12th Executive Committee',
    organisation: 'Samaggi Samagom',
    dates: 'Aug 2022 - Present',
    location: 'Remote, UK',
    type: 'Researcher',
    description: 'Leading the technology division of Samaggi Samagom, the largest Thai student association in the UK, with over 6,000 members. Overseeing information systems and digital infrastructure. Engineered and extended a cloud-native AWS SAM stack using Lambda, DynamoDB, and Amplify, building systems such as a completely custom event management platform (PosTix) and a secure staff portal (Samaggi SSO), and currently leading initiatives to improve cross-department analytics.',
    skills: ['SAM Compute', 'Cloud Engineering', 'API Development'],
    languages: ['AWS', 'React', 'Python'],
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQEnTdiqjmoy2Q/company-logo_200_200/B56ZYPStEjHQAI-/0/1744013284616/samaggi_samagom_logo?e=2147483647&v=beta&t=lhdOV0RiPzPBxLll2Pme17qpbZjVeT1z9eo81wRhaTU',
    subroles: [
      {
        role: 'SS125 Chief Information Officer',
        dates: 'Aug 2025 - Present',
        description: '',
        skills: [],
        contributors: ['Book', 'Cartoon', 'Charlie', 'Draf', 'Jade', 'Jaslym', 'Parn', 'Phil', 'Punn', 'Tham'],
      },
      {
        role: 'SS123 SACC Events Team',
        dates: 'Jan 2023 - Feb 2023',
        description: '',
        skills: [],
        contributors: ['Asia', 'Care', 'Tam'],
      },
      {
        role: 'SS123 Software Developer',
        dates: 'Aug 2022 - Sep 2023',
        description: '',
        skills: [],
        contributors: ['Book', 'Boom', 'Jom', 'Might', 'Tam', 'Timtim', 'Viv'],
      },
    ],
    links: [
      { label: 'GitHub', type: 'GitHub', url: 'https://github.com/Samaggi-Samagom/' },
      { label: 'Postix', type: 'External', url: 'https://tickets.samaggisamagom.com/' },
      { label: 'Samaggi Samagom', type: 'Website', url: 'https://samaggisamagom.com/' },
    ],
  },
  {
    id: 11,
    title: 'Director of Technology',
    role: '27th Executive Committee',
    organisation: 'United Kingdom Singapore Students Association (UKSSC)',
    dates: 'March 2025 - Present',
    location: 'Remote, UK',
    type: 'Researcher',
    description: "Serving as Director of Technology for the United Kingdom Singaporean Students' Council, overseeing all digital infrastructure for the largest Singaporean student body in the UK. Extended the existing system with custom authorization logic, adding OAuth 2.0 SSO, persistent sessions, and role-based access control enforced at the middleware and endpoint level within the existing Wix-based CMS.",
    skills: ['CRM', 'CMS Administration', 'Web Infrastructure'],
    languages: ['Wix', 'Firebase', 'JavaScript'],
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQF2MgYLpb3WzA/company-logo_200_200/company-logo_200_200/0/1631314042684?e=2147483647&v=beta&t=bCjRLHMizG7JdJGfruT2lsE6leT6jMuLQM45NTWfcnw',
    subroles: [
      {
        role: 'Director of Technology',
        dates: 'Aug 2025 - Present',
        description: '',
        skills: [],
        contributors: ['Jaslyn Leong'],
        links: [],
      },   
      {
        role: 'Technology Associate',
        dates: 'Mar 2025 - Aug 2025',
        description: '',
        skills: [],
        contributors: [],
        links: [],
      },
    ],
    links: [
      {
        label: 'UKSSC',
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
    id: 12,
    title: 'Quantitative Engineer',
    role: '25/26 Executive Committee',
    organisation: 'London Finance and Business Union',
    dates: 'Oct 2025 - Present',
    location: 'London, UK',
    type: 'Researcher',
    description: "Quantitative Engineer for the UK's largest student finance society, supporting over 12,000 students. Built a backend system to stream real-time market data, enabling internal quantitative analysts to simulate internal research and trading workflows for the society's investment portfolio. Contributed to the architecture and implementation of the society's SERN stack-based website.",
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
        label: 'FBU London',
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
  {
    id: 8,
    title: 'Internship Projects',
    role: "",
    organisation: 'Headstart Global',
    dates: 'Feb 2025 - Sep 2025',
    location: 'Remote, UK',
    type: 'Researcher',
    description: 'Various internship projects at Headstart Global, working in teams of 3-4 to support startup on various initiatives over 3 months.',
    skills: ['SaaS', 'Agentic AI Engineering', 'Applied ML'],
    languages: ['Python', 'Lovable', 'LangChain'],
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQGsg7aBLVbJiQ/company-logo_200_200/company-logo_200_200/0/1713176563469?e=2147483647&v=beta&t=FKNfqzbBHs6c43bfjTq0lAiJM83dkyuBgEjlgl0kLxA',
    links: [
      {
        label: 'Headstart Global',
        type: 'Website',
        url: 'https://www.headstartglobal.io/',
      },
    ],
    contributors: [],
    subroles: [
      {
        role: 'Kith.ai Associate',
        dates: 'Jul 2025 - Sep 2025',
        description: 'Placeholder',
        links: [
          {
            label: 'Kith.ai',
            type: 'Website',
            url: 'https://kith.build/',
          },
        ],
        contributors: [
          'Dhanashree Bhalekar',
          'Thien Nguyen',
          'Pavani Batra',
          'Ben Hillier',
          'Alex Bickley',
        ],
      },
      {
        role: 'CarbonTrac Project Lead',
        dates: 'Feb 2025 - May 2025',
        description: 'Placeholder',
        links: [
          {
            label: 'CarbonTrac',
            type: 'Website',
            url: 'https://carbontrac.io/',
          },
        ],
        contributors: ['Abhinaya', 'Seb', 'Shivangi', 'Yasmine Abdu'],
      },
    ],
  },
  {
    id: 7,
    title: 'Risk Analyst',
    role: 'TMT Division',
    organisation: 'Bristol Investment Fund',
    dates: 'Jan 2025 - Jun 2025',
    location: 'Bristol, UK',
    type: 'Researcher',
    description: 'Conducted quantitative portfolio and risk analysis for the Bristol Investment Fund, using Monte Carlo simulations and factor models to evaluate portfolio sensitivity and downside risk. Complemented this work with analytical tooling to suppoort the fund at the Barings 2025 Stock Pitch Competition, analysing a TMT long position through a Streamlit-based analytics dashboard.',
    skills: ['Portfolio Analysis', 'Dashboarding', 'Quantitative Risk Modelling'],
    languages: ['Python', 'Bloomberg', 'Streamlit'],
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQH9W297hMYRXg/company-logo_200_200/company-logo_200_200/0/1630645166978/bristol_investment_fund_logo?e=2147483647&v=beta&t=jqG3yz6IOUVDIIBa8xewC3mrX9yXcCUjgpGCAs9UfHY',
    links: [
      {
        label: 'GitHub',
        type: 'GitHub',
        url: 'https://github.com/ein1le/bif_TMT',
      },
      {
        label: 'the BIF',
        type: 'Website',
        url: 'https://www.the-bif.co.uk/',
      }
    ],
    contributors: [],
    subroles: [],
  },
  {
    id: 6,
    title: 'Quantitative Analyst',
    role: 'Derivatives Division',
    organisation: 'Bristol Trading Society',
    dates: 'Oct 2024 - May 2025',
    location: 'Bristol, UK',
    type: 'Researcher',
    description: 'Placeholder',
    skills: ['Algorithmic Trading', 'Derivatives Pricing', 'HFT Infrastructure'],
    languages: ['Python', 'QuantConnect', 'C++'],
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEOrX67xU_NXQ/company-logo_200_200/company-logo_200_200/0/1666624446021?e=2147483647&v=beta&t=B2S7qgJKTA6-xf7kObL1N3uzT96WLQyTFgR4CBDjaUk',
    links: [
      {
        label: 'GitHub',
        type: 'GitHub',
        url: 'https://github.com/ein1le/bts_algo',
      },
      {
        label : "LinkTree",
        type: 'LinkTree',
        url: "https://linktr.ee/bristoltradingsociety"
      }
    ],
    contributors: [],
    subroles: [],
  },
  {
    id: 4,
    title: 'Project Advisor',
    role: '24/25 Data Science Cycles',
    organisation: '180 Degrees Consulting',
    dates: 'Sep 2024 - May 2025',
    location: 'Bristol, UK',
    type: 'Researcher',
    description: 'Placeholder',
    skills: ['Data Visualisation', 'Database Engineering', 'Time Series Analysis'],
    languages: ['VBA', 'R', 'Tableau'],
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFhdigFNPnE_Q/company-logo_200_200/company-logo_200_200/0/1689965358745?e=2147483647&v=beta&t=7SjXC89btQQf_mlZS3FGe-jQ_FqL3oRcPDGDdiqqhvc',
    links: [
      {
        label: '180DC Bristol',
        type: 'Website',
        url: 'https://www.180dc.org/branches/bristol/',
      },
    ],
    contributors: ['Maddie Man', 'Walter Kwong'],
    subroles: [
      {
        role: 'Pledgeball Analytics Project Advisor',
        dates: 'Jan 2025 - May 2025',
        description: 'Placeholder',
        skills: [],
        contributors: ['Freya Morris', 'Anjani Upadhyay', 'Bo Cresser', 'Srosh Akbari', 'Eirshad Fahim'],
        links: [],
      },
      {
        role: 'Western Housing Action Project Advisor',
        dates: 'Jan 2025 - May 2025',
        description: 'Placeholder',
        skills: [],
        contributors: ['Janhavi Sanap', 'Lim Jing', 'Araya Wonklaw', 'Izzac Ip'],
        links: [],
      },
      {
        role: 'RENS Charity Consultant',
        dates: 'Sep 2024 - Jan 2025',
        description: 'Placeholder',
        skills: [],
        contributors: ['Jing Lim', 'Tan Wen Hans', 'Mannan Srivastava'],
        links: [],
      },
    ],
  },
  {
    id: 10,
    title: "BRAIN® Researcher",
    role: '',
    organisation: 'WorldQuant',
    dates: 'November 2024 - Present',
    location: 'Remote, USA',
    type: 'Researcher',
    description: "Working as a BRAIN® Researcher at WorldQuant, contributing to the development and backtesting of quantitative trading strategies. Conducting quantitative research short-horizon equity signals with emphasis on price dynamics, volume-based features, and lagged cross-sectional effects. Engineered features capturing microstructure behaviour and evaluated alpha stability using statistical diagnostics and decay analysis.",
    skills: ['Quantitative Research', 'Signal Backtesting', 'Hypothesis Engineering'],
    languages: ['Alpha Expression', 'WebSim'],
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQHlu_IiYRNYHQ/company-logo_100_100/company-logo_100_100/0/1651252049780/worldquant_logo?e=2147483647&v=beta&t=58woaXvHFRRnldOXVDoPhdwvWmNdsujKF6-UkICIbL4',
    links: [
      {
        label: 'BRAIN® Platform',
        type: 'Website',
        url: 'https://platform.worldquantbrain.com/',
      },
    ],
    contributors: [],
    subroles: [],
  },
  {
    id: 1,
    title: 'Junior Design Engineer',
    role: 'MaTRiX Racing Team',
    organisation: 'F1 in Schools',
    dates: 'Sep 2019 - Jun 2021',
    location: 'Bangkok, Thailand',
    type: 'Researcher',
    description: 'Placeholder (Abu Dhabi Finals 2019)',
    skills: ['CFD Simulation', 'Parametric Iteration', 'CAD/CAM'],
    languages: ['Autodesk Fusion360', 'Star CCM+', 'Python'],
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQFWSixZ1i2flA/company-logo_200_200/company-logo_200_200/0/1673277040717/formula_one_management_ltd_logo?e=2147483647&v=beta&t=VuacsMqz-rqpzb5vzejIsvLHYm0K75Ihn35NGdPCMMo',
    links: [
      {
        label: 'Sustainability Award',
        type: 'Award',
        url: 'https://www.harrowschool.ac.th/media/news/matrix-racing-team-awarded-sustainability-award-at-f1-in-schools-world-championships-in-abu-dhabi#:~:text=Matrix%20Racing%20consists%20of%206,school%20projects%20at%20Harrow%20Bangkok.',
      },
    ],
    contributors: ['Pike', 'Jeffy', 'Brew', 'Oak', 'Ken', 'Poom'],
    subroles: [],
  },
  {
    id: 4,
    title: 'Design Engineer',
    role: 'Steering Team - Bristol Racing',
    organisation: 'Greenpower Formula 24+',
    dates: 'Oct 2023 - Jun 2024',
    location: 'Bristol, UK',
    type: 'Researcher',
    description: 'Placeholder (BR02, BR03, Chivenor Heat, Castle Combe Heat)',
    skills: ['CAD/CAM', 'Finite Element Analysis', 'Alloy Manufacturing'],
    languages: ['Abaqus CAE', 'Autodesk Fusion360', 'DIGIMU'],
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQEs60nGxNuVsA/company-logo_200_200/company-logo_200_200/0/1738232876745/bristol_racing_logo?e=2147483647&v=beta&t=dg589312YEX9ZPF4VFuBA9MA7b5asC72xeeGunWtKoU',
    links: [
      {
        label: 'Instagram',
        type: 'Instagram',
        url: 'https://www.instagram.com/bristolracing/?hl=en',
      },
      {
        label: 'Greenpower F24+',
        type: 'Website',
        url: 'https://www.greenpower.co.uk/greenpower-categories',
      },
    ],
    contributors: [
      'Abarbek Musaev',
      'Leon Buck',
      'Prashant Ujoodia',
      'Haydn Ching',
      'Francisco Rebelo',
      'Joe Sinclair',
    ],
    subroles: [],
  },
  {
    id: 3,
    title: 'Structures Lead Engineer',
    role: 'Bristol University Drone Society (BUDS)',
    organisation: 'IMechE Unmanned Aerial Systems  Challenge',
    dates: 'Sep 2023 - Jun 2024',
    location: 'Bristol, UK',
    type: 'Researcher',
    description: 'Placeholder',
    skills: ['Material Optimisation', 'CAD/CAM', 'Structural Analysis'],
    languages: ['Ansys Edupack', 'MATLAB', 'Autodesk Fusion360'],
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQFqV_uv2rl2zQ/company-logo_200_200/company-logo_200_200/0/1692831669203/bristol_university_drone_society_logo?e=2147483647&v=beta&t=Ed_60adVQhDkO93foL-cev4PFe7aMQgljg-0oThPOVE',
    links: [
      {
        label: 'Instagram',
        type: 'Instagram',
        url: 'https://www.instagram.com/uobdronesoc/',
      },
      {
        label: 'IMechE UAS2024',
        type: 'Website',
        url: 'https://www.imeche.org/events/challenges/uas-challenge',
      },
    ],
    contributors: [
      'Abishek Aditya',
      'Ivan Castrue',
      'Anjli Majitha',
      'Romauld Ruban',
      'Adhvik Chandran',
      'Kesavan Murare',
      'Neha Thayaparan',
    ],
    subroles: [],
  },
  {
    id: 2,
    title: 'Machine Learning Engineer',
    role: 'Biolytica',
    organisation: 'Learn2Innovate Programme 2023',
    dates: 'Dec 2023 - Mar 2024',
    location: 'Bristol, UK',
    type: 'Researcher',
    description: 'Placeholder',
    skills: ['GAN Networks', 'Applied Computer Vision', 'Transfer Learning'],
    languages: ['Python','TensorFlow', 'Nvidia'],
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGWRXeA_7BESA/company-logo_200_200/company-logo_200_200/0/1648673801621?e=2147483647&v=beta&t=VbEo0nT10zSG9UD_RWizCkBFazM-XmJZhgaUNyTyXyk',
    links: [
      {
        label: 'Instagram',
        type: 'Instagram',
        url: 'https://www.instagram.com/learn2innovateprogramme/',
      },
    ],
    contributors: [
      'Dr Hans Johnson',
      'Maya Kumaran',
      'Rajib Ahmed',
      'Sana Poormohammadreza',
      'Shradda Sriraman',
      'Stephen Wang',
    ],
    subroles: [],
  },
  {
    id: 2,
    title: 'Data Analyst',
    role: '2023 Committee',
    organisation: 'Thai Society Innovation Network (TSIN)',
    dates: 'Apr 2023 - Nov 2023',
    location: 'Remote, UK',
    type: 'Researcher',
    description: 'Placeholder',
    skills: ['Data Analytics', 'Market Research', 'Data Visualisation'],
    languages: ['SQL', 'R', 'Power BI'],
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQHcjq6RmOfH7g/company-logo_200_200/B4EZfUpo5iGcAI-/0/1751619375296/thai_society_innovation_network_logo?e=2147483647&v=beta&t=CV5B1H40OjtVa53C--rabkJTL17HsAfEtwcFfPpxqf8',
    links: [
      {
        label: 'TSIN Portal',
        type: 'Website',
        url: 'https://tsin-portal.lovable.app',
      },
    ],
    contributors: [],
    subroles: [],
  },
  {
    id: 5,
    title: 'Vice Lead, Systems Engineer',
    role: 'BristolSEDS Helios',
    organisation: 'UKSEDS Olympus Rover Trials',
    dates: 'Oct 2023 - Jul 2024',
    location: 'Bristol, UK',
    type: 'Researcher',
    description: 'Placeholder',
    skills: ['Systems Engineering', 'Microcontroller Programming', 'Vibration Modelling'],
    languages: ['C++', 'Abaqus CAE', 'MATLAB'],
    logo: 'https://bristolseds.co.uk/wp-content/uploads/2023/09/logo-6.png',
    links: [
      {
        label: 'UKSEDS ORT2024',
        type: 'Website',
        url: 'https://ukseds.org/ignition/competitions/olympus-rover-trials/',
      },
      {
        label: 'BristolSEDS',
        type: 'Website',
        url: 'https://bristolseds.co.uk/ukseds-olympus-rover-trials/',
      },
    ],
    contributors: [
      'Enjiely Durias',
      'Giorgos Zevedeos',
      'Pablo Blanco',
      'Jai Ratadia',
      'Haydn McGrath',
      'Julienne Goh',
      'Rithika Mohan',
    ],
    subroles: [],
  },
];
