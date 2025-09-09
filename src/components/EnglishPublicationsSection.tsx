'use client';

import { englishPublications } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/utils/language';
import AttachmentList from '@/components/AttachmentList';

const EnglishPublicationsSection = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="english-papers" className="py-16 bg-academic-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">{t('section.englishPapers')}</h2>
        
        <div className="space-y-6">
          {englishPublications.map((paper, index) => (
            <div key={index} className="card">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-academic-900 leading-tight">
                  {getText(paper.title, 'en')}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <span className="font-medium">
                    Authors: {paper.authors.join(', ')}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <span className="font-medium text-primary-600">
                    {getText(paper.journal, 'en')}
                  </span>
                  <span>({paper.year})</span>
                  {paper.volume && (
                    <span>Vol. {paper.volume}</span>
                  )}
                  {paper.pages && (
                    <span>pp. {paper.pages}</span>
                  )}
                </div>
                
                {paper.doi && (
                  <div className="text-sm text-gray-500">
                    DOI: <a href={`https://doi.org/${paper.doi}`} className="text-primary-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      {paper.doi}
                    </a>
                  </div>
                )}
                
                {paper.attachments && paper.attachments.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Attachments:</h4>
                    <AttachmentList 
                      attachments={paper.attachments} 
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

export default EnglishPublicationsSection;