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
  | 'chevron-down';

// For local icons, astro-icon uses the SVG filename (without extension)
// as the icon name in the "local" set.
export const iconMap: Record<IconKey, string> = {
  python: 'python',
  typescript: 'typescript',
  vercel: 'vercel',
  github: 'github',
  linkedin: 'linkedin',
  telegram: 'telegram',
  kaggle: 'kaggle',
  mail: 'mail',
  envelope: 'envelope',
  'map-pin': 'map-pin',
  'paper-plane': 'paper-plane',
  phone: 'phone',
  'chevron-down': 'chevron-down',
};

export const getIconName = (key: IconKey): string => iconMap[key];

