// eventually add mobile (reactt native, flutter, and swift,a nd cmake)

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
import onnxRuntimeLogo from '../icons/onnx-runtime.png?url';
import modalLogo from '../icons/modal-labs.png?url';
import claudeLogo from '../icons/claude.png?url';
import openaiLogo from '../icons/openai.png?url';
import mlflowLogo from '../icons/mlflow.png?url';
import pandasLogo from '../icons/pandas.png?url';
import mysqlLogo from '../icons/mysql.png?url';
import mongoLogo from '../icons/mongodb.png?url';
import kafkaLogo from '../icons/kafka.png?url';
import seleniumLogo from '../icons/selenium.png?url';
import awsLogo from '../icons/aws.png?url';
import gcpLogo from '../icons/google-cloud.png?url';
import databricksLogo from '../icons/databricks.png?url';
import kubernetesLogo from '../icons/kubernetes.png?url';
import redisLogo from '../icons/redis.png?url';
import fusionLogo from '../icons/fusion360.png?url';
import abaqusLogo from '../icons/abaqus.png?url';
import starCcmLogo from '../icons/star-ccm.png?url';
import digimuLogo from '../icons/DIGIMU.png?url';
import arduinoLogo from '../icons/arduino.png?url';
import gitLogo from '../icons/git.png?url';
import terraformLogo from '../icons/terraform.png?url';
import dockerLogo from '../icons/docker.png?url';
import spacyLogo from '../icons/spacy.png?url';
import gazeboLogo from '../icons/gazebo.png?url';
import excelLogo from '../icons/excel.png?url';
import powerBiLogo from '../icons/powerbi.png?url';
import jupyterLogo from '../icons/jupyter.png?url';
import streamlitLogo from '../icons/streamlit.png?url';
import plotlyLogo from '../icons/plotly.png?url';
import tableauLogo from '../icons/tableau.png?url';
import matplotlibLogo from '../icons/matplotlib.png?url';
import figmaLogo from '../icons/figma.png?url';
import canvaLogo from '../icons/canva.png?url';
import illustratorLogo from '../icons/illustrator.jpg?url';
import fastapiLogo from '../icons/fastapi.png?url';
import djangoLogo from '../icons/django.png?url';
import graphqlLogo from '../icons/graphql.png?url';
import restLogo from '../icons/rest.png?url';
import postmanLogo from '../icons/postman.jpg?url';
import lambdaLogo from '../icons/lambda.png?url';
import amplifyLogo from '../icons/amplify.png?url';
import viteLogo from '../icons/vite.png?url';
import wixLogo from '../icons/wix.png?url';
import vercelLogo from '../icons/vercel.svg?url';
import firebaseLogo from '../icons/firebase-me.png?url';
import parcelLogo from '../icons/parcel.png?url';
import threeLogo from '../icons/threejs.png?url';

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
        name: 'Web Languages',
        icon: 'javascript',
        description: 'TypeScript, HTML, and CSS used for interactive frontends and tooling.',
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
        // no dedicated icon asset; uses initial fallback
        description: 'Time-series specific machine learning algorithms.',
      },
      {
        name: 'SciPy',
        logo: scipyLogo,
        description: 'Core scientific computing routines on top of NumPy.',
      },
      {
        name: 'Python Quant Libraries',
        logo: quantconnectLogo,
        description: 'Quantitative finance libraries, including QuantConnect, QuantLib, and yfinance for pricing and risk.',
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
        name: 'spaCy',
        logo: spacyLogo,
        description: 'Efficient NLP pipelines for production applications.',
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
        logo: fastapiLogo,
        description: 'Python web framework for high-performance async APIs.',
      },
      {
        name: 'Serverless Frameworks',
        logo: lambdaLogo,
        description: 'AWS Lambda and Google Cloud Functions for event-driven compute.',
      },
      {
        name: 'Python ASGI/WSGI',
        logo: gunicornLogo,
        description: 'Gunicorn and Uvicorn servers for serving ML APIs and applications.',
      },
    ],
    minor: [
      {
        name: 'GraphQL APIs',
        logo: graphqlLogo,
        description: 'Query language and runtime for flexible API schemas.',
      },
      {
        name: 'gRPC APIs',
        description: 'Resource-oriented API design for HTTP services.',
      },
      {
        name: 'REST APIs',
        logo: restLogo,
        description: 'Resource-oriented API design for HTTP services.',
      },
      {
        name: 'Kafka',
        logo: kafkaLogo,
        description: 'Streaming platform for event-driven architectures.',
      },
      {
        name: 'Postman',
        logo: postmanLogo,
        description: 'Tooling for testing and documenting HTTP APIs.',
      },
      {
        name: 'SQLAlchemy',
        description: 'Python ORM and SQL toolkit for relational databases.',
      },
      {
        name: 'Finance APIs',
        logo: quantlibLogo,
        description: 'APIs for market data including Alpha Vantage and Polygon.io.',
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
        icon: 'react',
        description: 'Component-based UI library used across projects.',
      },
      {
        name: 'Next.js',
        logo: vercelLogo,
        description: 'Full-stack React framework for SSR and app routing.',
      },
      {
        name: 'Serverless Frameworks',
        logo: amplifyLogo,
        description: 'AWS Amplify and Google Cloud Functions for event-driven compute.',
      },
      {
        name: 'Astro',
        icon: 'astro',
        description: 'Content-first framework used for this portfolio.',
      },
      {
        name: 'Django',
        logo: djangoLogo,
        description: 'Full-stack Python framework used in earlier projects.',
      },
    ],
    minor: [

      {
        name: 'Vite',
        logo: viteLogo,
        description: 'Lightning-fast dev bundler and build tool.',
      },
      {
        name: 'Parcel',
        logo: parcelLogo,
        description: 'Zero-config bundler used in earlier projects.',
      },
      {
        name: 'Tailwind CSS',
        icon: 'tailwind',
        description: 'Utility-first styling system for rapid UI iteration.',
      },
      {
        name: 'Wix Velo',
        logo: wixLogo,
        description: 'Low-code environment for quick prototypes and landing pages.',
      },
      {
        name: 'JavaScript Animation Libraries',
        logo: threeLogo,
        description: 'GSAP, Three.js and Framer Motion for rich, interactive web experiences.',
      }
    ],
  },
  {
    group: 'Cloud',
    description: 'Managed services and platforms for deploying and scaling systems.',
    icon: 'cloud',
    major: [
      {
        name: 'AWS',
        logo: awsLogo,
        description: 'Core services including Cognito, DynamoDB, S3, Lambda, API Gateway, EKS, Fargate, and Amplify.',
      },
    ],
    minor: [
      {
        name: 'Google Cloud',
        logo: gcpLogo,
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
        logo: databricksLogo,
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
        logo: kubernetesLogo,
        description: 'Container orchestration platform for managing containerised applications.',
      },
      {
        name: 'Redis',
        logo: redisLogo,
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
        logo: dockerLogo,
        description: 'Containerisation for reproducible environments and deployments.',
      },
      {
        name: 'Git',
        logo: gitLogo,
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
        logo: terraformLogo,
        description: 'Infrastructure-as-code for cloud resources and environments.',
      }
    ],
  },
  {
    group: 'Visualisation & Reporting',
    description: 'Tools used to communicate insights and build dashboards.',
    icon: 'analytics',
    major: [
      {
        name: 'Microsoft Excel',
        logo: excelLogo,
        description: 'Quick analysis, pivot tables, and reporting.',
      },
      {
        name: 'Power BI',
        logo: powerBiLogo,
        description: 'Self-service BI for interactive business dashboards.',
      },
      {
        name: 'Jupyter',
        logo: jupyterLogo,
        description: 'Interactive notebooks for exploration and storytelling.',
      },
      {
        name: 'Figma',
        logo: figmaLogo,
        description: 'Collaborative design and prototyping tool.',
      },
      {
        name: 'Python Visualisation',
        logo: matplotlibLogo,
        description: 'Matplotlib, Seaborn, and Low-level plotting library for fine-grained control.',
      },
    ],
    minor: [
      {
        name: 'Python Dashboarding',
        logo: plotlyLogo,
        description: 'Dash, Streamlit and Plotly forPython-first framework for lightweight data apps.',
      },
      {
        name: 'Tableau',
        logo: tableauLogo,
        description: 'Collaborative design and prototyping tool.',
      },
      {
        name: 'Adobe Illustrator',
        logo: illustratorLogo,
        description: 'Vector design for polished visuals and diagrams.',
      },
      {
        name: 'Canva',
        logo: canvaLogo,
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
        logo: fusionLogo,
        description: 'CAD and CAM for mechanical design and prototyping.',
      },
      {
        name: 'Abaqus CAE',
        logo: abaqusLogo,
        description: 'Finite element analysis for structural simulation.',
      },
    ],
    minor: [
      {
        name: 'Robotic Simulation',
        logo: gazeboLogo,
        description: 'Robot Operating System, WeBots, and Gazebo.',
      },
      {
        name: 'Micrcontroller Programming',
        logo: arduinoLogo,
        description: 'Arduino and Raspberry Pi PICO Programming',
      },
      {
        name: 'Star-CCM+',
        logo: starCcmLogo,
        description: 'CFD and multiphysics simulation for complex flows.',
      },
      {
        name: 'DIGIMU',
        logo: digimuLogo,
        description: 'Inertial measurement unit for motion tracking and analysis.',
      }
    ],
  },
];
