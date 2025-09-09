'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-academic-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contactInfo')}</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: professor@university.edu</p>
              <p>{t('footer.contactInfo').includes('Contact') ? 'Phone' : '电话'}: +86 123 4567 8900</p>
              <p>{t('footer.contactInfo').includes('Contact') ? 'Office' : '办公室'}: {t('footer.contactInfo').includes('Contact') ? 'Business School A301' : '商学院 A座 301'}</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.academicResources')}</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                {t('footer.researchCenter')}
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                {t('footer.academicJournal')}
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                {t('footer.conferenceProceedings')}
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.socialMedia')}</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                ResearchGate
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors">
                ORCID
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-300 mb-4 md:mb-0">
              &copy; 2024 Professor Personal Website. {t('footer.copyright')}.
            </p>
            <Link
              href="/admin"
              className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-700 rounded-md hover:bg-gray-600 hover:text-white transition-colors"
            >
              {t('nav.admin')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;