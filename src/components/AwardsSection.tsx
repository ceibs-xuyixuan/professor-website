'use client';

import { awards } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/utils/language';

const AwardsSection = () => {
  const { language, t } = useLanguage();
  
  const getAwardIcon = (index: number) => {
    const icons = [
      // Trophy
      <path key="trophy" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />,
      // Medal
      <path key="medal" d="M4.258 8.042l-1.914 4.197C2.068 12.83 2.654 13.5 3.333 13.5h1.334l1-2.5-1.409-2.958zm11.484 0L14.333 11l1 2.5h1.334c.679 0 1.265-.67.989-1.261L15.742 8.042zM10 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"/>,
      // Award
      <path key="award" d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V7h4a2 2 0 012 2v6a2 2 0 002-2V5a2 2 0 00-2-2H5z"/>,
      // Certificate 
      <path key="certificate" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v4h4V6H4zm6 0v4h4V6h-4zM4 12v4h4v-4H4zm6 0v4h4v-4h-4z"/>
    ];
    return icons[index % icons.length];
  };
  
  const getGradientClass = (index: number) => {
    const gradients = [
      'from-yellow-400 via-yellow-500 to-yellow-600',
      'from-purple-400 via-purple-500 to-purple-600', 
      'from-blue-400 via-blue-500 to-blue-600',
      'from-green-400 via-green-500 to-green-600',
      'from-red-400 via-red-500 to-red-600',
      'from-indigo-400 via-indigo-500 to-indigo-600'
    ];
    return gradients[index % gradients.length];
  };
  
  return (
    <section id="awards" className="py-16 bg-gradient-to-br from-yellow-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('section.awards')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            {language === 'zh' 
              ? '荣获的奖项和荣誉认可，体现了专业水准和学术贡献'
              : 'Recognition and honors that reflect professional excellence and academic contribution'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {awards.map((award, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 overflow-hidden">
              {/* Header with award icon */}
              <div className="relative p-6 pb-4">
                <div className="flex items-start space-x-4">
                  {/* Dynamic Award Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${getGradientClass(index)} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      {getAwardIcon(index)}
                    </svg>
                  </div>
                  
                  {/* Award Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-yellow-600 transition-colors">
                        {getText(award.title, language)}
                      </h3>
                      <div className="flex-shrink-0 ml-4">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${getGradientClass(index)} text-white shadow-md`}>
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {award.year}
                        </div>
                      </div>
                    </div>
                    
                    {/* Organization */}
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v4h4V6H4zm6 0v4h4V6h-4zM4 12v4h4v-4H4zm6 0v4h4v-4h-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <p className="text-lg text-gray-700 font-medium">
                        {getText(award.organization, language)}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Award Description */}
                <div className="mt-4 p-4 bg-gradient-to-r from-gray-50 to-yellow-50 rounded-xl border-l-4 border-yellow-400">
                  <p className="text-gray-700 leading-relaxed">
                    {getText(award.description, language)}
                  </p>
                </div>
              </div>
              
              {/* Decorative bottom border */}
              <div className={`h-2 bg-gradient-to-r ${getGradientClass(index)} group-hover:h-3 transition-all duration-300`}></div>
              
              {/* Floating decorative elements */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-20 h-20 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
        
        {/* Statistics section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-yellow-100">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{awards.length}</div>
            <div className="text-gray-600">
              {language === 'zh' ? '总荣誉数' : 'Total Awards'}
            </div>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {Math.max(...awards.map(a => parseInt(a.year)))}
            </div>
            <div className="text-gray-600">
              {language === 'zh' ? '最新获奖' : 'Latest Award'}
            </div>
          </div>
          
          <div className="text-center bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">
              {new Set(awards.map(a => getText(a.organization, language))).size}
            </div>
            <div className="text-gray-600">
              {language === 'zh' ? '授奖机构' : 'Institutions'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;