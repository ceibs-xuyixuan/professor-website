'use client';

import { chinesePublications } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/utils/language';
import AttachmentList from '@/components/AttachmentList';

const ChinesePublicationsSection = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="chinese-papers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">{t('section.chinesePapers')}</h2>
        
        <div className="space-y-6">
          {chinesePublications.map((paper, index) => (
            <div key={index} className="card">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-academic-900 leading-tight">
                  {getText(paper.title, 'zh')}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <span className="font-medium">
                    作者：{paper.authors.join('、')}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <span className="font-medium text-primary-600">
                    {getText(paper.journal, 'zh')}
                  </span>
                  <span>({paper.year})</span>
                  {paper.volume && (
                    <span>第{paper.volume}期</span>
                  )}
                  {paper.pages && (
                    <span>第{paper.pages}页</span>
                  )}
                </div>
                
                {paper.attachments && paper.attachments.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">附件：</h4>
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

export default ChinesePublicationsSection;