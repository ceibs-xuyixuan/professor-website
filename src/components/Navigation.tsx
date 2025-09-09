'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSectionVisibility } from '@/contexts/SectionVisibilityContext';
import LanguageToggle from '@/components/LanguageToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const { sectionVisibility } = useSectionVisibility();

  const navigationItems = [
    { label: t('nav.profile'), href: '/', visible: true },
    { label: t('nav.education'), href: '/education', visible: true },
    { label: t('nav.experience'), href: '/experience', visible: true },
    { label: t('nav.awards'), href: '/awards', visible: true },
    { label: t('nav.englishPapers'), href: '/english-publications', visible: true },
    { label: t('nav.chinesePapers'), href: '/chinese-publications', visible: sectionVisibility.chinesePublications },
    { label: t('nav.cases'), href: '/case-studies', visible: sectionVisibility.caseStudies },
    { label: t('nav.books'), href: '/books', visible: sectionVisibility.books },
    { label: t('nav.journalPositions') || '期刊任职', href: '/journal-positions', visible: sectionVisibility.journalPositions },
    { label: t('nav.videos'), href: '/videos', visible: sectionVisibility.videos },
    { label: t('nav.academicActivities') + ' & ' + t('nav.businessActivities'), href: '/activities', visible: sectionVisibility.academicActivities || sectionVisibility.businessActivities },
  ].filter(item => item.visible);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary-600">
              Professor Website
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;