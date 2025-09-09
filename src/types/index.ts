// Bilingual text interface
export interface BilingualText {
  zh: string;
  en: string;
}

// Personal profile data
export interface PersonalProfile {
  name: BilingualText;
  titles: BilingualText[]; // Changed from title to titles array
  department: BilingualText;
  university: BilingualText;
  image: string;
  bio: BilingualText;
  researchInterests: BilingualText[];
  contact: {
    email: string;
    phone: string;
    office: BilingualText;
  };
}

// Education background
export interface Education {
  degree: BilingualText;
  institution: BilingualText;
  year: string;
  field: BilingualText;
  description?: BilingualText;
}

// Work experience
export interface WorkExperience {
  position: BilingualText;
  organization: BilingualText;
  startDate: string;
  endDate: string;
  description: BilingualText;
  responsibilities?: BilingualText[];
}

// Professional experience
export interface ProfessionalExperience {
  title: BilingualText;
  organization: BilingualText;
  startDate: string;
  endDate?: string; // Optional for ongoing experiences
  description: BilingualText;
  type: 'consulting' | 'advisory' | 'board' | 'committee' | 'partnership' | 'other';
  location?: BilingualText;
  achievements?: BilingualText[];
  isOngoing: boolean;
}

// Awards
export interface Award {
  title: BilingualText;
  organization: BilingualText;
  year: string;
  description: BilingualText;
}

// Attachment
export interface Attachment {
  id: string;
  name: string;
  originalName: string;
  size: number;
  type: string;
  url: string;
  uploadDate: string;
}

// Publications
export interface Publication {
  title: BilingualText;
  authors: string[];
  journal: BilingualText;
  year: string;
  volume?: string;
  pages?: string;
  doi?: string;
  abstract?: BilingualText;
  attachments?: Attachment[];
}

// Case studies
export interface CaseStudy {
  title: BilingualText;
  industry: BilingualText;
  year: string;
  description: BilingualText;
  tags: BilingualText[];
  attachments?: Attachment[];
}

// Books
export interface Book {
  title: BilingualText;
  authors: string[];
  publisher: BilingualText;
  year: string;
  isbn?: string;
  description: BilingualText;
}

// Activities
export interface Activity {
  title: BilingualText;
  type: 'academic' | 'business';
  date: string;
  location: BilingualText;
  description: BilingualText;
  role?: BilingualText;
}

// Video Channel
export interface Video {
  id: string;
  title: BilingualText;
  description: BilingualText;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  publishDate: string;
  category: 'lecture' | 'interview' | 'conference' | 'tutorial' | 'other';
  views?: number;
  tags: BilingualText[];
}

// Journal Position
export interface JournalPosition {
  journalName: BilingualText;
  position: BilingualText;
  startDate: string;
  endDate?: string; // Optional for current positions
  description?: BilingualText;
  category: 'editorial_board' | 'reviewer' | 'editor' | 'associate_editor' | 'guest_editor';
  isActive: boolean;
}

// Section Visibility Configuration
export interface SectionVisibility {
  caseStudies: boolean;
  books: boolean;
  journalPositions: boolean;
  videos: boolean;
  academicActivities: boolean;
  businessActivities: boolean;
  chinesePublications: boolean;
  professionalExperiences: boolean;
}

// Admin User
export interface AdminUser {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'editor';
}