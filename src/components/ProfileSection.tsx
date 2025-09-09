'use client';

import { personalProfile } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText, getTextArray } from '@/utils/language';

const ProfileSection = () => {
  const { language, t } = useLanguage();

  const contactItems = [
    {
      icon: (
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      ),
      iconExtra: (
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      ),
      value: personalProfile.contact.email,
      label: language === 'zh' ? '邮箱' : 'Email',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: (
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      ),
      value: personalProfile.contact.phone,
      label: language === 'zh' ? '电话' : 'Phone',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: (
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
      ),
      value: getText(personalProfile.contact.office, language),
      label: language === 'zh' ? '办公室' : 'Office',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    }
  ];

  return (
    <section id="profile" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-200 to-blue-200 rounded-full opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-200 via-blue-200 to-purple-300 rounded-full flex items-center justify-center shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                {personalProfile.image ? (
                  <div className="w-72 h-72 rounded-full overflow-hidden shadow-inner">
                    <img
                      src={personalProfile.image}
                      alt={getText(personalProfile.name, language)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="w-72 h-72 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center shadow-inner">
                    <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              
              {/* Floating decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-300 opacity-20 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-purple-300 opacity-30 animate-spin-reverse-slow"></div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                {getText(personalProfile.name, language)}
              </h1>
              
              <div className="space-y-3 mb-6">
                {personalProfile.titles.map((title, index) => (
                  <h2 key={index} className="text-xl md:text-2xl text-primary-600 font-medium bg-primary-50 px-4 py-2 rounded-lg inline-block mr-2 mb-2">
                    {getText(title, language)}
                  </h2>
                ))}
              </div>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm0 2v4h4V6H4zm6 0v4h4V6h-4zM4 12v4h4v-4H4zm6 0v4h4v-4h-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 font-medium">
                    {getText(personalProfile.department, language)}
                  </p>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700 font-medium">
                    {getText(personalProfile.university, language)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <p className="text-gray-700 leading-relaxed text-lg">
                {getText(personalProfile.bio, language)}
              </p>
            </div>

            {/* Enhanced Contact Information */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
                <h3 className="text-xl font-semibold text-white flex items-center space-x-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" />
                  </svg>
                  <span>{t('common.contact')}</span>
                </h3>
              </div>
              
              <div className="p-6 space-y-4">
                {contactItems.map((item, index) => (
                  <div key={index} className={`flex items-center space-x-4 p-4 ${item.bgColor} ${item.borderColor} border-l-4 rounded-lg hover:shadow-md transition-all duration-300 group`}>
                    <div className={`w-12 h-12 ${item.color.replace('text-', 'bg-').replace('600', '100')} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <svg className={`w-6 h-6 ${item.color}`} fill="currentColor" viewBox="0 0 20 20">
                        {item.icon}
                        {item.iconExtra && item.iconExtra}
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{item.label}</div>
                      <div className={`text-lg font-semibold ${item.color} group-hover:underline`}>
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Research Interests */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{t('common.researchInterests')}</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto">
              {language === 'zh' 
                ? '研究领域和学术兴趣，体现了专业专长和学术追求'
                : 'Research domains and academic interests reflecting professional expertise and scholarly pursuits'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {personalProfile.researchInterests.map((interest, index) => {
              const colors = [
                { bg: 'bg-blue-500', text: 'text-blue-500', light: 'bg-blue-50' },
                { bg: 'bg-purple-500', text: 'text-purple-500', light: 'bg-purple-50' },
                { bg: 'bg-green-500', text: 'text-green-500', light: 'bg-green-50' },
                { bg: 'bg-red-500', text: 'text-red-500', light: 'bg-red-50' },
                { bg: 'bg-yellow-500', text: 'text-yellow-500', light: 'bg-yellow-50' },
                { bg: 'bg-indigo-500', text: 'text-indigo-500', light: 'bg-indigo-50' },
                { bg: 'bg-pink-500', text: 'text-pink-500', light: 'bg-pink-50' },
                { bg: 'bg-teal-500', text: 'text-teal-500', light: 'bg-teal-50' }
              ];
              const colorScheme = colors[index % colors.length];
              
              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden`}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 ${colorScheme.light} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className={`relative w-12 h-12 ${colorScheme.bg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  
                  {/* Text */}
                  <span className={`relative text-sm font-semibold text-gray-700 group-hover:${colorScheme.text} transition-colors duration-300 leading-tight`}>
                    {getText(interest, language)}
                  </span>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-current rounded-2xl transition-colors duration-300" style={{ borderColor: 'currentColor' }}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;