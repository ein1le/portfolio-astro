// Academic experiences data for the Experiences > Academic view.

export type AcademicExperienceType = 'Researcher';

export interface AcademicExperience {
  title: string;
  role: string;
  dates: string;
  location: string;
  type: AcademicExperienceType;
  description: string;
  skills: string[];
  logo?: string;
}

export const academicExperiences: AcademicExperience[] = [];
