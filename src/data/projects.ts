// Projects page data
// Central source of truth for project entries and types.

export interface ProjectEntry {
  id: number;
  title: string;
  description: string;
  languages: string[];
  contributors: string[];
  image?: string;
}

export const projects: ProjectEntry[] = [
  {
    id: 0,
    title: 'Placeholder Project',
    description:
      'This is a placeholder project card. Replace this description with details about a real project, including what you built, the problems you solved, and what you learned.',
    languages: ['TypeScript', 'Astro', 'TailwindCSS'],
    contributors: ['Wishawin Lertnawapan'],
    image: undefined,
  },
];
