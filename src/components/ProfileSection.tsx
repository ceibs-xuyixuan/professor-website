'use client';

import { personalProfile } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText, getTextArray } from '@/utils/language';

const ProfileSection = () => {
  const { language, t } = useLanguage();

  return (
    <section id="profile" className="py-16 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-200 to-primary-300 rounded-full flex items-center justify-center">
                {personalProfile.image ? (
                  <div className="w-72 h-72 rounded-full overflow-hidden">
                    <img
                      src={personalProfile.image}
                      alt={getText(personalProfile.name, language)}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center">
                    <svg className="w-32 h-32 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-academic-900 mb-2">
                {getText(personalProfile.name, language)}
              </h1>
              <div className="space-y-2 mb-4">
                {personalProfile.titles.map((title, index) => (
                  <h2 key={index} className="text-xl md:text-2xl text-primary-600">
                    {getText(title, language)}
                  </h2>
                ))}
              </div>
              <p className="text-lg text-gray-600 mb-2">
                {getText(personalProfile.department, language)}
              </p>
              <p className="text-lg text-gray-600">
                {getText(personalProfile.university, language)}
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg">
              {getText(personalProfile.bio, language)}
            </p>

            {/* Contact Information */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-academic-900 mb-4">{t('common.contact')}</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-gray-700">{personalProfile.contact.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-gray-700">{personalProfile.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{getText(personalProfile.contact.office, language)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Interests */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-academic-900 mb-8 text-center">{t('common.researchInterests')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {personalProfile.researchInterests.map((interest, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-primary-600 font-medium">{getText(interest, language)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;