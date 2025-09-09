'use client';

import { workExperience } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/utils/language';

const ExperienceSection = () => {
  const { language, t } = useLanguage();
  
  const calculateYearsExperience = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);
    return Math.round((end.getTime() - start.getTime()) / (1000 * 3600 * 24 * 365.25 * 100)) / 100;
  };
  
  const isCurrentPosition = (endDate: string) => {
    return endDate === 'Present' || endDate === '现在';
  };
  
  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-green-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('section.experience')}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
            {language === 'zh' 
              ? '专业职业经历和工作历程，展示了成长和发展轨迹'
              : 'Professional career journey showcasing growth and development trajectory'
            }
          </p>
        </div>
        
        {/* Experience Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-1 bg-gradient-to-b from-green-400 via-teal-400 to-green-400 rounded-full"></div>
          
          <div className="space-y-16">
            {workExperience.map((exp, index) => {
              const isEven = index % 2 === 0;
              const yearsOfExperience = calculateYearsExperience(exp.startDate, exp.endDate);
              
              return (
                <div key={index} className="relative">
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 z-20">
                    <div className={`w-6 h-6 rounded-full border-4 ${isCurrentPosition(exp.endDate) 
                      ? 'bg-green-500 border-green-300 animate-pulse shadow-lg shadow-green-300' 
                      : 'bg-white border-green-500'} flex items-center justify-center`}>
                      {isCurrentPosition(exp.endDate) && (
                        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      )}
                    </div>
                  </div>
                  
                  {/* Experience Card */}
                  <div className={`ml-20 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
                      
                      {/* Header with Position Info */}
                      <div className={`bg-gradient-to-r ${isCurrentPosition(exp.endDate) 
                        ? 'from-green-500 to-teal-500' 
                        : 'from-gray-600 to-gray-700'} p-6 text-white relative overflow-hidden`}>
                        
                        {/* Current Position Badge */}
                        {isCurrentPosition(exp.endDate) && (
                          <div className="absolute top-4 right-4">
                            <div className="flex items-center space-x-1 bg-white bg-opacity-20 rounded-full px-3 py-1 text-sm font-medium">
                              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                              <span>{language === 'zh' ? '在职' : 'Current'}</span>
                            </div>
                          </div>
                        )}
                        
                        {/* Position Title */}
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold mb-2">
                            {getText(exp.position, language)}
                          </h3>
                          <div className="flex items-center space-x-2 text-lg opacity-90">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span className="font-medium">
                              {exp.startDate} - {exp.endDate}
                            </span>
                          </div>
                        </div>
                        
                        {/* Experience Duration */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v4h4V6H4zm6 0v4h4V6h-4zM4 12v4h4v-4H4zm6 0v4h4v-4h-4z" clipRule="evenodd"/>
                              </svg>
                            </div>
                            <div>
                              <div className="text-sm opacity-80">
                                {language === 'zh' ? '工作年限' : 'Duration'}
                              </div>
                              <div className="font-semibold">
                                {yearsOfExperience > 1 
                                  ? `${Math.floor(yearsOfExperience)} ${language === 'zh' ? '年' : 'years'}` 
                                  : `${Math.round(yearsOfExperience * 12)} ${language === 'zh' ? '个月' : 'months'}`}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Background pattern */}
                        <div className="absolute -top-4 -right-4 opacity-10">
                          <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v4h4V6H4zm6 0v4h4V6h-4zM4 12v4h4v-4H4zm6 0v4h4v-4h-4z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6 space-y-6">
                        {/* Organization */}
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v4h4V6H4zm6 0v4h4V6h-4zM4 12v4h4v-4H4zm6 0v4h4v-4h-4z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                            {getText(exp.organization, language)}
                          </h4>
                        </div>
                        
                        {/* Description */}
                        <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-green-400">
                          <p className="text-gray-700 leading-relaxed">
                            {getText(exp.description, language)}
                          </p>
                        </div>
                        
                        {/* Responsibilities */}
                        {exp.responsibilities && exp.responsibilities.length > 0 && (
                          <div>
                            <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                              </svg>
                              <span>{t('common.responsibilities')}</span>
                            </h5>
                            <div className="space-y-2">
                              {exp.responsibilities.map((responsibility, idx) => (
                                <div key={idx} className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 transition-colors">
                                  <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                                  <span className="text-gray-700 leading-relaxed">
                                    {getText(responsibility, language)}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Career Summary */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl border border-green-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">{workExperience.length}</div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '总职位数' : 'Total Positions'}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {Math.round(workExperience.reduce((sum, exp) => 
                  sum + calculateYearsExperience(exp.startDate, exp.endDate), 0
                ))}
              </div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '年总经验' : 'Years Experience'}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v4h4V6H4zm6 0v4h4V6h-4zM4 12v4h4v-4H4zm6 0v4h4v-4h-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {new Set(workExperience.map(exp => getText(exp.organization, language))).size}
              </div>
              <div className="text-gray-600 font-medium">
                {language === 'zh' ? '服务机构' : 'Organizations'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;