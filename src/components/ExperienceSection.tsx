'use client';

import { workExperience } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/utils/language';

const ExperienceSection = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="experience" className="py-16 bg-academic-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">{t('section.experience')}</h2>
        
        <div className="space-y-8">
          {workExperience.map((exp, index) => (
            <div key={index} className="card">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <div className="text-lg font-bold text-primary-600 mb-2">
                    {exp.startDate} - {exp.endDate}
                  </div>
                  <div className="text-xl font-semibold text-academic-900">
                    {getText(exp.position, language)}
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-academic-900 mb-3">
                    {getText(exp.organization, language)}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {getText(exp.description, language)}
                  </p>
                  
                  {exp.responsibilities && (
                    <div>
                      <h4 className="text-lg font-semibold text-academic-900 mb-2">
                        {t('common.responsibilities')}
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{getText(responsibility, language)}</li>
                        ))}
                      </ul>
                    </div>
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

export default ExperienceSection;