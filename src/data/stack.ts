// Stack / Technologies page data
// Defines logical groups for languages, tools, and platforms used across projects.

import type { IconKey } from '../icons/iconMap';

export interface StackElement {
  name: string;
  icon?: IconKey;
  description: string;
}

export interface StackGroup {
  group: string;
  description: string;
  icon?: IconKey;
  major: StackElement[];
  minor: StackElement[];
}

// Placeholder stack groups – adjust descriptions and elements as needed.
export const stackGroups: StackGroup[] = [
  {    
    group: 'Languages',
    description: 'Core programming languages used across projects.',
    icon: 'coding-language',
    major: [
      {
        name: 'Python',
        icon: 'python',
        description: 'Used for data analysis, ML, and scripting.',
      },
      {
        name: 'SQL',
        icon: 'sql',
        description: 'Used for querying and shaping relational data.',
      },
      {
        name: 'R',
        icon: 'r-lang',
        description: 'Used for statistical analysis and visualisation.',
      },
    ],
    minor: [
      {
        name: 'JavaScript',
        icon: 'javascript',
        description: 'Used for interactive frontends and tooling.',
      },
      {
        name: 'C++',
        icon: 'cpp',
        description: 'Used for performance-sensitive and systems code.',
      },
      {
        name: 'C',
        description: 'Used for low-level and embedded systems programming.',
      },
      {
        name: 'Bash',
        description: 'Used for scripting, automation, and tooling.',
      },
      {
        name: 'MATLAB',
        description: 'Used for numerical computing and prototyping.',
      },
      {
        name: 'VBA',
        description: 'Used for automating workflows inside Excel and Office.',
      },
    ],
  },
  {
    group: 'Data & ML',
    description: 'Technologies used for data pipelines and modelling.',
    icon: 'ml',
    major: [
      {
        name: 'Pandas / NumPy',
        icon: 'python',
        description: 'Tabular processing and numerical computing.',
      },
      {
        name: 'PyTorch Lightning',
        icon: 'pytorch-lightning',
        description: 'High-level training loops built on top of PyTorch.',
      },
      {
        name: 'TensorFlow',
        icon: 'tensorflow',
        description: 'Production-ready deep learning framework.',
      },
      {
        name: 'Scikit-learn',
        icon: 'scikit-learn',
        description: 'Classical ML toolkit for modelling and evaluation.',
      },
    ],
    minor: [
      {
        name: 'Keras',
        icon: 'keras',
        description: 'High-level neural network API for rapid prototyping.',
      },
      {
        name: 'Xarray',
        icon: 'xarray',
        description: 'Labeled N-dimensional arrays for scientific computing.',
      },
      {
        name: 'tslearn',
        icon: 'tslearn',
        description: 'Time-series specific machine learning algorithms.',
      },
      {
        name: 'SciPy',
        icon: 'scipy',
        description: 'Core scientific computing routines on top of NumPy.',
      },
      {
        name: 'QuantLib',
        icon: 'quantlib',
        description: 'Quantitative finance library for pricing and risk.',
      },
      {
        name: 'spaCy',
        icon: 'spacy',
        description: 'Efficient NLP pipelines for production applications.',
      },
      {
        name: 'OpenCV',
        icon: 'opencv',
        description: 'Computer vision primitives and image processing tools.',
      },
      {
        name: 'Surprise',
        icon: 'surprise',
        description: 'Recommender system algorithms and evaluation utilities.',
      },
    ],
  },
  {
    group: 'MLOps & AI Engineering',
    description: 'Infrastructure and tooling around training, serving, and monitoring ML systems.',
    icon: 'ai',
    major: [
      {
        name: 'LangChain',
        description: 'Composable framework for building LLM-powered applications and agents.',
      },
      {
        name: 'PyTorch Lightning',
        icon: 'pytorch-lightning',
        description: 'Structured training loops and experiment scaffolding on top of PyTorch.',
      },
    ],
    minor: [
      {
        name: 'Weights & Biases',
        description: 'Experiment tracking, logging, and model performance dashboards.',
      },
      {
        name: 'LangGraph',
        description: 'Graph-based orchestration layer for stateful LLM agents.',
      },
      {
        name: 'ChromaDB',
        description: 'Vector database for semantic search and retrieval-augmented generation.',
      },
      {
        name: 'ONNX Runtime',
        description: 'Portable runtime for optimised model inference on multiple backends.',
      },
      {
        name: 'Modal',
        description: 'Serverless compute platform for Python and ML workloads.',
      },
      {
        name: 'Gunicorn',
        description: 'WSGI HTTP server commonly used to run Python APIs in production.',
      },
      {
        name: 'Uvicorn',
        description: 'ASGI server used with FastAPI and other async Python frameworks.',
      },
      {
        name: 'Pickle',
        description: 'Python serialisation format for models and intermediate artefacts.',
      },
      {
        name: 'Claude',
        description: 'LLM used as a reasoning engine or assistant in applied systems.',
      },
      {
        name: 'Codex',
        description: 'Code generation and completion models for developer tooling.',
      },
      {
        name: 'Cursor',
        description: 'AI-assisted code editor for rapid prototyping and refactoring.',
      },
      {
        name: 'MLflow',
        description: 'Open-source platform for tracking experiments and managing ML models.',
      },
      {
        name: 'Hugging Face Transformers',
        icon: 'huggingface',
        description: 'Pretrained transformer models for NLP and beyond.',
      },
    ],
  },
  {
    group: 'Backend',
    description: 'APIs, services, and supporting tooling on the server side.',
    icon: 'backend',
    major: [
      {
        name: 'FastAPI',
        description: 'Python web framework for high-performance async APIs.',
      },
      {
        name: 'Flask',
        description: 'Lightweight Python microframework for small to medium services.',
      },
    ],
    minor: [
      {
        name: 'Django',
        description: 'Batteries-included Python web framework with ORM and admin.',
      },
      {
        name: 'Express.js',
        description: 'Minimal Node.js framework for building HTTP APIs.',
      },
      {
        name: 'GraphQL',
        description: 'Query language and runtime for flexible API schemas.',
      },
      {
        name: 'REST',
        description: 'Resource-oriented API design for HTTP services.',
      },
      {
        name: 'Postman',
        description: 'Tooling for testing and documenting HTTP APIs.',
      },
      {
        name: 'CMake',
        description: 'Cross-platform build system configuration for C/C++ projects.',
      },
      {
        name: 'SQLAlchemy',
        description: 'Python ORM and SQL toolkit for relational databases.',
      },
    ],
  },
  {
    group: 'Web',
    description: 'Client-side frameworks and tooling for rich web interfaces.',
    icon: 'web',
    major: [
      {
        name: 'React',
        description: 'Component-based UI library used across projects.',
      },
      {
        name: 'Next.js',
        description: 'Full-stack React framework for SSR and app routing.',
      },
      {
        name: 'HTML',
        description: 'Markup foundation for all web interfaces.',
      },
      {
        name: 'Astro',
        icon: 'astro',
        description: 'Content-first framework used for this portfolio.',
      },
      {
        name: 'TypeScript',
        icon: 'typescript',
        description: 'Typed language layer for safer frontend code.',
      },
    ],
    minor: [
      {
        name: 'Vite',
        description: 'Lightning-fast dev bundler and build tool.',
      },
      {
        name: 'Parcel',
        description: 'Zero-config bundler used in earlier projects.',
      },
      {
        name: 'Tailwind CSS',
        icon: 'tailwind',
        description: 'Utility-first styling system for rapid UI iteration.',
      },
      {
        name: 'shadcn/ui',
        description: 'Composable headless UI primitives for React.',
      },
      {
        name: 'Node.js',
        description: 'JavaScript runtime used for tooling and SSR.',
      },
      {
        name: 'Wix Velo',
        description: 'Low-code environment for quick prototypes and landing pages.',
      },
      {
        name: 'GSAP',
        description: 'Animation library for rich, timeline-based UI motion.',
      },
    ],
  },
  {
    group: 'Cloud',
    description: 'Managed services and platforms for deploying and scaling systems.',
    icon: 'cloud',
    major: [
      {
        name: 'AWS',
        description: 'Core services including Cognito, DynamoDB, S3, Lambda, API Gateway, EKS, Fargate, and Amplify.',
      },
    ],
    minor: [
      {
        name: 'Azure & Databricks',
        description: 'Azure ML and Databricks for managed ML workflows and lakehouse analytics.',
      },
      {
        name: 'Google Cloud',
        description: 'GCE, GKE, Firestore, BigQuery, Dataflow, and Vertex AI for scalable data and ML workloads.',
      },
    ],
  },
  {
    group: 'Databases & Data Infrastructure',
    description: 'Structured storage, batch and streaming engines.',
    icon: 'database',
    major: [
      {
        name: 'Pandas',
        icon: 'python',
        description: 'Primary tool for tabular analysis and data munging.',
      },
      {
        name: 'MySQL',
        icon: 'sql',
        description: 'Relational database used for transactional workloads.',
      },
      {
        name: 'PostgreSQL',
        icon: 'sql',
        description: 'Relational database used for analytics and robust schema support.',
      },
      {
        name: 'Databricks',
        description: 'Lakehouse platform that combines data warehousing and data engineering.',
      },
      {
        name: 'PySpark',
        icon: 'python',
        description: 'Distributed data processing on top of Apache Spark.',
      },
    ],
    minor: [
      {
        name: 'Apache Kafka',
        description: 'Streaming platform for event-driven architectures.',
      },
      {
        name: 'Apache Spark',
        description: 'Cluster-computing framework for large-scale data processing.',
      },
      {
        name: 'Apache Hadoop',
        description: 'Distributed storage and processing for large data sets.',
      },
      {
        name: 'MongoDB',
        description: 'Document-oriented NoSQL database for flexible schemas.',
      },
      {
        name: 'Microsoft Access',
        description: 'Desktop database used in smaller or legacy workflows.',
      },
    ],
  },
  {
    group: 'DevOps & CI/CD',
    description: 'Tooling and practices around shipping reliable software.',
    icon: 'cicd',
    major: [
      {
        name: 'Docker',
        description: 'Containerisation for reproducible environments and deployments.',
      },
      {
        name: 'Git',
        description: 'Version control for all code and configuration.',
      },
      {
        name: 'GitHub',
        icon: 'github',
        description: 'Hosting, collaboration, and CI pipelines via GitHub Actions.',
      },
    ],
    minor: [
      {
        name: 'Terraform',
        description: 'Infrastructure-as-code for cloud resources and environments.',
      },
    ],
  },
  {
    group: 'Visualisation & Reporting',
    description: 'Tools used to communicate insights and build dashboards.',
    icon: 'analytics',
    major: [
      {
        name: 'Microsoft Excel',
        description: 'Quick analysis, pivot tables, and reporting.',
      },
      {
        name: 'Seaborn',
        description: 'Statistical visualisation library on top of Matplotlib.',
      },
      {
        name: 'Power BI',
        description: 'Self-service BI for interactive business dashboards.',
      },
      {
        name: 'Jupyter',
        description: 'Interactive notebooks for exploration and storytelling.',
      },
      {
        name: 'Matplotlib',
        description: 'Low-level plotting library for fine-grained control.',
      },
    ],
    minor: [
      {
        name: 'Streamlit',
        description: 'Python-first framework for lightweight data apps.',
      },
      {
        name: 'Plotly & Dash',
        description: 'Interactive web-based visualisations and dashboards.',
      },
      {
        name: 'Figma',
        description: 'Collaborative design and prototyping tool.',
      },
      {
        name: 'Adobe Illustrator',
        description: 'Vector design for polished visuals and diagrams.',
      },
      {
        name: 'Canva',
        description: 'Fast layout and presentation design for non-technical audiences.',
      },
    ],
  },
  {
    group: 'Engineering & Simulation',
    description: 'Tools from mechanical design and robotics simulation work.',
    icon: 'engineering',
    major: [
      {
        name: 'Autodesk Fusion 360',
        description: 'CAD and CAM for mechanical design and prototyping.',
      },
      {
        name: 'Abaqus CAE',
        description: 'Finite element analysis for structural simulation.',
      },
    ],
    minor: [
      {
        name: 'ROS',
        description: 'Robot Operating System for robotics middleware and tooling.',
      },
      {
        name: 'Gazebo',
        description: '3D robotics simulator for testing control and perception.',
      },
      {
        name: 'Star-CCM+',
        description: 'CFD and multiphysics simulation for complex flows.',
      },
    ],
  },
];
