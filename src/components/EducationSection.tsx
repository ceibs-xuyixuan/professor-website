'use client';

import { education } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/utils/language';

const EducationSection = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">{t('section.education')}</h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="card">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <div className="text-2xl font-bold text-primary-600 mb-2">
                    {edu.year}
                  </div>
                  <div className="text-lg font-semibold text-academic-900">
                    {getText(edu.degree, language)}
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-academic-900 mb-2">
                    {getText(edu.institution, language)}
                  </h3>
                  <p className="text-lg text-primary-600 mb-3">
                    {language === 'zh' ? '专业：' : 'Field: '}{getText(edu.field, language)}
                  </p>
                  {edu.description && (
                    <p className="text-gray-700 leading-relaxed">
                      {getText(edu.description, language)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;