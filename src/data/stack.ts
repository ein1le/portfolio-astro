// Stack / Technologies page data
// Defines logical groups for languages, tools, and platforms used across projects.

import type { IconKey } from '../icons/iconMap';
import cLogo from '../icons/CLang.png?url';
import csharpLogo from '../icons/csharp.png?url';
import bashLogo from '../icons/bash.png?url';
import matlabLogo from '../icons/matlab.png?url';
import vbaLogo from '../icons/VBA.png?url';
import pytorchLogo from '../icons/pytorch.png?url';
import pytorchLightningLogo from '../icons/pytorch-lightning.png?url';
import scikitLogo from '../icons/scikit.png?url';
import scipyLogo from '../icons/scipy.png?url';
import quantlibLogo from '../icons/quantlib.png?url';
import quantconnectLogo from '../icons/quantconnect.png?url';
import opencvLogo from '../icons/opencv.png?url';
import tensorflowLogo from '../icons/tensorflow.png?url';
import kerasLogo from '../icons/keras.png?url';
import langchainLogo from '../icons/langchain.png?url';
import chromaDbLogo from '../icons/chromadb.png?url';
import gunicornLogo from '../icons/gunicorn.png?url';
import huggingFaceLogo from '../icons/hugging-face.png?url';
import weightsBiasesLogo from '../icons/weights-biases.png?url';
import langgraphLogo from '../icons/langgraph.png?url';
import onnxRuntimeLogo from '../icons/onnx-runtime.png?url';
import modalLogo from '../icons/modal-labs.png?url';
import claudeLogo from '../icons/claude.png?url';
import openaiLogo from '../icons/openai.png?url';
import mlflowLogo from '../icons/mlflow.png?url';
import pandasLogo from '../icons/pandas.png?url';
import mysqlLogo from '../icons/mysql.png?url';
import mongoLogo from '../icons/mongodb.png?url';
import kafkaLogo from '../icons/apachespark.png?url';
import seleniumLogo from '../icons/selenium.png?url';

export interface StackElement {
  name: string;
  icon?: IconKey;
  logo?: string;
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
      {
        name: 'MATLAB',
        logo: matlabLogo,
        description: 'Used for numerical computing and prototyping.',
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
        logo: cLogo,
        description: 'Used for low-level and embedded systems programming.',
      },
      {
        name: 'C#',
        logo: csharpLogo,
        description: 'Used for Unity game development and desktop applications.',
      },
      {
        name: 'Bash',
        logo: bashLogo,
        description: 'Used for scripting, automation, and tooling.',
      },
      {
        name: 'VBA',
        logo: vbaLogo,
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
        name: 'PyTorch',
        logo: pytorchLogo,
        description: 'High-level training loops built on top of PyTorch.',
      },
      {
        name: 'TensorFlow',
        logo: tensorflowLogo,
        description: 'Production-ready deep learning framework.',
      },
      {
        name: 'Scikit-learn',
        logo: scikitLogo,
        description: 'Classical ML toolkit for modelling and evaluation.',
      },
      {
        name: 'Keras',
        logo: kerasLogo,
        description: 'High-level neural network API for rapid prototyping.',
      },
    ],
    minor: [
      {
        name: 'tslearn',
        // no dedicated logo yet; falls back to first letter
        description: 'Time-series specific machine learning algorithms.',
      },
      {
        name: 'SciPy',
        logo: scipyLogo,
        description: 'Core scientific computing routines on top of NumPy.',
      },
      {
        name: 'QuantLib',
        logo: quantlibLogo,
        description: 'Quantitative finance library for pricing and risk.',
      },
      {
        name: 'QuantConnect',
        logo: quantconnectLogo,
        description: 'Cloud-native algorithmic trading research and execution.',
      },
      {
        name: 'spaCy',
        icon: 'spacy',
        description: 'Efficient NLP pipelines for production applications.',
      },
      {
        name: 'OpenCV',
        logo: opencvLogo,
        description: 'Computer vision primitives and image processing tools.',
      },
      {
        name: 'Surprise',
        // no dedicated logo yet; falls back to first letter
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
        logo: langchainLogo,
        description: 'Langchain and LangGraph framework for building LLM-powered applications and agents.',
      },
      {
        name: 'PyTorch Lightning',
        logo: pytorchLightningLogo,
        description: 'Structured training loops and experiment scaffolding on top of PyTorch.',
      },
      {
        name: 'Hugging Face Transformers',
        logo: huggingFaceLogo,
        description: 'Pretrained transformer models for NLP and beyond.',
      },
    ],
    minor: [
      {
        name: 'Weights & Biases',
        logo: weightsBiasesLogo,
        description: 'Experiment tracking, logging, and model performance dashboards.',
      },
      {
        name: 'Vector Databases',
        logo: chromaDbLogo,
        description: 'ChromaDB and Pinecone for embedding storage and similarity search.',
      },
      {
        name: 'ONNX Runtime',
        logo: onnxRuntimeLogo,
        description: 'Portable runtime for optimised model inference on multiple backends.',
      },
      {
        name: 'Modal',
        logo: modalLogo,
        description: 'Serverless compute platform for Python and ML workloads.',
      },
      {
        name: 'Python ASGI/WSGI',
        logo: gunicornLogo,
        description: 'Gunicorn and Uvicorn servers for serving ML APIs and applications.',
      },
      {
        name: 'Claude API',
        logo: claudeLogo,
        description: 'LLM used as a reasoning engine or assistant in applied systems.',
      },
      {
        name: 'OpenAI API',
        logo: openaiLogo,
        description: 'Code generation and completion models for developer tooling.',
      },
      {
        name: 'MLflow',
        logo: mlflowLogo,
        description: 'Open-source platform for tracking experiments and managing ML models.',
      }
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
      {
        name: 'Three.js',
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
        logo: pandasLogo,
        description: 'Primary tool for tabular analysis and data munging.',
      },
      {
        name: 'MySQL',
        logo: mysqlLogo,
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
        name: 'Python Webscraping',
        logo: seleniumLogo,
        description: 'BeautifulSoup, Selenium, and Scrapy.',
      },
    ],
    minor: [
      {
        name: 'Apache',
        logo: kafkaLogo,
        description: 'Hadoop, Spark, Scala, and Hive for big data processing and ETL.',
      },
      {
        name: 'MongoDB',
        logo: mongoLogo,
        description: 'Document-oriented NoSQL database for flexible schemas.',
      },
      {
        name: 'Kubernetes',
        description: 'Container orchestration platform for managing containerised applications.',
      },
      {
        name: 'Redis',
        description: 'In-memory data structure store for caching and session management.',
      }
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
      {
        name: 'Kafka',
        logo: kafkaLogo,
        description: 'Streaming platform for event-driven architectures.',
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
        name: 'Robotic Simulation',
        description: 'Robot Operating System, WeBots, and Gazebo.',
      },
      {
        name: 'Micrcontroller Programming',
        description: 'Arduino and Raspberry Pi PICO Programming',
      },
      {
        name: 'Star-CCM+',
        description: 'CFD and multiphysics simulation for complex flows.',
      },
      {
        name: 'DIGIMU',
        description: 'Inertial measurement unit for motion tracking and analysis.',
      }
    ],
  },
];
