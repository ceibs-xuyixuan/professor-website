'use client';

import { caseStudies } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText, getTextArray } from '@/utils/language';
import AttachmentList from '@/components/AttachmentList';

const CaseStudiesSection = () => {
  const { language, t } = useLanguage();
  
  const getIndustryIcon = (industry: string) => {
    const industryMap: { [key: string]: JSX.Element } = {
      // Technology/Tech
      'technology': <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />,
      // Finance/Financial
      'finance': <path d="M12 2l3.09 6.26L22 9l-5.91 5.26L18 21l-6-3.27L6 21l1.91-6.74L2 9l6.91-.74L12 2z" />,
      // Healthcare/Medical
      'healthcare': <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />,
      // Default
      'default': <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
    };
    
    const lowerIndustry = industry.toLowerCase();
    if (lowerIndustry.includes('tech')) return industryMap['technology'];
    if (lowerIndustry.includes('finance') || lowerIndustry.includes('bank')) return industryMap['finance'];
    if (lowerIndustry.includes('health') || lowerIndustry.includes('medical')) return industryMap['healthcare'];
    return industryMap['default'];
  };
  
  const getCaseGradient = (index: number) => {
    const gradients = [
      { bg: 'from-blue-500 to-cyan-600', accent: 'text-blue-600', light: 'bg-blue-50', border: 'border-blue-200' },
      { bg: 'from-purple-500 to-pink-600', accent: 'text-purple-600', light: 'bg-purple-50', border: 'border-purple-200' },
      { bg: 'from-green-500 to-emerald-600', accent: 'text-green-600', light: 'bg-green-50', border: 'border-green-200' },
      { bg: 'from-red-500 to-rose-600', accent: 'text-red-600', light: 'bg-red-50', border: 'border-red-200' },
      { bg: 'from-amber-500 to-orange-600', accent: 'text-amber-600', light: 'bg-amber-50', border: 'border-amber-200' },
      { bg: 'from-indigo-500 to-blue-600', accent: 'text-indigo-600', light: 'bg-indigo-50', border: 'border-indigo-200' }
    ];
    return gradients[index % gradients.length];
  };
  
  return (
    <section id="cases" className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('section.cases')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            {language === 'zh' 
              ? '实际案例研究和商业应用，展示理论与实践的结合'
              : 'Practical case studies and business applications, showcasing the integration of theory and practice'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => {
            const colorScheme = getCaseGradient(index);
            
            return (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden h-full flex flex-col">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${colorScheme.bg} p-6 text-white relative overflow-hidden`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          {getIndustryIcon(getText(caseStudy.industry, language))}
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm opacity-90 font-medium uppercase tracking-wider">
                          {language === 'zh' ? '案例研究' : 'Case Study'}
                        </div>
                        <div className="text-lg font-bold">
                          #{(index + 1).toString().padStart(2, '0')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-white bg-opacity-20 backdrop-blur-sm">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {caseStudy.year}
                      </div>
                    </div>
                  </div>
                  
                  {/* Background decorative pattern */}
                  <div className="absolute -top-4 -right-4 opacity-10">
                    <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 flex-1 flex flex-col space-y-4">
                  {/* Title */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors mb-3">
                      {getText(caseStudy.title, language)}
                    </h3>
                  </div>
                  
                  {/* Industry */}
                  <div className={`flex items-center space-x-3 ${colorScheme.light} ${colorScheme.border} border-l-4 rounded-lg p-3`}>
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <svg className={`w-4 h-4 ${colorScheme.accent}`} fill="currentColor" viewBox="0 0 20 20">
                        {getIndustryIcon(getText(caseStudy.industry, language))}
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                        {language === 'zh' ? '行业领域' : 'Industry'}
                      </div>
                      <div className={`font-semibold ${colorScheme.accent}`}>
                        {getText(caseStudy.industry, language)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      {getText(caseStudy.description, language)}
                    </p>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {caseStudy.tags.slice(0, 4).map((tag, tagIndex) => {
                      const tagColors = [
                        'bg-blue-100 text-blue-700',
                        'bg-green-100 text-green-700',
                        'bg-purple-100 text-purple-700',
                        'bg-red-100 text-red-700',
                        'bg-amber-100 text-amber-700',
                        'bg-indigo-100 text-indigo-700'
                      ];
                      const tagColor = tagColors[tagIndex % tagColors.length];
                      
                      return (
                        <span
                          key={tagIndex}
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${tagColor} hover:scale-105 transition-transform duration-200`}
                        >
                          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                          </svg>
                          {getText(tag, language)}
                        </span>
                      );
                    })}
                    {caseStudy.tags.length > 4 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{caseStudy.tags.length - 4} {language === 'zh' ? '更多' : 'more'}
                      </span>
                    )}
                  </div>
                  
                  {/* Attachments */}
                  {caseStudy.attachments && caseStudy.attachments.length > 0 && (
                    <div className="border-t border-gray-200 pt-4 mt-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd"/>
                        </svg>
                        <span>{language === 'zh' ? '相关文档' : 'Related Documents'}</span>
                      </h4>
                      <AttachmentList 
                        attachments={caseStudy.attachments} 
                        showDelete={false}
                      />
                    </div>
                  )}
                </div>
                
                {/* Footer with hover effect */}
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 group-hover:bg-gradient-to-r group-hover:from-gray-50 group-hover:to-blue-50 transition-all duration-300">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      <span>{language === 'zh' ? '发布于' : 'Published in'} {caseStudy.year}</span>
                    </div>
                    
                    <div className="flex items-center space-x-1 text-blue-600 group-hover:text-blue-700 transition-colors">
                      <span className="text-xs font-medium">{language === 'zh' ? '查看详情' : 'View Details'}</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Case Studies Summary */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">{caseStudies.length}</div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '案例总数' : 'Total Cases'}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v4h4V6H4zm6 0v4h4V6h-4zM4 12v4h4v-4H4zm6 0v4h4v-4h-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {new Set(caseStudies.map(c => getText(c.industry, language))).size}
              </div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '涉及行业' : 'Industries Covered'}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {caseStudies.reduce((sum, c) => sum + c.tags.length, 0)}
              </div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '标签总数' : 'Total Tags'}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {Math.max(...caseStudies.map(c => parseInt(c.year)))}
              </div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '最新案例' : 'Latest Case'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;