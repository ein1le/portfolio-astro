// Academic experiences data for the Experiences > Academic view.

import llmNebiusBadge from '../icons/llm-nebius.png?url';

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
    id: 20,
    title: 'Head of Cloud and DevOps',
    role: 'Technology Arm',
    organisation: "Queen's Tower Exchange",
    dates: 'Jul 2026 - Present',
    location: 'London, UK',
    type: 'Researcher',
    description: "Developer for the Technology team of Queen's Tower Exchange, a student-run simulated financial exchange supporting over 250 students and 323 tradable securities. Overseeing the design and development of its trading infrastructure on the cloud and deployment via IaC. Building a cloud-native AWS architecture using ECS and Fargate, with services for order matching, simulated market data, and execution workflows, while coordinating with a seven-person engineering team to build an exchange.",
    skills: ['Distributed Cloud Systems', 'Data Pipelines', 'Exchange Infrastructure'],
    languages: ['AWS', 'Python', 'Terraform'],
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQHuR8-BLVlitQ/company-logo_200_200/B4EZ5aHogsKYAI-/0/1779628411193?e=1787788800&v=beta&t=lDHUE4TW4mbVHo8vOABu1Q3lsygFecivjGt7e60xvQI',
    links: [
      {
        label: 'QTE Imperial',
        url: 'https://queenstowerexchange.com',
        type: 'Website',
      },
      {
        label: 'GitHub',
        url: 'https://github.com/josh-g-s/qte-platform',
        type: 'GitHub',
      },
    ],
    contributors: [
      'Jack Fan',
      'Josh Ghosh-Stephenson',
      'Aaron Zhang',
      'Aila Danish',
      'Akshath',
      'Illia',
      'Jidneya',
      'Utkarsh Jetly',
    ],
    subroles: [],
  },
  {
    id: 19,
    title: 'AI Performance Engineering Fellow',
    role: '',
    organisation: 'Nebius Academy',
    dates: 'Mar 2026 - Jul 2026',
    location: 'London, UK',
    type: 'Researcher',
    description: '',
    skills: ['LLM Architectures', 'Agentic AI', 'Performance Engineering'],
    languages: ['n8n', 'MCP', 'LangChain'],
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQGq1CsuIGw9_w/company-logo_200_200/B4EZ9.OrKmIcAE-/0/1784529204073/nebius_academy_logo?e=1787788800&v=beta&t=6myTgx3z8ScsqqmMtTdCze_QGXs3pC8ZVF6Bi9Nf1r0',
    links: [
      {
        label: 'LLM Architectures Badge',
        url: llmNebiusBadge,
        type: 'Award',
      },
    ],
    contributors: [],
    subroles: [],
  },
  {
    id: 19,
    title: 'Trainee',
    role: 'Quantitative Analyst',
    organisation: 'D+A Stategies',
    dates: 'Mar 2026 - Present',
    location: 'Remote, Italy',
    type: 'Researcher',
    description: '',
    skills: ['Algorithmic Trading', 'Quantitatiive Research', 'Financial Markets'],
    languages: [],
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFfBVrQzJAIKg/company-logo_200_200/B4EZUbCpHBHgAI-/0/1739915433414/d_a_strategies_gbr_logo?e=1787788800&v=beta&t=X5iyIQYk0-ARHW-SO7dWfLh0mzmiLSZFLdZ-Yqv0J80',
    links: [
      {
        label : "D+A Strategies",
        type: 'Website',
        url: "http://da-strategies.com/"
      }
    ],
    contributors: [],
    subroles: [],
  },
  {
    id: 9,
    title: 'Chief Information Officer',
    role: '125th Executive Committee',
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
        contributors: ['Book', 'Cartoon', 'Charlie', 'Draf', 'Jade', 'Jaslyn', 'Parn', 'Phil', 'Punn', 'Tham'],
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
      { label: 'CFAS', type: 'Website', url: 'https://sacc.samaggisamagom.com' },
      { label: 'Samaggi Samagom', type: 'Website', url: 'https://samaggisamagom.com/' },
    ],
  },
  {
    id: 11,
    title: 'Director of Technology',
    role: '27th Executive Committee',
    organisation: 'United Kingdom Singapore Students Association ',
    dates: 'March 2025 - Present',
    location: 'Remote, UK',
    type: 'Researcher',
    description: "Serving as Director of Technology for the United Kingdom Singaporean Students' Council, overseeing all digital infrastructure for the largest Singaporean student body in the UK. Extended the existing system with custom authorization logic, adding OAuth 2.0 SSO, persistent sessions, and RBAC enforced at the middleware and endpoint level within the existing Wix CMS.",
    skills: ['CRM', 'CMS Administration', 'Web Infrastructure'],
    languages: ['Wix', 'Firebase', 'JavaScript'],
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQF2MgYLpb3WzA/company-logo_200_200/company-logo_200_200/0/1631314042684?e=2147483647&v=beta&t=bCjRLHMizG7JdJGfruT2lsE6leT6jMuLQM45NTWfcnw',
    subroles: [
      {
        role: 'UKSSC28th Advisory Board',
        dates: 'Apr 2025 - Present',
        description: '',
        skills: [],
        contributors: [],
        links: [],
      },   
      {
        role: 'Director of Technology',
        dates: 'Aug 2025 - Apr 2026',
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
        description: 'Supported model routing and tool registry engineering of LangChain-based backend AI agents to automate database schema, RLS, and API endpoint generation for Lovable front ends. Performed user experience and integration testing and presented findings biweekly.',
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
        description: 'Led a team to support CarbonTrac in their initiative to turn customer engagements into climate impact, espeically in the supermarket sector. This included wireframing prototypes for Nectar app integration, and a building a custom bespoke CO2 machine learning pipeline to predict supply chain esmissions and estimate product emissions for  internal cataloguing.',
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
    title: 'Quantitative Developer',
    role: 'Derivatives Division',
    organisation: 'Bristol Trading Society',
    dates: 'Oct 2024 - May 2025',
    location: 'Bristol, UK',
    type: 'Researcher',
    description: 'Derivatives Division as a quantitative researcher and developer, feature engineered alternative data NLP pipelines for implied volatility modelling. Integrated engineered features into trained deep learning MLP-based implied volatility surface parameters. Fed outputs into Black-Scholes pricing models, validated signal robustness using walk-forward backtesting and rolling out-of-sample evaluation. Deployed them within a paper algorithmic trading platform backed by a C++ execution layer.',
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
    id: 3,
    title: 'Head of Data Science Operations',
    role: '26/27 Executive Committee',
    organisation: '180 Degrees Consulting',
    dates: 'Sep 2024 - Present',
    location: 'Bristol, UK',
    type: 'Researcher',
    description: '',
    skills: ['Business Intelligence', 'Database Engineering', 'Agile Project Management'],
    languages: ['VBA', 'R', 'Tableau'],
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFhdigFNPnE_Q/company-logo_200_200/company-logo_200_200/0/1689965358745?e=2147483647&v=beta&t=7SjXC89btQQf_mlZS3FGe-jQ_FqL3oRcPDGDdiqqhvc',
    links: [
      {
        label: '180DC Bristol',
        type: 'Website',
        url: 'https://www.180dc.org/branches/bristol/',
      },
    ],
    subroles: [
      {
        role: 'Head of Data Science Operations',
        dates: 'April 2026 - Present',
        description: 'Led the Data Science function, coordinating delivery across 16 consulting projects and developing data-science solutions for nonprofit organisations. Oversaw project scoping, consultant allocation, and recruitment for 60+ consultants, while supporting the data science function in improving recruitment pipelines.',
        skills: [],
        contributors: ['Jaslyn Leong', 'Radhika Mitra', 'Laura Ocana', 'Stella Chan'],
        links: [],
      },
      {
        role: '26/27 Summer - Project Advisor',
        description: 'Assisted Bristol Together, developed an impact-demographics survey alongside an Apps Script-based database registrar to track beneficiary outcomes. This created a structured way to measure the organisation’s impact in helping 100+ released offenders secure stable housing.',
        skills: [],
        contributors: ['Viktor Lindholm', 'Charlotte Chung', 'Claire Ahn', 'Musa Khumulov', 'Rory Allen'],
        links: [
          {
            label: 'Looker Studio',
            url: 'https://datastudio.google.com/u/0/reporting/d4a1714b-7772-4454-9d44-80de8925e184/page/0Hu4F',
            type: 'Website',
          },
          {
            label: 'Notion',
            url: 'https://app.notion.com/p/180-Degrees-Consulting-x-Bristol-Togheter-390640a3324280c8ac37c62b4088d661',
            type: 'Website',
          },
          {
            label: 'Client',
            url: 'https://bristoltogether.co.uk',
            type: 'Website',
          },
        ],
      },
      {
        role: '25/26 Spring - Alumni Mentor',
        dates: 'Feb 2026 - Present',
        description: 'Partnered with Scurbmarine and 180 DC Lancaster University on a data science consulting project, modelled shipping and maritime vessel operations valued up to £70,000. The work focused on feature engineering commercial factors to identify practical opportunities for carbon reduction.',
        skills: [],
        contributors: ['Viktor Lindholm', 'Laura Ocana', 'Nathan Fairclough', 'Jasmine', 'Kate'],
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/n473CL0/shippy/blob/main/shippy/tests/test_creation.py',
            type: 'GitHub',
          },
          {
            label: 'Notion',
            url: 'https://app.notion.com/p/Spring-180DC-ScrubMarine-2fde98d3e31e807a87b2d2d357a5a770',
            type: 'Website',
          },
          {
            label: 'Client',
            url: 'https://www.scrubmarine.com',
            type: 'Website',
          },
        ],
      },
      {
        role: '24/25 Spring Cycle - Project Advisor',
        dates: 'Jan 2025 - May 2025',
        description: 'Created a Tableau visualization and presented data exploration findings to Pledgeball, a sports charity focused on tackling climate change through harnessing the influence of football communities. Findings were focused on comprehension and expansion strategies based on historical football club engagement.',
        skills: [],
        contributors: ['Freya Morris', 'Anjani Upadhyay', 'Bo Cresser', 'Srosh Akbari', 'Eirshad Fahim'],
        links: [
          {
            label: 'Dashboard',
            url: 'https://public.tableau.com/app/profile/anjani.upadhyay1452/viz/Deliverable1_17424686442650/PledgeSubmissionsAnalysisDashboard',
            type: 'External',
          },
          {
            label: 'Client',
            url: 'https://pledgeball.org',
            type: 'Website',
          },
        ],
      },
      {
        role: '24/25 Spring Cycle -  Project Advisor',
        dates: 'Jan 2025 - May 2025',
        description: 'Weston Housing Action (WHAT) is a cooperative that provides housing support to communites in Weston. Implemented a VBA-based relational database system to serve as a record-keeping tool in support of their Charity Commission application, with an integrated data entry GUI and public-facing query system.',
        skills: [],
        contributors: ['Janhavi Sanap', 'Lim Jing', 'Araya Wonklaw', 'Izzac Ip'],
        links: [
          {
            label: 'Client',
            url: 'https://www.facebook.com/WestonHousingAcTion/',
            type: 'Website',
          },
        ],
      },
      {
        role: '24/25 Autumn Cycle - Data Science Consultant',
        dates: 'Sep 2024 - Jan 2025',
        description: 'Performed data cleaning and conducted EDA for Racial Equality North Sommerset (RENS) to inform of their community impact. Proposed methodologies for future data collection from clients, in the form of recurrent presentations, and a written documentation. Used ripple mapping and clustering to segment types of cients served.',
        skills: [],
        contributors: ['Jing Lim', 'Tan Wen Hans', 'Mannan Srivastava'],
        links: [
          {
            label: 'Client',
            url: 'https://rens.org.uk',
            type: 'Website',
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: 'Junior Design Engineer',
    role: 'MaTRiX Racing Team',
    organisation: 'F1 in Schools',
    dates: 'Sep 2019 - Jun 2021',
    location: 'Bangkok, Thailand',
    type: 'Researcher',
    description: 'Supported aerodynamic design work as a Junior engineer for MaTrix Racing in the F1 in Schools programme. Contributed to CAD prototyping and preliminary CFD analysis of front wing designs. Tested 3D printed wings for aerodynamic performance. The team advanced to the Grand Final stage in Abu Dhabi 2019, winning the Sustainability Award.',
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
    description: 'Worked as a design engineer on the steering team for the Bristol Racing Team, developing and manufacturing a new steering mechanism for the BR02 and BR03 vehicles. Designed a drag-link steering system on CAD software and applied multiple metal manufacturing processes including electrical discharge machining to produce high fidelity components. Contributed to the design of the system used in the GreenPower24+ Chivenor and Castle Combe heats in 2024.',
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
    description: 'Led structural design for a competition UAV, representing the Bristol University Drone Society, competing in the IMechE UAS challenge in June 2024. Contributed to performing material selection and trade off analysis. Worked on iterating parametrically generated CAD models to optimise airframe geometries and propeller design for performance. Assisted in scripting payload bay controller logic.',
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
    description: "Machine Learning Engineer in the Learn2Innovate  Student Healthcare Programme's 2023 Cohort. Responsible for the technical development of the business proposal, fine-tuning a proof-of-concept MediGAN model using LoRA for brain tumour classification on MRI data.Deployed the model via a Flask service and presented a complete technical demonstration and business proposal to moc stakeholders at the Cardiff Innovation Hub, receiving a funding offer.",
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
    description: 'Analysed social media engagement data for the Thai Society Innovation Network as part of the 2023 committee. Performed data cleaning, exploratory analysis, and visual reporting in Power BI and R to inform content and engagement strategy to increase reach as a growing society.',
    skills: ['Data Analytics', 'Market Research', 'Data Visualisation'],
    languages: ['R', 'Power BI'],
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
    title: 'Vice Lead',
    role: 'BristolSEDS Helios',
    organisation: 'UKSEDS Olympus Rover Trials',
    dates: 'Oct 2023 - Jul 2024',
    location: 'Bristol, UK',
    type: "Researcher",
    description: "Vice Lead and Systems Engineer as part of BristolSEDS' 'Helios' Team, working in a team of 11 to build a wireless autonomous rover for the 2024 UKSED Olympus Rover Trials inter university competition. Led the integration of 3D CAD-designed and manufactured structural components with an Arduino control system. Machined and assembled components, and used FEA vibration and modal analysis to identify excitation resonances for rocket launch survivability.",
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
