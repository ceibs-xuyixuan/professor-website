'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SectionVisibility } from '@/types';

interface SectionVisibilityContextType {
  sectionVisibility: SectionVisibility;
  updateSectionVisibility: (section: keyof SectionVisibility, visible: boolean) => void;
  setSectionVisibility: (visibility: SectionVisibility) => void;
}

const SectionVisibilityContext = createContext<SectionVisibilityContextType | undefined>(undefined);

export const useSectionVisibility = () => {
  const context = useContext(SectionVisibilityContext);
  if (context === undefined) {
    // Return default values when context is not available
    return {
      sectionVisibility: {
        caseStudies: true,
        books: true,
        journalPositions: true,
        videos: true,
        academicActivities: true,
        businessActivities: true,
        chinesePublications: true,
        professionalExperiences: true
      },
      updateSectionVisibility: () => {},
      setSectionVisibility: () => {}
    };
  }
  return context;
};

// Default visibility settings
const defaultVisibility: SectionVisibility = {
  caseStudies: true,
  books: true,
  journalPositions: true,
  videos: true,
  academicActivities: true,
  businessActivities: true,
  chinesePublications: true,
  professionalExperiences: true
};

interface SectionVisibilityProviderProps {
  children: ReactNode;
}

export const SectionVisibilityProvider: React.FC<SectionVisibilityProviderProps> = ({ children }) => {
  const [sectionVisibility, setSectionVisibilityState] = useState<SectionVisibility>(defaultVisibility);

  useEffect(() => {
    // Load visibility settings from localStorage
    const savedVisibility = localStorage.getItem('section_visibility');
    if (savedVisibility) {
      try {
        const parsedVisibility = JSON.parse(savedVisibility) as SectionVisibility;
        setSectionVisibilityState(parsedVisibility);
      } catch (error) {
        console.error('Error parsing saved visibility settings:', error);
      }
    }
  }, []);

  const updateSectionVisibility = (section: keyof SectionVisibility, visible: boolean) => {
    const newVisibility = {
      ...sectionVisibility,
      [section]: visible
    };
    setSectionVisibilityState(newVisibility);
    localStorage.setItem('section_visibility', JSON.stringify(newVisibility));
  };

  const setSectionVisibility = (visibility: SectionVisibility) => {
    setSectionVisibilityState(visibility);
    localStorage.setItem('section_visibility', JSON.stringify(visibility));
  };

  const value = {
    sectionVisibility,
    updateSectionVisibility,
    setSectionVisibility
  };

  return (
    <SectionVisibilityContext.Provider value={value}>
      {children}
    </SectionVisibilityContext.Provider>
  );
};