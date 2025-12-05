// Education page data
// Central source of truth for education timeline entries.

export interface EducationPublication {
  title: string;
  course?: string;
  authors?: string;
  description?: string;
  date?: string;
  pdfUrl?: string;
  pdfUrls?: string[];
  hyperlink?: string;
}

export interface EducationEntry {
  title: string;
  subheader: string;
  date: string;
  location: string;
  grade: string;
  image?: any;
  modules: Record<string, string[]>;
  publications: EducationPublication[];
  awards: string[];
  transcriptUrls?: string[];
}

import wquLogo from '../assets/education/WQU.jpeg';
import bristolLogo from '../assets/education/Bristol.png';
import harrowLogo from '../assets/education/Harrow.jpg';

// Transcripts
import wquTranscript from '../assets/education/WQU_Transcript.pdf';
import bristolTranscript from '../assets/education/Bristol_Transcript.pdf';
import harrowTranscript from '../assets/education/Harrow_Transcript.pdf';

// University of Bristol publication PDFs
import gipReportPdf from '../assets/education/pdfs/G21_GIP_MENGM5000_REPORT.pdf';
import biomechanicsPdf from '../assets/education/pdfs/BURN_2143062_pdf.pdf';
import renewableEnergyPdf from '../assets/education/pdfs/Renewable_Energy.pdf';
import multivariableControlPdf from '../assets/education/pdfs/Multivariable_and_Non_Linear_Control_Report.pdf';
import irpPdf from '../assets/education/pdfs/IRP_2143062_Wishawin.pdf';
import asmPdf from '../assets/education/pdfs/ASM_2143062.pdf';
import materialsLabPdf from '../assets/education/pdfs/Materials_Lab.pdf';
import stp1Pdf from '../assets/education/pdfs/STP/1_Organisation Brief_LocaVision.pdf';
import stp2Pdf from '../assets/education/pdfs/STP/2_Concept Selection_LocaVision.pdf';
import stp3Pdf from '../assets/education/pdfs/STP/3_Business Case_LocaVision.pdf';
import stp4Pdf from '../assets/education/pdfs/STP/4_Communication Plan_LocaVision.pdf';
import stp5Pdf from '../assets/education/pdfs/STP/5_Risk Register_LocaVision.pdf';
import stp6Pdf from '../assets/education/pdfs/STP/6_Sustainability Assessment_LocaVision.pdf';
import stp7Pdf from '../assets/education/pdfs/STP/7_Quality Management Plan_LocaVision.pdf';

