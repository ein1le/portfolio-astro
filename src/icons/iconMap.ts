// Centralized mapping for icon names used with astro-icon.
// These map semantic keys to the actual icon identifiers (local SVG filenames).

export type IconKey =
  | 'python'
  | 'typescript'
  | 'vercel'
  | 'github'
  | 'linkedin'
  | 'telegram'
  | 'kaggle'
  | 'mail'
  | 'envelope'
  | 'map-pin'
  | 'paper-plane'
  | 'phone'
  | 'chevron-down'
  | 'copyright'
  | 'astro'
  | 'tailwind'
  | 'mobile'
  | 'desktop'
  | 'javascript'
  | 'react'
  | 'firebase'
  | 'wix'
  | 'cpp'
  | 'sql'
  | 'r-lang'
  | 'pytorch-lightning'
  | 'tensorflow'
  | 'keras'
  | 'scikit-learn'
  | 'xarray'
  | 'tslearn'
  | 'scipy'
  | 'quantlib'
  | 'huggingface'
  | 'spacy'
  | 'opencv'
  | 'surprise'
  | 'cloud'
  | 'analytics'
  | 'ml'
  | 'ai'
  | 'engineering'
  | 'coding-language'
  | 'web'
  | 'backend'
  | 'cicd'
  | 'database';

// For local icons, astro-icon uses the SVG filename (without extension)
// as the icon name in the "local" set.
export const iconMap: Record<IconKey, string> = {
  python: 'logos:python',
  typescript: 'logos:typescript-icon',
  vercel: 'logos:vercel-icon',
  github: 'logos:github-icon',
  linkedin: 'linkedin',
  telegram: 'telegram',
  kaggle: 'kaggle',
  mail: 'mail',
  envelope: 'envelope',
  'map-pin': 'map-pin',
  'paper-plane': 'paper-plane',
  phone: 'phone',
  'chevron-down': 'chevron-down',
  copyright: 'copyright',
  astro: 'logos:astro-icon',
  tailwind: 'logos:tailwindcss-icon',
  mobile: 'mobile',
  desktop: 'desktop',
  javascript: 'logos:javascript',
  react: 'logos:react',
  firebase: 'logos:firebase',
  wix: 'logos:wix',
  cpp: 'logos:c-plusplus',
  sql: 'logos:mysql-icon',
  'r-lang': 'logos:r-lang',
  'pytorch-lightning': 'pytorch-lightning',
  tensorflow: 'tensorflow',
  keras: 'keras',
  'scikit-learn': 'scikit-learn',
  xarray: 'xarray',
  tslearn: 'tslearn',
  scipy: 'scipy',
  quantlib: 'quantlib',
  huggingface: 'huggingface',
  spacy: 'spacy',
  opencv: 'opencv',
  surprise: 'surprise',
  cloud: 'cloud',
  analytics: 'analytics',
  ml: 'ml',
  ai: 'ai',
  engineering: 'engineeering',
  'coding-language': 'coding-language',
  web: 'web',
  backend: 'backend',
  cicd: 'cicd',
  database: 'database',
};

export const getIconName = (key: IconKey): string => iconMap[key];
