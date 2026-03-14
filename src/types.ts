export type UserRole = 'student' | 'company';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}

export interface StudentProfile extends User {
  collegeName: string;
  degree: string;
  yearOfStudy: string;
  skills: string[];
  interests: string[];
  preferredDomain: string;
  preferredLocation: string;
  resumeUrl?: string;
  extractedData?: {
    skills: string[];
    technologies: string[];
    projects: string[];
    education: string;
  };
}

export interface CompanyProfile extends User {
  companyName: string;
  industry: string;
  description: string;
}

export interface Internship {
  id: string;
  companyId: string;
  companyName: string;
  title: string;
  description: string;
  responsibilities: string[];
  requiredSkills: string[];
  benefits: string[];
  location: string;
  duration: string;
  stipend: string;
  postedAt: string;
}

export interface Application {
  id: string;
  internshipId: string;
  studentId: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  appliedAt: string;
  matchScore: number;
}

export interface MatchResult {
  score: number;
  reasoning: string;
}
