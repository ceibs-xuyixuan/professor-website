'use client';

import ProfileSection from '@/components/ProfileSection';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  const sections = [
    { title: t('section.education'), href: '/education', icon: '🎓' },
    { title: t('section.experience'), href: '/experience', icon: '💼' },
    { title: t('section.awards'), href: '/awards', icon: '🏆' },
    { title: t('section.englishPapers'), href: '/english-publications', icon: '📚' },
    { title: t('section.chinesePapers'), href: '/chinese-publications', icon: '📰' },
    { title: t('section.cases'), href: '/case-studies', icon: '📊' },
    { title: t('section.books'), href: '/books', icon: '📖' },
    { title: t('section.videos'), href: '/videos', icon: '📹' },
    { title: t('section.academicActivities') + ' & ' + t('section.businessActivities'), href: '/activities', icon: '🎯' },
  ];

  return (
    <div className="bg-white">
      <ProfileSection />
      
      {/* Section Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('common.academicResources')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <Link key={index} href={section.href} className="group">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full">
                  <div className="text-4xl mb-4">{section.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                    {section.title}
                  </h3>
                  <div className="mt-4 text-primary-600 group-hover:translate-x-2 transition-transform duration-300">
                    查看详情 →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}