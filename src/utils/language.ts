import { BilingualText } from '@/types';
import { Language } from '@/contexts/LanguageContext';

// Helper function to get text in the appropriate language
export const getText = (text: BilingualText, language: Language): string => {
  return text[language];
};

// Helper function to get text array in the appropriate language
export const getTextArray = (textArray: BilingualText[], language: Language): string[] => {
  return textArray.map(text => getText(text, language));
};