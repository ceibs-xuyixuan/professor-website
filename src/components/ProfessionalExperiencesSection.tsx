'use client';

import { useState } from 'react';
import { ProfessionalExperience } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/utils/language';

interface ProfessionalExperiencesSectionProps {
  professionalExperiences: ProfessionalExperience[];
}

const ProfessionalExperiencesSection: React.FC<ProfessionalExperiencesSectionProps> = ({ 
  professionalExperiences 
}) => {
  const { language, t } = useLanguage();
  const [selectedType, setSelectedType] = useState<string>('all');

  const typeOptions = [
    { value: 'all', label: t('professionalExperiences.types.all') || 'All' },
    { value: 'consulting', label: t('professionalExperiences.types.consulting') || 'Consulting' },
    { value: 'advisory', label: t('professionalExperiences.types.advisory') || 'Advisory' },
    { value: 'board', label: t('professionalExperiences.types.board') || 'Board Position' },
    { value: 'committee', label: t('professionalExperiences.types.committee') || 'Committee' },
    { value: 'partnership', label: t('professionalExperiences.types.partnership') || 'Partnership' },
    { value: 'other', label: t('professionalExperiences.types.other') || 'Other' }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'consulting': return 'bg-blue-100 text-blue-800';
      case 'advisory': return 'bg-green-100 text-green-800';
      case 'board': return 'bg-purple-100 text-purple-800';
      case 'committee': return 'bg-orange-100 text-orange-800';
      case 'partnership': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeLabel = (type: string) => {
    const typeMap: { [key: string]: string } = {
      consulting: t('professionalExperiences.types.consulting') || 'Consulting',
      advisory: t('professionalExperiences.types.advisory') || 'Advisory',
      board: t('professionalExperiences.types.board') || 'Board Position',
      committee: t('professionalExperiences.types.committee') || 'Committee',
      partnership: t('professionalExperiences.types.partnership') || 'Partnership',
      other: t('professionalExperiences.types.other') || 'Other'
    };
    return typeMap[type] || type;
  };

  const filteredExperiences = professionalExperiences.filter(experience => {
    if (selectedType === 'all') return true;
    return experience.type === selectedType;
  });

  const sortedExperiences = [...filteredExperiences].sort((a, b) => {
    // Sort by start date, most recent first
    return parseInt(b.startDate) - parseInt(a.startDate);
  });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('professionalExperiences.title') || 'Professional Experiences'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('professionalExperiences.description') || 'Industry leadership, advisory roles, and professional contributions in business and technology sectors'}
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {typeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedType(option.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedType === option.value
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-primary-50'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Professional Experiences Timeline */}
        <div className="space-y-8">
          {sortedExperiences.map((experience, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== sortedExperiences.length - 1 && (
                <div className="absolute left-4 top-16 w-0.5 h-full bg-gray-200"></div>
              )}
              
              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  experience.isOngoing ? 'bg-green-500' : 'bg-primary-600'
                }`}>
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Experience card */}
                <div className="flex-1 bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {getText(experience.title, language)}
                      </h3>
                      <div className="flex items-center space-x-3 mb-2">
                        <p className="text-lg text-primary-600 font-medium">
                          {getText(experience.organization, language)}
                        </p>
                        {experience.location && (
                          <span className="text-gray-500">
                            📍 {getText(experience.location, language)}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(experience.type)}`}>
                        {getTypeLabel(experience.type)}
                      </span>
                      {experience.isOngoing && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {t('professionalExperiences.ongoing') || 'Ongoing'}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">
                        {experience.startDate}
                        {experience.endDate && ` - ${experience.endDate}`}
                        {!experience.endDate && experience.isOngoing && ` - ${t('professionalExperiences.present') || 'Present'}`}
                      </span>
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {getText(experience.description, language)}
                    </p>
                  </div>

                  {/* Achievements */}
                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-3">
                        {t('professionalExperiences.achievements') || 'Key Achievements:'}
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-600">
                              {getText(achievement, language)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredExperiences.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
            </svg>
            <p className="text-gray-500 text-lg">
              {t('professionalExperiences.noResults') || 'No professional experiences found for the selected type.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfessionalExperiencesSection;