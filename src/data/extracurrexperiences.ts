// Extracurricular experiences data for an additional Experiences view.
import mssaLogo from '../assets/extra/MSSA.jpg?url';
import mechsocLogo from '../assets/extra/mechsoc.jpg?url';
import msnightLogo from '../assets/extra/msnight.jpg?url';
import bristolSULogo from '../assets/extra/bristolSU.jpg?url';
import thaisocLogo from '../assets/extra/thaisoc.jpg?url';
import mssaGotm from '../assets/extra/MSSA_GOTM.png?url';
import goldaccreditation from '../assets/extra/Gold_Accreditation_Kitemark_2025.png?url';
import courseRepAward from '../assets/extra/CourseRep.png?url';
import harrowLogo from '../assets/education/Harrow.jpg?url';


export interface ExtracurrExperienceLink {
  label: string;
  url: string;
  type?: 'GitHub' | 'Website' | 'LinkTree' | 'Award' | 'External' | 'Instagram' | 'Youtube' | string;
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
    description: 'Provided general administrative support to the committee presidents, including event organisation and member-facing activities such as feedback forms and family scheme. Spearheaded digital transformation, implementing an automated family scheme clustering, newsletter APIs, and secure AGM voting system for future committees.',
    skills: [],
    languages: [],
    logo: mssaLogo,
    links: [
      {
        label: 'LinkTree',
        url: 'https://linktr.ee/BristolMSSA',
        type: 'LinkTree',
      },
      {
      label: 'Group of the Month',
      type: 'Award',
      url: mssaGotm,
      },
      {
      label: 'SU Gold Accreditation',
      type: 'Award',
      url: goldaccreditation,
      },
    ],
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
    description: 'Held two positions within the 24/25 MechSoc committee. Involved in key planning and organisation of events, including the Annual Dinner and Freshers\' Fair as one of the events representatives. Managed social media accounts and tasked with content creation for the society as Media Officer. Upheld communication between other engineering societies.',
    skills: [],
    languages: [],
    logo: mechsocLogo,
    links: [{
      label: 'LinkTree',
      url: 'https://linktr.ee/mechsoc_bristol',
      type: 'LinkTree',
      },
      {
        label: 'MechSoc',
        url: 'https://uobmechsoc.wixsite.com/home',
        type: 'Website',
      },
      {
      label: 'SU Gold Accreditation',
      type: 'Award',
      url: goldaccreditation,
      },
    ],
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
        description: '',
        links: [],
        contributors: [],
      },
      {
        role: 'Senior Events Representative',
        dates: 'Mar 2024 - May 2025',
        description: '',
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
    description: 'Involved throughout three consecutive years of the annual Bristol Malaysian and Singaporean Night (MSNight) theatrical performance. Oversaw the 9 month production process end-to-end, managing a team of over 30 dancers as the creative director. Responsible for coordinating rehearsals, coordinating with other departments and cast to deliver a show to a combined 1000 audience members.',
    skills: [],
    languages: [],
    logo: msnightLogo,
    links: [{
      label: 'Instagram',
      url: 'https://www.instagram.com/bristolmsnight',
      type: 'Instagram',
      }
    ],
    contributors: [],
    subroles: [
      {
        role: 'Choreographer',
        dates: 'Aug 2024 - May 2025',
        description: '',
        links: [{
          label: 'MSNight 2025',
          url: 'https://www.youtube.com/watch?si=DJKeWxRMo5yqQilU&v=NvHxVUN_TMw&feature=youtu.be',
          type: 'Youtube',
          },
          {
            label: 'Gallery',
            url: 'https://drive.google.com/drive/folders/1ufb3r5-jnClTObkbseHbbTqNXzxnWLus',
            type: 'Website',
          },
          {
            label: 'Booklet',
            url: 'https://heyzine.com/flip-book/32882555d5.html',
            type: 'External',
          }
      ],
        contributors: [
          'Hazeq Harrison',
          'Nik Ariff Johaan',
          'Zarihatul Husna',
        ],
      },
      {
        role: 'Director',
        dates: 'Jul 2023 - Apr 2024',
        description: '',
        links: [{
          label: 'MSNight 2024',
          url: 'https://drive.google.com/file/d/1QIAq2I6yaEuGOK-mZ3si-BUczamtSYS5/view?usp=sharing',
          type: 'Youtube',
          },
          {
            label: 'Epigram',
            url: 'https://epigram.org.uk/review-waiting-for-your-return-by-bristol-ms-night/',
            type: 'Award',
          },
          {
            label: 'Booklet',
            url: 'https://www.canva.com/design/DAF6h1hpbcY/1OTBnmAQEn97vt0icIRYGQ/',
            type: 'External',
          }
        
        ],
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
        description: '',
        links: [{
          label: 'MSNight 2023',
          url: 'https://www.youtube.com/watch?v=I-wEYdwdmq4&feature=youtu.be',
          type: 'Youtube',
          },
          {
            label: 'Gallery',
            url: 'https://themarcusliew.pic-time.com/-bristolmsnight202323march2022/gallery?invitePToken2=AAAAAJkAAAA9T1WNjcgb6deOeQ',
            type: 'Website',
          }
        ],
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
    description: 'Played minor representative roles within the Bristol Students\' Union, as a voice for the BAME network and one of two cohort representatives for the Mechanical Engineering course throughout both the third and fourth academic years. Responsibilities included gathering student feedback, and reporting with faculty members bimonthly.',
    skills: [],
    languages: [],
    logo: bristolSULogo,
    links: [{
      label: 'Bristol SU',
      url: 'https://www.bristolsu.org.uk/student-voice/find-your-reps',
      type: 'Website',
    }],
    contributors: [],
    subroles: [
      {
        role: 'BAME Network Representative',
        dates: 'Sep 2024 - Mar 2025',
        description: '',
        links: [{
          label: 'BAME Network',
          url:'https://bristolold.unioncloud.org/groups/bristol-su-bristol-su-black-asian-and-minority-ethnic-network',
          type: 'Website',
        }],
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
        description: '',
        links: [
          {
            label: 'Course Rep Certificate',
            url: courseRepAward,
            type: 'Award',
          },
        ],
        contributors: ['Nely Georgiou'],
      },
      {
        role: 'Faculty of Engineering Y3 Course Representative',
        dates: 'Sep 2023 - Mar 2024',
        description: '',
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
    description: 'First committee role held in University. Contributed to planning and execution of events, including adhoc tasks. Primarily responsibile for securing sposorship deals with local Asian businesses in Bristol, including contract outlining and tiering negotations for member benefits.  ',
    skills: [],
    languages: [],
    logo: thaisocLogo,
    links: [{
      label: 'LinkTree',
      url: 'https://linktr.ee/SIGNUPUOBNUWEMEMBERSHIP',
      type: 'LinkTree',
    }],
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
  {
    title: 'Sixth Form',
    role: 'Various Internal Roles',
    organisation: 'Harrow International School Bangkok',
    dates: 'Aug 2019 - Jun 2021',
    location: 'Bangkok, Thailand',
    description: 'Various leadership roles held between Y12 and Y13 at Harrow Bangkok.',
    skills: [],
    languages: [],
    logo: harrowLogo,
    links: [],
    contributors: [],
    subroles: [
      {
        role: 'Prefect',
        dates: 'Oct 2020 - Jun 2021',
        description: 'Senior prefect, responsible for upholding school values.',
        links: [],
        contributors: [],
      },
      {
        role: 'Engineering Society Committee',
        dates: 'Sep 2019 - May 2021',
        description: 'Committee member of what was originally known as "Scibois". A student-led committee which evolved into a schoolwide initiative, organising STEM events and workshops for junior students.',
        links: [],
        contributors: [],
      },
      {
        role: 'HarrowCraft Project',
        dates: 'May 2019 - Jun 2021',
        description: 'Technical lead for HarrowCraft, a minecraft server built to replicate the Harrow Bangkok campus at a 1:1 in minecraft.',
        links: [],
        contributors: [],
      },
      {
        role: 'Legends of Lions Captain',
        dates: 'Aug 2020 - May 2021',
        description: '4th captain of the Legends of Lions, the school`s dance crew. Performed in various school events including the Speech Day and Benefit Bash.',
        links: [],
        contributors: [],
      },
      {
        role: 'Senior House Captain',
        dates: 'Sep 2019 - Apr 2020',
        description: 'Acted as the 2019-2020 Senior House Captain for the Suriyothai house. Held weekly House registrations, organized inter-house events, and indirectly responsible for over 300 students.',
        links: [],
        contributors: [],
      },
      {
        role: 'Legends of Lions Vice Captain',
        dates: 'Aug 2019 - May 2020',
        description: 'Vice captain of the Legends of Lions, the school`s dance crew.',
        links: [],
        contributors: [],
      },
    ],
  },
  {
    title: 'Secondary',
    role: 'Various Internal Roles',
    organisation: 'Harrow International School Bangkok',
    dates: 'Nov 2017 - Jun 2019',
    location: 'Bangkok, Thailand',
    description: 'Various leadership roles held between Y9 to Y11 at Harrow Bangkok.',
    skills: [],
    languages: [],
    logo: harrowLogo,
    links: [],
    contributors: [],
    subroles: [
      {
        role: 'Deputy House Captain',
        dates: 'Aug 2018 - May 2019',
        description: 'Deputy House Captain for the Suriyothai House from 2018 to 2019. Involved in House activities, and communicating with the Senior House Captain.',
        links: [],
        contributors: [],
      },
      {
        role: 'SLT Development Team',
        dates: 'Oct 2018 - Apr 2019',
        description: 'Part of the Suriyothai Leadership Team (SLT), the House`s leadership team at the secondary education level.',
        links: [],
        contributors: [],
      },
      {
        role: 'Varsity Bouldering - SEASAC',
        dates: 'Sep 2017 - Mar 2019',
        description: 'Dedicated over three years as part of the school`s varsity bouldering team, competing in inter-regional SEASAC competitions across ASEAN.',
        links: [],
        contributors: [],
      },
      {
        role: 'Varsity Badminton',
        dates: 'Sep 2017 - Mar 2019',
        description: 'Represented the school in the school varsity badminton team. Competed in inter-school competitions including BISAC and FOBISIA.',
        links: [],
        contributors: [],
      },
      {
        role: 'Junior Varsity Volleyball',
        dates: 'Sep 2017 - Mar 2018',
        description: 'Played for the school junior varsity volleyball team in local inter-school competitions.',
        links: [],
        contributors: [],
      },
    ],
  },
];
