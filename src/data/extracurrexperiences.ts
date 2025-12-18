// Extracurricular experiences data for an additional Experiences view.

export interface ExtracurrExperienceLink {
  label: string;
  url: string;
  type?: 'GitHub' | 'Website' | 'LinkTree' | 'Award' | 'External' | string;
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
  // Currently empty – entries have been moved into academicExperiences.
];
