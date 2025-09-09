'use client';

import { academicActivities } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/utils/language';

const AcademicActivitiesSection = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="academic-activities" className="py-16 bg-academic-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">{t('section.academicActivities')}</h2>
        
        <div className="space-y-6">
          {academicActivities.map((activity, index) => (
            <div key={index} className="card">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <div className="text-lg font-bold text-primary-600 mb-2">
                    {new Date(activity.date).toLocaleDateString(language === 'zh' ? 'zh-CN' : 'en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{getText(activity.location, language)}</span>
                  </div>
                </div>
                
                <div className="md:col-span-3 space-y-3">
                  <h3 className="text-xl font-bold text-academic-900">
                    {getText(activity.title, language)}
                  </h3>
                  
                  {activity.role && (
                    <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                      {getText(activity.role, language)}
                    </div>
                  )}
                  
                  <p className="text-gray-700 leading-relaxed">
                    {getText(activity.description, language)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicActivitiesSection;