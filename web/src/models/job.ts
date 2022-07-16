import { LanguageTypes, LevelTypes, RoleTypes, ToolTypes } from 'types';

export interface Job {
  id: number;
  company: string;
  companyId: number;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: RoleTypes;
  level: LevelTypes;
  postedAt: string;
  workingTime: string;
  location: string;
  languages: LanguageTypes[];
  tools: ToolTypes[];
  link: string;
}