export const educationEntries: EducationEntry[] = [
  {
    title: 'Incoming',
    subheader: 'MSc Data Science and Machine Learning',
    date: 'Sep 2026 - Jul 2027',
    location: 'London, UK',
    grade:
      'Applications pending at Imperial, LSE, and UCL for Sept 2026 intake',
    image: "",
    modules: {},
    publications: [],
    awards: [],
  },
  {
    title: 'WorldQuant University',
    subheader: 'MScFE Financial Engineering',
    date: 'Sep 2025 - Sep 2027',
    location: 'Online, UK',
    grade: '',
    image: wquLogo,
    modules: {
      'Year 1': [
        'MScFE560 25/10 Financial Markets',
        'MScFE600 25/12 Financial Data' 
      ]
    },
    publications: [],
    awards: [],
    transcriptUrls: [wquTranscript],
  },
  {
    title: 'University of Bristol (H300)',
    subheader: 'MEng, Mechanical Engineering ',
    date: 'Sep 2021 - Jul 2025',
    location: 'Bristol, UK',
    grade: 'Second Class Honours First Division',
    image: bristolLogo,
    modules: {
      'Year 1': [
        'EMAT10100 Engineering Mathematics I',
        'CENG10012 Engineering by Design',
        'CADE10002 Engineering Communication Measurement and Data Analysis',
        'MENG10004 Engineering Science',
        'MENG10006 Principles of Mechanical Engineering',
      ],
      'Year 2': [
        'EMAT20200 Engineering Mathematics II',
        'MENG20004 Dynamics and Control',
        'MENG20005 Engineering Practice',
        'MENG20009 Thermofluids',
        'MENG20005 Materials Engineering',
      ],
      'Year 3': [
        'MENG35000 Individual Research Project',
        'MENG30011 Applied Solid Mechanics',
        'MENG30012 Engineering Management',
        'MENG30006 Behaviour of Dynamic Systems',
        'MENG30008Fluid Mechanics and Heat Transfer',
      ],
      'Year 4': [
        'SEMTM0007 Data Driven Physical Modelling',
        'MENGM0067 Multivariable and Non-linear Control',
        'MENGM5000 Group Industrial Project',
        'MENGM0064 Renewable Energy for a Sustainable Future',
        'MEMGM0059 AT Generative Design',
        'MEMGM0059 AT Quantum Information and Photonic Engineering',
        'MEMGM0059 AT Design in a Constrained World',
        'MEMGM0059 AT Machine Thinking in Smart Manufacturing',
        'MEMGM0059 AT Biomechanics',
      ],
    },
    publications: [
      {
        title: 'GKN Aerospace Ring Hoop Tension Test Investigation',
        course: '[MENGM5000] Group Industrial Project',
        authors:
          'Sophie Cook, Demetri Gaffney, Tallulah Jackson-Coombs, Daniel Lee',
        description:
          'An investigation on the parameters affecting the accuracy of material property determination of aluminium using ring hoop tension tests',
        date: '© April 29, 2025',
        pdfUrl: gipReportPdf,
        hyperlink: 'https://github.com/ein1le/gip-ddest',
      },
      {
        title: 'Biomechanics of Legged Vehicles for Interplanetary Applications',
        course: '[MENGM0059] Advanced Topics in Mechanical Engineering',
        description:
          'Report on the biomechanical feasibility and modifications to a Boston Dynamics Spot robot for Martian applications',
        date: 'February 25, 2025',
        pdfUrl: biomechanicsPdf,
      },
      {
        title: 'Richmond Building - Renewable Energy Strategy',
        course: '[MENGM0064] Renewable Energy for a Sustainable Future',
        authors: 'Demetri Gaffney, Daniel Lee, Anjli Majitha',
        description:
          "Official proposition of renewable energy alternative solutions for the University of Bristol's Richmond Building for Scope 1-2 emissions reduction",
        date: 'December 5, 2024',
        pdfUrl: renewableEnergyPdf,
      },
      {
        title: 'Multivariable and Nonlinear Control of a 2-DOF Planar Manipulator',
        course: '[MENGM0067] Multivariable and Nonlinear Control',
        authors: 'Ibrahim Arekat, William Sakyi',
        description: '',
        date: 'December 3, 2024',
        pdfUrl: multivariableControlPdf,
        hyperlink: 'https://github.com/Will27-s/MultiVarControl',
      },
      {
        title: 'Reduced Order Recurrent Neural Networks for Vibration Modelling',
        course: '[SEMTM0007] Data-Driven Physical Modelling',
        description:
          'Utilisation of reduced order methods such as DMD, and various Neural Networks including ESNs, RNNs, and NODEs for modelling impact test vibration data',
        date: 'November 28, 2024',
        pdfUrl: '/pdfs/bristol-article.pdf',
      },
      {
        title:
          'Evolutionary Algorithms for Optimisation of Sensors for SHM Applications',
        course: '[MENG35000] Individual Research Project',
        description:
          'Dissertation investigating heuristic information-based convex optimisation algorithms such as genetic algorithms and particle swarm for nonlinear optimisation of sensor placements on structural beams',
        date: '© May 9, 2024',
        pdfUrl: irpPdf,
      },
      {
        title: 'STP Ltd. Management Portfolio',
        course: '[MENG30012] Engineering Management',
        authors:
          'Kabeer Dayal, Vic Komolrojanaporn, Daniel Lee, Abdullah Monnoo, Aung Zaw Myat',
        description:
          'Business portfolio, including components of risk assessments, product quality management plan, shareholder brief, etc. for a planned fictional VR glasses product launch',
        date: 'May 2, 2024',
        pdfUrls: [
          stp1Pdf,
          stp2Pdf,
          stp3Pdf,
          stp4Pdf,
          stp5Pdf,
          stp6Pdf,
          stp7Pdf,
        ],
      },
      {
        title: 'Finite Element Analysis of GCU Design on LNG Carriers',
        course: '[MENGM30011] Applied Solid Mechanics',
        description: '',
        date: 'December 14, 2023',
        pdfUrl: asmPdf,
      },
      {
        title: 'Deployable Solar Array Portfolio',
        course: '[MENG20006] Engineering Practice',
        authors: 'Ibrahim Arekat, Kabeer Dayal, Abdullah Monnoo',
        description: '',
        date: 'April 5, 2023',
        pdfUrl: '/pdfs/bristol-article.pdf',
      },
      {
        title:
          'Compliance and Material Properties Analysis of a Rack and Pin Hinge',
        course: '[MENG10005] Engineering Communication, Measurement, and Data Analysis',
        description: '',
        date: 'May 14, 2022',
        pdfUrl: materialsLabPdf,
      },
      {
        title: 'DMP Project',
        course: '[MENG10006] Design & Manufacturing Project',
        authors: 'Sophie Tan, Daniel Kim',
        description: 'Concept generation, PDS, analytics',
        date: 'July 12 2019',
        pdfUrl: '/pdfs/harrow-math.pdf',
      },
    ],
    awards: [
      'Bristol PLUS Award',
      'Bristol Skills Accelerator',
      'Think Big Scholarship',
    ],
    transcriptUrls: [bristolTranscript],
  },
  {
    title: 'Harrow International School',
    subheader: 'Highschool',
    date: 'Aug 2011 - Jun 2021',
    location: 'Bangkok, Thailand',
    grade: 'A-Levels: A*A*A*, IGCSEs: 12A*s',
    image: harrowLogo,
    modules: {
      'A Levels': ['Mathematics', 'Physics', 'Biology'],
      'AS Levels': [
        'Mathematics',
        'Physics',
        'Chemistry',
        'Extended Project Qualification',
      ],
      IGCSEs: [
        'Additional Mathematics',
        'Mathematics',
        'Physics',
        'Chemistry',
        'Biology',
        'Development Studies',
        'Geography',
        'Thai Language',
        'English Language',
        'English Literature',
        'English Second Language',
        'Art & Design',
      ],
      IELTS: ['8.0'],
    },
    publications: [
      {
        title: 'Extended Project Qualification',
        course: 'SCI101',
        description: '',
        date: 'Mar 2020',
        pdfUrl: '/pdfs/harrow-science.pdf',
      },
      {
        title: 'Internal Research Project',
        course: '',
        description: '',
        date: 'Jul 2019',
        pdfUrl: '/pdfs/harrow-math.pdf',
      },
    ],
    awards: [
      'Harrow Prize Distinction',
      'Sixth Form Mathematics Prize',
      'Sixth Form House Prize',
      'Gold Scholarship',
      'Duke of Edinburgh Silver Award',
    ],
    transcriptUrls: [harrowTranscript],
  },
];
