'use client';

import { books } from '@/data/bilingualProfileData';
import { useLanguage } from '@/contexts/LanguageContext';
import { getText } from '@/utils/language';

const BooksSection = () => {
  const { language, t } = useLanguage();
  
  return (
    <section id="books" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-title text-center">{t('section.books')}</h2>
        
        <div className="space-y-8">
          {books.map((book, index) => (
            <div key={index} className="card">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-1 flex justify-center md:justify-start">
                  <div className="w-32 h-48 bg-gradient-to-br from-primary-200 to-primary-400 rounded-lg shadow-lg flex items-center justify-center">
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  </div>
                </div>
                
                <div className="md:col-span-3 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-academic-900 mb-2">
                      {getText(book.title, language)}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-2">
                      <span className="font-medium">
                        {language === 'zh' ? '作者：' : 'Authors: '}{book.authors.join(language === 'zh' ? '、' : ', ')}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600">
                      <span className="font-medium text-primary-600">
                        {getText(book.publisher, language)}
                      </span>
                      <span>({book.year})</span>
                      {book.isbn && (
                        <span className="text-sm">ISBN: {book.isbn}</span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {getText(book.description, language)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BooksSection;