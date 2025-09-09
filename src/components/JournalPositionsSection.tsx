'use client';

import { useState } from 'react';
import { JournalPosition } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/utils/language';

interface JournalPositionsSectionProps {
  journalPositions: JournalPosition[];
}

const JournalPositionsSection: React.FC<JournalPositionsSectionProps> = ({ journalPositions }) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showActiveOnly, setShowActiveOnly] = useState(false);

  const categories = [
    { value: 'all', label: t('journalPositions.categories.all') || 'All' },
    { value: 'editorial_board', label: t('journalPositions.categories.editorialBoard') || 'Editorial Board' },
    { value: 'editor', label: t('journalPositions.categories.editor') || 'Editor' },
    { value: 'associate_editor', label: t('journalPositions.categories.associateEditor') || 'Associate Editor' },
    { value: 'guest_editor', label: t('journalPositions.categories.guestEditor') || 'Guest Editor' },
    { value: 'reviewer', label: t('journalPositions.categories.reviewer') || 'Reviewer' }
  ];

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'editorial_board': return 'bg-purple-100 text-purple-800';
      case 'editor': return 'bg-red-100 text-red-800';
      case 'associate_editor': return 'bg-blue-100 text-blue-800';
      case 'guest_editor': return 'bg-green-100 text-green-800';
      case 'reviewer': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryLabel = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      editorial_board: t('journalPositions.categories.editorialBoard') || 'Editorial Board',
      editor: t('journalPositions.categories.editor') || 'Editor',
      associate_editor: t('journalPositions.categories.associateEditor') || 'Associate Editor',
      guest_editor: t('journalPositions.categories.guestEditor') || 'Guest Editor',
      reviewer: t('journalPositions.categories.reviewer') || 'Reviewer'
    };
    return categoryMap[category] || category;
  };

  const filteredPositions = journalPositions.filter(position => {
    if (selectedCategory !== 'all' && position.category !== selectedCategory) return false;
    if (showActiveOnly && !position.isActive) return false;
    return true;
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('journalPositions.title') || 'Journal Editorial Positions'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('journalPositions.description') || 'Editorial positions and reviewing roles at leading academic journals in management science and operations research'}
          </p>
        </div>

        {/* Filter Controls */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-primary-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showActiveOnly}
              onChange={(e) => setShowActiveOnly(e.target.checked)}
              className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-sm font-medium text-gray-600">
              {t('journalPositions.showActiveOnly') || 'Current positions only'}
            </span>
          </label>
        </div>

        {/* Journal Positions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPositions.map((position, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {getText(position.journalName, language)}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">
                    {getText(position.position, language)}
                  </p>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryBadgeColor(position.category)}`}>
                    {getCategoryLabel(position.category)}
                  </span>
                  {position.isActive && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {t('journalPositions.current') || 'Current'}
                    </span>
                  )}
                </div>
              </div>

              <div className="text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>
                    {position.startDate}
                    {position.endDate && ` - ${position.endDate}`}
                    {!position.endDate && position.isActive && ` - ${t('journalPositions.present') || 'Present'}`}
                  </span>
                </div>
              </div>

              {position.description && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {getText(position.description, language)}
                </p>
              )}
            </div>
          ))}
        </div>

        {filteredPositions.length === 0 && (
          <div className="text-center py-12">
            <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-gray-500 text-lg">
              {t('journalPositions.noResults') || 'No journal positions found matching the selected criteria.'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default JournalPositionsSection;