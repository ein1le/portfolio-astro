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
  copyright?: boolean;
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
import ddpmMergedPdf from '../assets/education/pdfs/DDPM_2143062_Merged.pdf';
import group7SummativePdf from '../assets/education/pdfs/Group7_Merged_Summative.pdf';
import materialsLabPdf from '../assets/education/pdfs/Materials_Lab.pdf';
import stpMergedPdf from '../assets/education/pdfs/STP_LocaVision.pdf';

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
          'A final year group research project evaluating how friction and mandrel-specimen clearance affect the reliability of ring-hoop tension tests for aluminium used in hydrogen storage vessels, supported by GKN Aerospace. A factorial experimental design was used to isolate and compare parameter effects with statistical processing included averaging engineering stress-strain curves, comparing error distributions against a uniaxial baseline, and frequency-domain stick-slip analysis in friction testing. The findings support safer design practice in aviation hydrogen pressure vessels by identifying optimal test configurations for reliable material property measurement.',
        date: 'April 29, 2025',
        pdfUrl: gipReportPdf,
        hyperlink: 'https://github.com/ein1le/gip-ddest',
        copyright: true,
      },
      {
              title:
          'Evolutionary Algorithms for Optimisation of Sensors for SHM Applications',
        course: '[MENG35000] Individual Research Project',
        description:
          'This dissertation applies stochastic optimisation techniques to improve how sensor networks can be designed and evaluated in structural health monitoring. It implements and benchmarks custom-built Genetic Algorithms, Differential Evolution, and Particle Swarm Optimisation in Python, assessing their statistical performance, convergence behaviour, and ability to escape local minima. The project highlights practical strengths in algorithm development, hyperparameter tuning, and quantitative comparison of practical algorithm-engineering techniques and statistical performance evaluation for civil applications.',
        date: 'May 9, 2024',
        pdfUrl: irpPdf,
        copyright: true,
      },
      {
        title: 'Biomechanics of Legged Vehicles for Interplanetary Applications',
        course: '[MENGM0059] Advanced Topics in Mechanical Engineering',
        description:
          'This paper evaluates how Martian conditions would alter the mechanical design and gait dynamics of a quadrupedal robot, using Boston Mechanics Spot as an exmaple. Quantitative biomechanical modelling was used to predict limb loading, energy consumption and stability including static free-body structural analysis, Euler buckling limits, scaling laws (allometry), inverted-pendulum motion, and spring-mass gait simulation. Additional actuator-level modelling, such as Hill-type tendon mechanics and force-angle relationships, was applied to propose optimisations for Martian locomotion.',
        date: 'February 25, 2025',
        pdfUrl: biomechanicsPdf,
      },
      {
        title: 'Richmond Building - Renewable Energy Strategy',
        course: '[MENGM0064] Renewable Energy for a Sustainable Future',
        authors: 'Demetri Gaffney, Daniel Lee, Anjli Majitha',
        description:
          "Official proposition of renewable energy alternative solutions for the University of Bristol's Richmond Building for Scope 1-2 emissions reduction. This group project delivers a sustainability plan by redesigning how the Building generates and uses energy. It assesses current gas and electricity demand, evaluates renewable options, and proposes a combined solution of air-source heat pumps, solar panels, and on-site battery storage to cut carbon output while remaining cost-effective. The final proposal demonstrates environmental and economic considerations, including an estimated 19-year payback period and a reduction in fossil-fuel reliance. ",
        date: 'December 5, 2024',
        pdfUrl: renewableEnergyPdf,
      },
      {
        title: 'Multivariable and Nonlinear Control of a 2-DOF Planar Manipulator',
        course: '[MENGM0067] Multivariable and Nonlinear Control',
        authors: 'Ibrahim Arekat, William Sakyi',
        description: 'Coursework summative, which designs and builds a two-link robotic arm capable of drawing accurate geometric shapes using a Raspberry Pi Pico and motor encoders for closed-loop control. The project applies practical PID control enhancements, including tuned gains, velocity profiling, filtering and backlash mitigation to improve shape accuracy and stability while keeping drawing times low. It also includes a conceptual simulation study comparing traditional PID to more advanced multivariable control.',
        date: 'December 3, 2024',
        pdfUrl: multivariableControlPdf,
        hyperlink: 'https://github.com/Will27-s/MultiVarControl',
      },
      {
        title: 'Reduced Order Recurrent Neural Networks for Vibration Modelling',
        course: '[SEMTM0007] Data-Driven Physical Modelling',
        description:
          'This report is broken down into two sections: Section 1 analyses nonlinear vibration data using data-driven system-identification techniques. Delay-embedding, noise filtering, and least-squares linear modelling were applied to reconstruct dynamics and evaluate prediction accuracy across experiments. It balances modelling performance and generalisation by tuning parameters. Section 2 explores a more advanced representation of the same vibrating structure using DMD. It extracts dominant vibration modes, estimates decay and frequency characteristics, and validates how well DMD modes can reconstruct motion across repeated impacts.',
        date: 'November 28, 2024',
        pdfUrl: ddpmMergedPdf,
      },
      {
        title: 'STP Ltd. Management Portfolio',
        course: '[MENG30012] Engineering Management',
        authors:
          'Kabeer Dayal, Vic Komolrojanaporn, Daniel Lee, Abdullah Monnoo, Aung Zaw Myat',
        description:
          'A complete management portfolio created for the launch of LocaVision, a fictional AI-powered AR smart-sunglasses product. The collection of documents illustrates end-to-end engineering management capabilities, from structured concept selection to a commercially justified business case with launch phasing, cost modelling and supply-chain planning. Consdierations include stakeholder communication strategy and a risk registers, highlighting governance, regulatory compliance, sustainability, IP strategy, and cross-functional project leadership.',
        date: 'May 2, 2024',
        pdfUrl: stpMergedPdf,
      },
      {
        title: 'Finite Element Analysis of GCU Design on LNG Carriers',
        course: '[MENGM30011] Applied Solid Mechanics',
        description: 'This coursework addresses structural safety challenges in the design of LNG transportation systems operating in high-hazard environments. Part A evaluates the strength and reliability of a lifting lug used on GCU units mounted to LNG carriers, using Abaqus FE simulations and analytical validation to identify stress concentrations. Part B establishes the theoretical foundations by deriving element stiffness relationships and modal behaviour from first principles. Part C extended the investigation to LNG tank plates and pipework, applying fracture mechanics, fatigue crack-growth modelling, and inspection probability analysis to define inspection intervals.',
        date: 'December 14, 2023',
        pdfUrl: asmPdf,
      },
      {
        title: 'Deployable Solar Array Portfolio',
        course: '[MENG20006] Engineering Practice',
        authors: 'Ibrahim Arekat, Kabeer Dayal, Abdullah Monnoo',
        description: 'A multidisciplinary group portfolio expanding on earlier DMP work to design a deployable solar array mounted on the rear of a pickup truck for off-grid power generation. The portfolio demonstrates exposure to the full engineering lifecycle from requirements capture, concept development, materials selection and detailed CAD, to manufacturability studies, cost-risk assessment, and physical testing plans. Collaboration tools, decision matrices, and structured project management approaches were applied to ensure the design meets functional loads, deployment safety, and user-centric field constraints, which show end-to-end engineering delivery.',
        date: 'April 5, 2023',
        pdfUrl: group7SummativePdf,
      },
      {
        title:
          'Compliance and Material Properties Analysis of a Rack and Pin Hinge',
        course: '[MENG10005] Engineering Communication, Measurement, and Data Analysis',
        description: 'A first-year final project introducing core concepts in material science, experimental testing, and engineering data analysis. Various mechanical tests were performed to characterise different metals, with Python used to process raw measurements, calculate mechanical properties, and generate stress-strain plots from extensometer data. The report demonstrates early technical writing skills and scientific methodology. Results were used to justify evidence-based design decisions for a simple aircraft pin-and-rod assembly.',
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
