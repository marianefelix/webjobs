export interface Job {
  id: number;
  company: string;
  companyId: number;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  workingTime: string;
  location: string;
  languages: string[];
  tools: string[];
  link: string;
}
