'use client';

import { caseStudies } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText, getTextArray } from '@/utils/language';
import AttachmentList from '@/components/AttachmentList';

const CaseStudiesSection = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="cases" className="py-16 bg-academic-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">{t('section.cases')}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <div key={index} className="card h-full">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-academic-900 leading-tight">
                    {getText(caseStudy.title, language)}
                  </h3>
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                    {caseStudy.year}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600 font-medium">{getText(caseStudy.industry, language)}</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  {getText(caseStudy.description, language)}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {caseStudy.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs font-medium text-primary-700 bg-primary-100 px-2 py-1 rounded-full"
                    >
                      {getText(tag, language)}
                    </span>
                  ))}
                </div>
                
                {caseStudy.attachments && caseStudy.attachments.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      {language === 'zh' ? '附件：' : 'Attachments:'}
                    </h4>
                    <AttachmentList 
                      attachments={caseStudy.attachments} 
                      showDelete={false}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;