'use client';

import { englishPublications } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/utils/language';
import AttachmentList from '@/components/AttachmentList';

const EnglishPublicationsSection = () => {
  const { language, t } = useLanguage();
  
  const getImpactColor = (index: number) => {
    const colors = [
      { bg: 'from-blue-500 to-indigo-600', accent: 'text-blue-600', light: 'bg-blue-50' },
      { bg: 'from-purple-500 to-pink-600', accent: 'text-purple-600', light: 'bg-purple-50' },
      { bg: 'from-green-500 to-teal-600', accent: 'text-green-600', light: 'bg-green-50' },
      { bg: 'from-red-500 to-orange-600', accent: 'text-red-600', light: 'bg-red-50' },
      { bg: 'from-indigo-500 to-purple-600', accent: 'text-indigo-600', light: 'bg-indigo-50' }
    ];
    return colors[index % colors.length];
  };
  
  return (
    <section id="english-papers" className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('section.englishPapers')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            {language === 'zh' 
              ? '国际期刊发表的英文学术论文，展现学术研究成果和国际影响力'
              : 'English academic papers published in international journals, showcasing research achievements and global impact'
            }
          </p>
        </div>
        
        <div className="space-y-8">
          {englishPublications.map((paper, index) => {
            const colorScheme = getImpactColor(index);
            
            return (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                {/* Header with publication number and type */}
                <div className={`bg-gradient-to-r ${colorScheme.bg} p-6 text-white relative overflow-hidden`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm opacity-90 font-medium uppercase tracking-wider">
                          {language === 'zh' ? '英文论文' : 'English Paper'}
                        </div>
                        <div className="text-lg font-bold">
                          #{(index + 1).toString().padStart(3, '0')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-white bg-opacity-20">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {paper.year}
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative background pattern */}
                  <div className="absolute -top-4 -right-4 opacity-10">
                    <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors mb-4">
                      {getText(paper.title, 'en')}
                    </h3>
                  </div>
                  
                  {/* Authors */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-1">
                        {language === 'zh' ? '作者' : 'Authors'}
                      </div>
                      <div className="text-lg font-medium text-gray-700">
                        {paper.authors.join(', ')}
                      </div>
                    </div>
                  </div>
                  
                  {/* Publication Info */}
                  <div className={`${colorScheme.light} rounded-xl p-6 border-l-4 border-blue-400`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Journal */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <svg className={`w-5 h-5 ${colorScheme.accent}`} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                            {language === 'zh' ? '期刊' : 'Journal'}
                          </div>
                          <div className={`font-semibold ${colorScheme.accent}`}>
                            {getText(paper.journal, 'en')}
                          </div>
                        </div>
                      </div>
                      
                      {/* Volume */}
                      {paper.volume && (
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                            <svg className={`w-5 h-5 ${colorScheme.accent}`} fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v4h4V6H4zm6 0v4h4V6h-4zM4 12v4h4v-4H4zm6 0v4h4v-4h-4z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                              {language === 'zh' ? '卷号' : 'Volume'}
                            </div>
                            <div className="font-semibold text-gray-700">
                              Vol. {paper.volume}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Pages */}
                      {paper.pages && (
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                            <svg className={`w-5 h-5 ${colorScheme.accent}`} fill="currentColor" viewBox="0 0 20 20">
                              <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                            </svg>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                              {language === 'zh' ? '页码' : 'Pages'}
                            </div>
                            <div className="font-semibold text-gray-700">
                              pp. {paper.pages}
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Year */}
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                          <svg className={`w-5 h-5 ${colorScheme.accent}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                            {language === 'zh' ? '发表年份' : 'Published'}
                          </div>
                          <div className="font-semibold text-gray-700">
                            {paper.year}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* DOI */}
                  {paper.doi && (
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                        </svg>
                        <div>
                          <span className="text-sm text-gray-600 font-medium">DOI: </span>
                          <a 
                            href={`https://doi.org/${paper.doi}`} 
                            className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors" 
                            target="_blank" 
                            rel="noopener noreferrer"
                          >
                            {paper.doi}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* Attachments */}
                  {paper.attachments && paper.attachments.length > 0 && (
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
                        <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"/>
                        </svg>
                        <span>{language === 'zh' ? '附件' : 'Attachments'}</span>
                      </h4>
                      <AttachmentList 
                        attachments={paper.attachments} 
                        showDelete={false}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Publications Summary */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">{englishPublications.length}</div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '英文论文总数' : 'Total English Papers'}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {Math.max(...englishPublications.map(p => parseInt(p.year)))}
              </div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '最新发表' : 'Latest Publication'}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v4h4V6H4zm6 0v4h4V6h-4zM4 12v4h4v-4H4zm6 0v4h4v-4h-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {new Set(englishPublications.map(p => getText(p.journal, 'en'))).size}
              </div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '发表期刊数' : 'Journals Published'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnglishPublicationsSection;